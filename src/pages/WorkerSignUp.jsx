import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useNotification } from '../context/NotificationContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faHome, 
  faFlag, 
  faSignInAlt, 
  faUserPlus,
  faEye,
  faEyeSlash,
  faSpinner,
  faHardHat,
  faTools,
  faPhone,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons'
import AuthStatus from '../components/AuthStatus'

const WorkerSignUp = () => {
  const { signUp, signInWithGoogle } = useAuth()
  const { showSuccess, showError } = useNotification()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    specialization: '',
    experience: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isGoogleLoading, setIsGoogleLoading] = useState(false)
  const [agreedToTerms, setAgreedToTerms] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const validateForm = () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword || !formData.phone || !formData.specialization) {
      showError('Please fill in all required fields.')
      return false
    }

    if (formData.password.length < 6) {
      showError('Password must be at least 6 characters long.')
      return false
    }

    if (formData.password !== formData.confirmPassword) {
      showError('Passwords do not match.')
      return false
    }

    if (!agreedToTerms) {
      showError('Please agree to the Terms of Service and Privacy Policy.')
      return false
    }

    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    try {
      await signUp(formData.email, formData.password, formData.firstName, formData.lastName, 'worker', {
        phone: formData.phone,
        specialization: formData.specialization,
        experience: formData.experience
      })
      showSuccess('Worker account created successfully! Welcome to the team!')
      navigate('/worker-dashboard')
    } catch (error) {
      console.error('Worker sign up error:', error)
      if (error.code === 'auth/email-already-in-use') {
        showError('An account with this email already exists.')
      } else if (error.code === 'auth/invalid-email') {
        showError('Invalid email address.')
      } else if (error.code === 'auth/weak-password') {
        showError('Password is too weak. Please choose a stronger password.')
      } else {
        showError('Failed to create worker account. Please try again.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleSignUp = async () => {
    setIsGoogleLoading(true)

    try {
      await signInWithGoogle('worker')
      showSuccess('Worker account created with Google successfully!')
      navigate('/worker-dashboard')
    } catch (error) {
      console.error('Google worker sign up error:', error)
      if (error.code === 'auth/popup-closed-by-user') {
        showError('Sign up was cancelled.')
      } else if (error.code === 'auth/popup-blocked') {
        showError('Popup was blocked. Please allow popups and try again.')
      } else {
        showError('Failed to sign up with Google. Please try again.')
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
              <span className="text-gray-600 text-sm font-semibold">Worker Sign Up</span>
            </div>
          </div>
          <AuthStatus />
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12">
        <div className="max-w-md w-full">
          {/* Worker Sign Up Card */}
          <div className="glass-card rounded-3xl shadow-2xl p-6 md:p-8 border border-white/30">
            <div className="text-center mb-8">
              <div className="mb-4">
                <FontAwesomeIcon 
                  icon={faHardHat} 
                  className="text-4xl text-orange-500 mb-2" 
                />
              </div>
              <h1 className="text-3xl md:text-4xl font-black text-gray-800 mb-3 font-heading bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Join Our Worker Team
              </h1>
              <p className="text-gray-600 text-lg">Create your worker account to start receiving assignments</p>
            </div>

            {/* Google Sign Up Button */}
            <div className="mb-8">
              <button
                onClick={handleGoogleSignUp}
                disabled={isGoogleLoading || isLoading}
                className="w-full bg-white/90 backdrop-blur-sm border-2 border-gray-200 text-gray-700 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 hover:bg-gray-50 hover:border-gray-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isGoogleLoading ? (
                  <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                ) : (
                  <img 
                    src="https://developers.google.com/identity/images/g-logo.png" 
                    alt="Google" 
                    className="w-6 h-6"
                  />
                )}
                Continue with Google
              </button>
            </div>

            {/* Divider */}
            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 glass-effect text-gray-500 rounded-full">
                  Or sign up with email
                </span>
              </div>
            </div>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-3">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-200 focus:border-orange-500 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-3">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-200 focus:border-orange-500 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                    placeholder="Last name"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-200 focus:border-orange-500 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-3">
                  Phone Number *
                </label>
                <div className="relative">
                  <FontAwesomeIcon icon={faPhone} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 pl-12 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-200 focus:border-orange-500 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="specialization" className="block text-sm font-semibold text-gray-700 mb-3">
                  Specialization *
                </label>
                <select
                  id="specialization"
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-200 focus:border-orange-500 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                >
                  <option value="">Select your specialization</option>
                  <option value="garbage-collection">Garbage Collection</option>
                  <option value="street-cleaning">Street Cleaning</option>
                  <option value="drainage-maintenance">Drainage Maintenance</option>
                  <option value="park-maintenance">Park Maintenance</option>
                  <option value="general-maintenance">General Maintenance</option>
                </select>
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-semibold text-gray-700 mb-3">
                  Years of Experience
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-200 focus:border-orange-500 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                >
                  <option value="">Select experience level</option>
                  <option value="0-1">0-1 years</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-3">
                  Password *
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    minLength={6}
                    className="w-full px-4 py-4 pr-12 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-200 focus:border-orange-500 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                    placeholder="Create a password"
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
              
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-3">
                  Confirm Password *
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 pr-12 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-200 focus:border-orange-500 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
                  </button>
                </div>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  required
                  className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                />
                <label htmlFor="terms" className="ml-3 text-sm text-gray-600">
                  I agree to the{' '}
                  <a
                    href="#"
                    className="text-orange-600 hover:text-orange-700 font-semibold transition-colors"
                  >
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a
                    href="#"
                    className="text-orange-600 hover:text-orange-700 font-semibold transition-colors"
                  >
                    Privacy Policy
                  </a>
                </label>
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
                {isLoading ? 'Creating Worker Account...' : 'Create Worker Account'}
              </button>
            </form>

            {/* Sign In Link */}
            <div className="text-center mt-8">
              <p className="text-gray-600 text-lg">
                Already have a worker account?{' '}
                <Link
                  to="/worker-signin"
                  className="text-orange-600 hover:text-orange-700 font-bold transition-colors"
                >
                  Sign in here
                </Link>
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Regular user?{' '}
                <Link
                  to="/signup"
                  className="text-emerald-600 hover:text-emerald-700 font-semibold transition-colors"
                >
                  Sign up here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default WorkerSignUp
