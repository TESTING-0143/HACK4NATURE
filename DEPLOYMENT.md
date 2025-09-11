# Deployment Guide for Eco-React Backend

## Render Deployment Setup

### 1. Environment Variables Required

Make sure to set these environment variables in your Render dashboard:

- **MONGO_URI**: Your MongoDB Atlas connection string
  - Format: `mongodb+srv://username:password@cluster.mongodb.net/eco-react?retryWrites=true&w=majority`
  
- **FIREBASE_SERVICE_ACCOUNT**: Your Firebase service account JSON
  - You can either paste the JSON directly or encode it as base64
  
- **CORS_ORIGIN**: Your frontend URL (optional, defaults to "*")
  - For production: `https://your-frontend-domain.com`
  
- **NODE_ENV**: Set to `production`

### 2. MongoDB Atlas Setup

1. Create a MongoDB Atlas cluster
2. Create a database user with read/write permissions
3. Get your connection string from Atlas
4. Add it to Render environment variables as `MONGO_URI`

### 3. Firebase Setup

1. Go to Firebase Console > Project Settings > Service Accounts
2. Generate a new private key
3. Copy the JSON content
4. Add it to Render environment variables as `FIREBASE_SERVICE_ACCOUNT`

### 4. Render Configuration

The `render.yaml` file is configured with:
- Root directory: `backend`
- Build command: `rm -rf node_modules package-lock.json && npm install`
- Start command: `npm start`
- Health check path: `/health`
- Node version: 20

### 5. Recent Fixes Applied

The following issues have been resolved:
- **Express Version**: Downgraded from Express 5.1.0 to 4.18.2 for better stability
- **Route Handler**: Fixed 404 handler to avoid path-to-regexp errors
- **Node.js Version**: Updated to Node.js 20 for better compatibility
- **Body Parsing**: Added proper JSON and URL-encoded body parsing middleware
- **Error Handling**: Enhanced server error handling and startup checks

### 6. Testing the Deployment

Once deployed, you can test:
- Health check: `https://your-app.onrender.com/health`
- Root endpoint: `https://your-app.onrender.com/`

### 7. Local Testing

Before deploying, you can test locally:
```bash
cd backend
npm install
node test-server.js  # Quick startup test
npm start            # Full server test
```

### 8. Common Issues

1. **MongoDB Connection**: Ensure your MongoDB Atlas cluster allows connections from anywhere (0.0.0.0/0)
2. **Firebase Auth**: Make sure your Firebase project is properly configured
3. **CORS**: If you get CORS errors, check the `CORS_ORIGIN` environment variable
4. **Express Version**: If you see path-to-regexp errors, ensure you're using Express 4.x
5. **Node.js Version**: Use Node.js 18 or 20 for best compatibility

### 9. Monitoring

- Check Render logs for any deployment issues
- Monitor the `/health` endpoint for service status
- Use the root endpoint to verify the API is running
