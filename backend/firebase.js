import admin from "firebase-admin";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

let serviceAccount;
try {
  if (process.env.FIREBASE_SERVICE_ACCOUNT) {
    try {
      serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
    } catch (jsonErr) {
      // Support base64-encoded JSON string if provided
      const decoded = Buffer.from(process.env.FIREBASE_SERVICE_ACCOUNT, "base64").toString("utf-8");
      serviceAccount = JSON.parse(decoded);
    }
  } else {
    serviceAccount = JSON.parse(fs.readFileSync("./serviceAccountKey.js", "utf-8"));
  }
} catch (err) {
  // Defer initialization error until first token verification attempt
  serviceAccount = null;
}

if (serviceAccount) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

export const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ success: false, message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];
  try {
    if (!admin.apps?.length && serviceAccount) {
      admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
    }
    const decoded = await admin.auth().verifyIdToken(token);
    req.user = decoded; // contains uid, email
    next();
  } catch (err) {
    console.log("Invalid token:", err.message);
    return res.status(401).json({ success: false, message: "Invalid token" });
  }
};
