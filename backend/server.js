import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import multer from "multer";
import { verifyToken } from "./firebase.js";
import dotenv from "dotenv";

dotenv.config();

// Check required environment variables
const requiredEnvVars = ['MONGO_URI'];
const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

if (missingEnvVars.length > 0) {
  console.warn('⚠️  Warning: Missing environment variables:', missingEnvVars.join(', '));
  console.warn('   The server will use default values or may not function properly.');
}

const app = express();
const PORT = process.env.PORT || 5000;

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// MongoDB connection
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/eco-react";

// Add connection options for better reliability
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
})
.then(() => console.log("✅ Connected to MongoDB Atlas"))
.catch((err) => console.error("❌ Error connecting to MongoDB:", err));

// Handle MongoDB connection events
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

// Mongoose schema
const reportSchema = new mongoose.Schema({
    location: String,
    latitude: Number,
    longitude: Number,
    reportType: String,
    description: String,
    size: String,
    accessibility: String,
    name: String,
    phone: String,
    status: {
        type: String,
        default: 'Pending'
    },
    image: {
        data: Buffer,         // Store binary image data
        contentType: String   // Store MIME type like "image/jpeg"
    }
}, { timestamps: true });
const Report = mongoose.model("Report", reportSchema);

// Middlewares
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use((req, res, next) => {
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin-allow-popups");
  res.setHeader("Cross-Origin-Embedder-Policy", "unsafe-none");
  next();
});

// Health check
app.get("/health", (req, res) => {
  res.status(200).send("ok");
});

// Root route for deployment verification
app.get("/", (req, res) => {
  res.status(200).json({ 
    message: "Eco-React Backend API is running", 
    status: "healthy",
    timestamp: new Date().toISOString()
  });
});



// Multer setup (store file in memory to save in MongoDB)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// API route
app.post("/api/reports", verifyToken, upload.single("image"), async (req, res) => {
  try {
   
    
    const { location, latitude, longitude, reportType, description, size, accessibility, name, phone } = req.body;

    const newReport = new Report({
      location,
      latitude,
      longitude,
      reportType,
      description,
      size,
      accessibility,
      name,
      phone,
      submittedBy: req.user ? req.user.uid : null,   // track Firebase user
      image: req.file ? {
        data: req.file.buffer,
        contentType: req.file.mimetype
      } : null
    });

    await newReport.save();
    res.json({ success: true, message: "Report saved successfully" });
  } catch (err) {
    console.error("Error saving report:", err);
    res.status(500).json({ success: false, message: "Error saving report" });
  }
});


// Get all reports
app.get('/api/reports', async (req, res) => {
    try {
        const reports = await Report.find({});
        const reportsWithImages = reports.map(report => {
            if (report.image && report.image.data) {
                const base64 = report.image.data.toString('base64');
                return {
                    ...report.toObject(),
                    image: `data:${report.image.contentType};base64,${base64}`
                };
            }
            return report.toObject();
        });
        res.json(reportsWithImages);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// Delete one report (Admin only)
app.delete("/api/reports/:id", async (req, res) => {
    const { admin } = req.query;
    if (admin !== "true") {
        return res.status(403).json({ message: "Unauthorized" });
    }
    try {
        await Report.findByIdAndDelete(req.params.id);
        res.json({ message: "Report deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Error deleting report" });
    }
});

// Delete all reports (Admin only)
app.delete('/api/reports', async (req, res) => {
    try {
        const { password } = req.query;
        if (password !== '12341234') {
            return res.status(403).json({ error: 'Unauthorized' });
        }
        await Report.deleteMany({});
        res.json({ message: 'All reports deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete reports' });
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).json({ 
    success: false, 
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// 404 handler - catch all unmatched routes
app.use((req, res) => {
  res.status(404).json({ 
    success: false, 
    message: 'Route not found' 
  });
});

// Start server with error handling
const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 Health check: http://localhost:${PORT}/health`);
  console.log(`📍 API root: http://localhost:${PORT}/`);
});

// Handle server errors
server.on('error', (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof PORT === 'string' ? 'Pipe ' + PORT : 'Port ' + PORT;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
});
