import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faLeaf, faHome, faFlag } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from '../context/AuthContext'
import AuthStatus from './AuthStatus'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const { user, loading } = useAuth() // Use the auth context here

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => location.pathname === path

  const navItems = [
    { path: '/', label: 'Home', icon: faHome },
    { path: '/report', label: 'Report Issue', icon: faFlag }
  ]

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-500 backdrop-blur-2xl border-b-2 border-emerald-200/40 shadow-2xl ${
        isScrolled ? 'bg-white/80 shadow-emerald-200/40 scale-[1.02]' : 'bg-white/30'
      }`}
    >
      <div className="container-responsive py-3 xs:py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3 xs:gap-4 sm:gap-6">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-r from-emerald-500 to-blue-500 p-2 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <FontAwesomeIcon icon={faLeaf} className="text-white text-lg xs:text-xl sm:text-2xl animate-bounce-gentle" />
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg xs:text-xl sm:text-2xl font-black text-gray-800 font-heading leading-tight">
                <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent animate-gradient-shift">
                  EcoVision
                </span>
              </h1>
              <p className="text-xs xs:text-sm text-gray-600 font-medium hidden sm:block">
                Clean Communities, Green Future
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 font-semibold rounded-xl transition-all duration-300 hover:scale-105 group ${
                  isActive(item.path)
                    ? 'text-emerald-600 bg-emerald-50 shadow-md'
                    : 'text-gray-700 hover:text-emerald-600'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10">{item.label}</span>
                {isActive(item.path) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-xl opacity-80 animate-pulse-glow"></div>
                )}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 transition-all duration-300 group-hover:w-full"></div>
              </Link>
            ))}
            {/* Conditionally render AuthStatus or Sign In/Sign Up links */}
            {!loading && (user ? <AuthStatus /> : (
              <>
                <Link
                  to="/signin"
                  className="relative px-4 py-2 font-semibold rounded-xl transition-all duration-300 hover:scale-105 group text-gray-700 hover:text-emerald-600"
                >
                  <span className="relative z-10">Sign In</span>
                </Link>
                <Link
                  to="/signup"
                  className="relative px-4 py-2 font-semibold rounded-xl transition-all duration-300 hover:scale-105 group text-gray-700 hover:text-emerald-600"
                >
                  <span className="relative z-10">Sign Up</span>
                </Link>
              </>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-110 focus-ring"
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon 
              icon={isMenuOpen ? faTimes : faBars} 
              className="text-gray-700 text-lg transition-all duration-300"
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 mt-4' 
            : 'max-h-0 opacity-0 mt-0 overflow-hidden'
        }`}>
          <nav className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30 p-4 space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  isActive(item.path)
                    ? 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-600'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </Link>
            ))}
            {/* Conditionally render AuthStatus or Sign In/Sign Up links for mobile */}
            {!loading && (user ? <AuthStatus /> : (
              <>
                <Link
                  to="/signin"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                    isActive('/signin') ? 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-lg' : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-600'
                  }`}
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                    isActive('/signup') ? 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-lg' : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-600'
                  }`}
                >
                  Sign Up
                </Link>
              </>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header