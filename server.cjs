const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
}

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);
        cb(null, 'uploaded-' + uniqueSuffix + ext);
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 10 * 1024 * 1024 // 10MB limit
    },
    fileFilter: function (req, file, cb) {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('Only image files are allowed!'), false);
        }
    }
});

// --- Report Submission Endpoint ---
const reportsFile = path.join(__dirname, 'uploads', 'reports.json');

app.post('/api/report', upload.single('image'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No image uploaded' });
        }
        const fields = req.body;
        const imageUrl = `/uploads/${req.file.filename}`;
        const priorityMap = {
            'hazardous': 'Critical',
            'animal-death': 'High',
            'animal-care': 'High',
            'animal-adopt': 'High',
            'garbage': 'Medium',
            'cleaning': 'Medium',
            'recycling': 'Medium',
            'other': 'Medium'
        };
        const priority = priorityMap[fields['report-type']] || 'Medium';
        const report = {
            id: Date.now(),
            location: fields.location,
            latitude: fields.latitude || null,
            longitude: fields.longitude || null,
            type: fields['report-type'],
            description: fields.description,
            size: fields.size || 'Not specified',
            accessibility: fields.accessibility || 'Not specified',
            name: fields.name || 'Anonymous',
            phone: fields.phone || 'Not provided',
            image: imageUrl,
            status: 'Pending',
            priority: priority,
            timestamp: new Date().toISOString(),
            comments: []
        };
        let reports = [];
        if (fs.existsSync(reportsFile)) {
            reports = JSON.parse(fs.readFileSync(reportsFile, 'utf8'));
        }
        reports.push(report);
        fs.writeFileSync(reportsFile, JSON.stringify(reports, null, 2));
        res.json({ success: true, message: 'Report submitted successfully', report });
    } catch (error) {
        console.error('Report upload error:', error);
        res.status(500).json({ error: 'Failed to submit report' });
    }
});

// --- Get All Reports Endpoint ---
app.get('/api/reports', (req, res) => {
    try {
        if (fs.existsSync(reportsFile)) {
            const reports = JSON.parse(fs.readFileSync(reportsFile, 'utf8'));
            res.json(reports);
        } else {
            res.json([]);
        }
    } catch (error) {
        console.error('Error fetching reports:', error);
        res.status(500).json({ error: 'Failed to fetch reports' });
    }
});

// DELETE all reports
app.delete('/api/reports/clear', (req, res) => {
    try {
        const reportsPath = path.join(__dirname, 'reports.json');
        // Clear the reports file by writing an empty array
        fs.writeFileSync(reportsPath, JSON.stringify([], null, 2));
        res.json({ message: 'All reports cleared successfully' });
    } catch (error) {
        console.error('Error clearing reports:', error);
        res.status(500).json({ error: 'Failed to clear reports' });
    }
});

// Serve uploaded images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Error handling middleware
app.use((error, req, res, next) => {
    if (error instanceof multer.MulterError) {
        if (error.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).json({ error: 'File too large. Maximum size is 10MB.' });
        }
    }
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal server error' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Upload directory: ${uploadsDir}`);
});
