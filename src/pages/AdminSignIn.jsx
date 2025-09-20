import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useNotification } from '../context/NotificationContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faHome, 
  faFlag, 
  faChartBar, 
  faInfo, 
  faEnvelope, 
  faSignInAlt, 
  faUserPlus,
  faEye,
  faEyeSlash,
  faSpinner,
  faShieldAlt,
  faLock
} from '@fortawesome/free-solid-svg-icons'
import AuthStatus from '../components/AuthStatus'

const AdminSignIn = () => {
  const { adminSignIn, adminUser } = useAuth()
  const { showSuccess, showError } = useNotification()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Redirect if already logged in as admin
  React.useEffect(() => {
    if (adminUser) {
      navigate('/')
    }
  }, [adminUser, navigate])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.email || !formData.password) {
      showError('Please fill in all fields.')
      return
    }

    setIsLoading(true)

    try {
      await adminSignIn(formData.email, formData.password)
      showSuccess('Admin access granted!')
      navigate('/')
    } catch (error) {
      console.error('Admin sign in error:', error)
      showError('Invalid admin credentials. Access denied.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 min-h-screen font-body text-gray-800">
      {/* Header */}
      <header className="glass-effect shadow-lg border-b border-white/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img 
                src="/image3.webp" 
                alt="Clean and Healthy Area Logo" 
                className="h-12 w-12 rounded-2xl object-cover border-4 border-white/30 shadow-xl" 
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-2xl blur opacity-30"></div>
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-xl font-black text-gray-800 tracking-wide font-heading">
                Clean and Healthy Area
              </span>
              <span className="text-gray-600 text-sm font-semibold">Admin Access</span>
            </div>
          </div>
          <AuthStatus />
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-screen flex items-center justify-center px-4 xs:px-6 py-8 xs:py-12">
        <div className="max-w-sm xs:max-w-md w-full">
          {/* Admin Sign In Card */}
          <div className="glass-card rounded-2xl xs:rounded-3xl shadow-card-lg p-4 xs:p-6 md:p-8 border border-white/30 animate-fade-in">
            <div className="text-center mb-6 xs:mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faShieldAlt} className="text-2xl text-white" />
              </div>
              <h1 className="text-2xl xs:text-3xl md:text-4xl font-black text-gray-800 mb-2 xs:mb-3 font-heading bg-gradient-to-r from-red-700 to-orange-700 bg-clip-text text-transparent">
                Admin Access
              </h1>
              <p className="text-gray-600 text-base xs:text-lg leading-relaxed">Enter admin credentials to access the dashboard</p>
            </div>

            {/* Admin Form */}
            <form onSubmit={handleSubmit} className="space-y-4 xs:space-y-6">
              <div>
                <label htmlFor="email" className="block text-xs xs:text-sm font-semibold text-gray-700 mb-2 xs:mb-3">
                  Admin Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 xs:px-4 py-3 xs:py-4 border-2 border-gray-200 rounded-xl xs:rounded-2xl focus:ring-4 focus:ring-red-200 focus:border-red-500 transition-all duration-300 bg-white/80 backdrop-blur-sm text-sm xs:text-base hover:border-gray-300 focus:scale-[1.02] transform"
                  placeholder="Enter admin email"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-3">
                  Admin Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 pr-12 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-red-200 focus:border-red-500 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                    placeholder="Enter admin password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                  </button>
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white py-4 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <FontAwesomeIcon icon={faSpinner} className="animate-spin mr-2" />
                ) : (
                  <FontAwesomeIcon icon={faLock} className="mr-2" />
                )}
                {isLoading ? 'Authenticating...' : 'Access Admin Panel'}
              </button>
            </form>

            {/* Back to Home Link */}
            <div className="text-center mt-8">
              <p className="text-gray-600 text-lg">
                <Link
                  to="/"
                  className="text-emerald-600 hover:text-emerald-700 font-bold transition-colors"
                >
                  ← Back to Home
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AdminSignIn
