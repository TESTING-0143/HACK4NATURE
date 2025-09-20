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
  faHardHat,
  faTools
} from '@fortawesome/free-solid-svg-icons'
import AuthStatus from '../components/AuthStatus'

const WorkerSignIn = () => {
  const { signIn, signInWithGoogle } = useAuth()
  const { showSuccess, showError } = useNotification()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isGoogleLoading, setIsGoogleLoading] = useState(false)

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
      await signIn(formData.email, formData.password, 'worker')
      showSuccess('Signed in successfully as a worker!')
      navigate('/worker-dashboard')
    } catch (error) {
      console.error('Worker sign in error:', error)
      if (error.code === 'auth/user-not-found') {
        showError('No worker account found with this email address.')
      } else if (error.code === 'auth/wrong-password') {
        showError('Incorrect password.')
      } else if (error.code === 'auth/invalid-email') {
        showError('Invalid email address.')
      } else if (error.code === 'auth/too-many-requests') {
        showError('Too many failed attempts. Please try again later.')
      } else {
        showError('Failed to sign in. Please try again.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    setIsGoogleLoading(true)

    try {
      await signInWithGoogle('worker')
      showSuccess('Signed in with Google successfully as a worker!')
      navigate('/worker-dashboard')
    } catch (error) {
      console.error('Google worker sign in error:', error)
      if (error.code === 'auth/popup-closed-by-user') {
        showError('Sign in was cancelled.')
      } else if (error.code === 'auth/popup-blocked') {
        showError('Popup was blocked. Please allow popups and try again.')
      } else {
        showError('Failed to sign in with Google. Please try again.')
      }
    } finally {
      setIsGoogleLoading(false)
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
              <span className="text-gray-600 text-sm font-semibold">Worker Sign In</span>
            </div>
          </div>
          <AuthStatus />
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-screen flex items-center justify-center px-4 xs:px-6 py-8 xs:py-12">
        <div className="max-w-sm xs:max-w-md w-full">
          {/* Worker Sign In Card */}
          <div className="glass-card rounded-2xl xs:rounded-3xl shadow-card-lg p-4 xs:p-6 md:p-8 border border-white/30 animate-fade-in">
            <div className="text-center mb-6 xs:mb-8">
              <div className="mb-4">
                <FontAwesomeIcon 
                  icon={faHardHat} 
                  className="text-4xl text-orange-500 mb-2" 
                />
              </div>
              <h1 className="text-2xl xs:text-3xl md:text-4xl font-black text-gray-800 mb-2 xs:mb-3 font-heading bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Worker Portal
              </h1>
              <p className="text-gray-600 text-base xs:text-lg leading-relaxed">Sign in to access your work assignments</p>
            </div>

            {/* Google Sign In Button */}
            <div className="mb-6 xs:mb-8">
              <button
                onClick={handleGoogleSignIn}
                disabled={isGoogleLoading || isLoading}
                className="w-full bg-white/90 backdrop-blur-sm border-2 border-gray-200 text-gray-700 px-4 xs:px-6 py-3 xs:py-4 rounded-xl xs:rounded-2xl font-semibold text-sm xs:text-base transition-all duration-300 hover:bg-gray-50 hover:border-gray-300 shadow-card hover:shadow-card-hover flex items-center justify-center gap-2 xs:gap-3 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transform"
              >
                {isGoogleLoading ? (
                  <FontAwesomeIcon icon={faSpinner} className="animate-spin text-base xs:text-lg" />
                ) : (
                  <img 
                    src="https://developers.google.com/identity/images/g-logo.png" 
                    alt="Google" 
                    className="w-5 h-5 xs:w-6 xs:h-6"
                  />
                )}
                <span className="text-sm xs:text-base">Continue with Google</span>
              </button>
            </div>

            {/* Divider */}
            <div className="relative mb-6 xs:mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-xs xs:text-sm">
                <span className="px-3 xs:px-4 glass-effect text-gray-500 rounded-full">
                  Or sign in with email
                </span>
              </div>
            </div>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="space-y-4 xs:space-y-6">
              <div>
                <label htmlFor="email" className="block text-xs xs:text-sm font-semibold text-gray-700 mb-2 xs:mb-3">
                  Worker Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 xs:px-4 py-3 xs:py-4 border-2 border-gray-200 rounded-xl xs:rounded-2xl focus:ring-4 focus:ring-orange-200 focus:border-orange-500 transition-all duration-300 bg-white/80 backdrop-blur-sm text-sm xs:text-base hover:border-gray-300 focus:scale-[1.02] transform"
                  placeholder="Enter your worker email"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-3">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 pr-12 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-200 focus:border-orange-500 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                    placeholder="Enter your password"
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
              
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                  />
                  <span className="ml-3 text-sm text-gray-600">Remember me</span>
                </label>
                <a
                  href="#"
                  className="text-sm text-orange-600 hover:text-orange-700 font-semibold transition-colors"
                >
                  Forgot password?
                </a>
              </div>
              
              <button
                type="submit"
                disabled={isLoading || isGoogleLoading}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <FontAwesomeIcon icon={faSpinner} className="animate-spin mr-2" />
                ) : (
                  <FontAwesomeIcon icon={faTools} className="mr-2" />
                )}
                {isLoading ? 'Signing In...' : 'Sign In as Worker'}
              </button>
            </form>

            {/* Sign Up Link */}
            <div className="text-center mt-8">
              <p className="text-gray-600 text-lg">
                Don't have a worker account?{' '}
                <Link
                  to="/worker-signup"
                  className="text-orange-600 hover:text-orange-700 font-bold transition-colors"
                >
                  Sign up as worker
                </Link>
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Regular user?{' '}
                <Link
                  to="/signin"
                  className="text-emerald-600 hover:text-emerald-700 font-semibold transition-colors"
                >
                  Sign in here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default WorkerSignIn
