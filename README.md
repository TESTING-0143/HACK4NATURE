# EcoVision Waste Management - React App

A modern, responsive React application for reporting and managing waste/environmental issues, built with Vite, TailwindCSS, and Firebase authentication.

## 🌟 Features

- **Modern React Frontend**: Built with React 18, Vite, and TailwindCSS
- **Responsive Design**: Fully responsive design that works on all devices
- **Firebase Authentication**: Secure sign-in/sign-up with email and Google OAuth
- **Interactive Maps**: Leaflet/OpenStreetMap integration for location selection
- **Image Uploads**: Drag-and-drop image upload functionality
- **Real-time Dashboard**: View and filter reported issues
- **Beautiful UI**: Modern glassmorphism design with smooth animations
- **TypeScript Ready**: Configured for TypeScript development

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone and setup the project:**
   ```bash
   git clone <your-repo-url>
   cd eco-react-app
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```
   This will start both the backend server (port 3001) and React dev server (port 3000) concurrently.

3. **Access the application:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001
   - New Backend API : http://localhost:5000

### Individual Services

Run services separately if needed:

```bash
# Start only the React development server
npm run dev

# Start only the backend server
npm run server

# Start new Backend Server
cd backend
npm run dev
```

## 🏗️ Project Structure

```
eco-react-app/
├── public/                 # Static assets (images, videos)
│   ├── images/            # Gallery images
│   ├── img2/              # Community impact images
│   ├── imgd/              # Animal protection images
│   ├── image3.webp        # Logo
│   ├── goal1.png          # About section image
│   └── download.mp4       # Hero video
├── src/
│   ├── components/        # React components
│   │   ├── Header.jsx     # Main navigation header
│   │   └── Notification.jsx # Toast notifications
│   ├── context/          # React contexts
│   │   ├── AuthContext.jsx    # Firebase authentication
│   │   └── NotificationContext.jsx # Global notifications
│   ├── pages/            # Page components
│   │   ├── Home.jsx      # Landing page with dashboard
│   │   ├── Report.jsx    # Report submission form
│   │   ├── SignIn.jsx    # Sign in page
│   │   └── SignUp.jsx    # Sign up page
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # App entry point
│   └── index.css         # Global styles and Tailwind
├── uploads/              # Backend file storage
├── server.js             # Express.js backend server
└── vite.config.js        # Vite configuration
```

## 🔧 Configuration

### Firebase Setup

The app is pre-configured with Firebase. To use your own Firebase project:

1. Create a Firebase project at https://firebase.google.com/
2. Enable Authentication with Email/Password and Google providers
3. Update the Firebase config in `src/context/AuthContext.jsx` now shifted to env

### Backend Configuration

The backend server handles:
- Report submissions with image uploads
- File storage in `uploads/` directory
- JSON-based data persistence
- CORS enabled for frontend communication

## 📱 Pages and Features

### Home Page (`/`)
- Hero section with video background
- Interactive reports dashboard
- Image galleries showcasing mission
- Filtering by report types
- Responsive design for all screen sizes

### Report Page (`/report`)
- Interactive map for location selection
- Comprehensive form validation
- Image upload with preview
- Real-time character counting
- Success/error handling

### Authentication Pages
- **Sign In (`/signin`)**: Email/password and Google OAuth
- **Sign Up (`/signup`)**: User registration with validation

## 🎨 Design Features

- **Glassmorphism UI**: Modern glass-effect cards and navigation
- **Smooth Animations**: CSS transitions and hover effects
- **Gradient Backgrounds**: Beautiful gradient overlays
- **Mobile-First**: Responsive design principles
- **Dark Mode Ready**: Prepared for theme switching

## 🔒 Security Features

- Firebase Authentication integration
- Form validation and sanitization
- Image upload restrictions (type and size limits)
- CORS protection
- Secure file handling

## 🌍 Environmental Impact

This application helps communities:
- Report waste and environmental issues
- Track cleanup progress
- Coordinate community efforts
- Promote environmental awareness
- Support animal welfare initiatives

## 🛠️ Development

### Available Scripts

- `npm start`: Run both frontend and backend
- `npm run dev`: Start Vite dev server only
- `npm run server`: Start Express server only
- `npm run build`: Build for production
- `npm run preview`: Preview production build

### Tech Stack

**Frontend:**
- React 18+ with Hooks
- Vite (fast build tool)
- TailwindCSS (utility-first CSS)
- React Router DOM (navigation)
- React Leaflet (maps)
- FontAwesome Icons
- Firebase SDK

**Backend:**
- Express.js
- Multer (file uploads)
- CORS middleware
- JSON file storage
- bcryptjs (password hashing)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues:

1. Check the browser console for error messages
2. Verify that both frontend (3000) and backend (3001) servers are running
3. Ensure all dependencies are installed with `npm install`
4. Check that Firebase configuration is correct
5. Run `cd Backend` and then run `npm install` for new backend.

## 🔗 Original Project

This React application is a modern conversion of the original HTML/JavaScript ECO waste management website, maintaining all functionality while adding:

- Modern React architecture
- Improved responsive design
- Better user experience
- Enhanced performance
- Maintainable codebase

---

Built with ❤️ for a cleaner, healthier environment 🌱
