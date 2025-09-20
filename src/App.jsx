import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Report from './pages/Report'
import Payment from './pages/Payment'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import WorkerSignIn from './pages/WorkerSignIn'
import WorkerSignUp from './pages/WorkerSignUp'
import WorkerDashboard from './pages/WorkerDashboard'
import AdminSignIn from './pages/AdminSignIn'
import { AuthProvider } from './context/AuthContext'
import { NotificationProvider } from './context/NotificationContext'
import Notification from './components/Notification'

function App() {
  return (
    <AuthProvider>
      <NotificationProvider>
        <Router>
          <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 min-h-screen font-body text-gray-800 overflow-x-hidden relative">
            {/* Background Pattern */}
            <div className="fixed inset-0 bg-hero-pattern opacity-30 pointer-events-none z-0"></div>
            <div className="relative z-10">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/report" element={<Report />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/worker-signin" element={<WorkerSignIn />} />
                <Route path="/worker-signup" element={<WorkerSignUp />} />
                <Route path="/worker-dashboard" element={<WorkerDashboard />} />
                <Route path="/admin-signin" element={<AdminSignIn />} />
              </Routes>
              <Notification />
            </div>
          </div>
        </Router>
      </NotificationProvider>
    </AuthProvider>
  )
}

export default App
