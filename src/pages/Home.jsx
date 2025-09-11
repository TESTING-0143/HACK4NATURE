import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFlag,
  faInfoCircle,
  faLeaf,
  faUsers,
  faRecycle,
  faTrash,
  faSkullCrossbones,
  faPaw,
  faBroom,
  faExclamationTriangle,
  faArrowUp,
  faEye,
  faChartBar,
  faPlus,
  faLock,
  faClipboardList
} from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  const [reports, setReports] = useState([])
  const [currentTypeFilter, setCurrentTypeFilter] = useState('all')
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [showPasswordModal, setShowPasswordModal] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [totalReports, setTotalReports] = useState(0)
  const [reportStats, setReportStats] = useState({
    garbage: 0,
    animalDeath: 0,
    animalAdopt: 0,
    other: 0
  })

  // Slogan rotation state
  const [currentSloganIndex, setCurrentSloganIndex] = useState(0)
  const slogans = [
    'Cleaner Communities, Greener Future',
    'Report. Resolve. Renew.',
    'Together for a Sustainable Tomorrow',
    'Your Report Makes a Difference',
    'Act Green, Live Clean'
  ]

  // Refs for intersection observer
  const heroRef = useRef(null)
  const galleryRef = useRef(null)
  const dashboardRef = useRef(null)
  const aboutRef = useRef(null)
  const statsRef = useRef(null)

  useEffect(() => {
    // Enable smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth'

    // Fetch reports from API
    fetchReports()

    // Slogan rotation
    const sloganInterval = setInterval(() => {
      setCurrentSloganIndex(prev => (prev + 1) % slogans.length)
    }, 3000)

    // Handle scroll for back to top button with throttling
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setShowBackToTop(window.scrollY > 300)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Intersection Observer for animations with better performance
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in')
          // Add staggered animations for child elements
          const children = entry.target.querySelectorAll('.animate-stagger')
          children.forEach((child, index) => {
            child.style.animationDelay = `${index * 0.1}s`
            child.classList.add('animate-slide-up')
          })
        }
      })
    }, observerOptions)

    // Observe elements
    const elementsToObserve = [heroRef.current, galleryRef.current, dashboardRef.current, aboutRef.current, statsRef.current]
    elementsToObserve.forEach(el => {
      if (el) observer.observe(el)
    })

    return () => {
      clearInterval(sloganInterval)
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  const fetchReports = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/reports` || 'http://localhost:5000')
      if (response.ok) {
        const data = await response.json()
        setReports(data)
        setTotalReports(data.length)

        // Calculate report statistics
        const stats = {
          garbage: data.filter(r => r.type === 'garbage').length,
          animalDeath: data.filter(r => r.type === 'animal-death').length,
          animalAdopt: data.filter(r => r.type === 'animal-adopt').length,
          other: data.filter(r => !['garbage', 'animal-death', 'animal-adopt'].includes(r.type)).length
        }
        setReportStats(stats)
      }
    } catch (error) {
      console.error('Failed to fetch reports:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const getStatusColorMap = (status) => {
    const colorMap = {
      'Pending': 'bg-yellow-100 text-yellow-700',
      'Acknowledged': 'bg-blue-100 text-blue-700',
      'In Progress': 'bg-orange-100 text-orange-700',
      'Resolved': 'bg-green-100 text-green-700'
    }
    return colorMap[status] || 'bg-gray-200 text-gray-700'
  }

  const getTypeBadge = (type) => {
    const typeMap = {
      'garbage': { icon: faTrash, color: 'bg-emerald-100 text-emerald-700', label: 'Garbage' },
      'animal-death': { icon: faSkullCrossbones, color: 'bg-red-100 text-red-700', label: 'Animal Death' },
      'animal-adopt': { icon: faPaw, color: 'bg-blue-100 text-blue-700', label: 'Animal Adoption' },
      'animal-care': { icon: faPaw, color: 'bg-purple-100 text-purple-700', label: 'Animal Care' },
      'cleaning': { icon: faBroom, color: 'bg-cyan-100 text-cyan-700', label: 'Cleaning' },
      'recycling': { icon: faRecycle, color: 'bg-green-100 text-green-700', label: 'Recycling' },
      'hazardous': { icon: faExclamationTriangle, color: 'bg-red-100 text-red-700', label: 'Hazardous' },
      'other': { icon: faInfoCircle, color: 'bg-gray-100 text-gray-700', label: 'Other' }
    }

    const typeInfo = typeMap[type] || typeMap['other']
    return (
      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${typeInfo.color}`}>
        <FontAwesomeIcon icon={typeInfo.icon} />
        {typeInfo.label}
      </span>
    )
  }

  const filteredReports = currentTypeFilter === 'all'
    ? reports
    : reports.filter(report => report.type === currentTypeFilter.replace('_', '-'))

  const handleClearReports = () => {
    setShowPasswordModal(true)
  }

  const handlePasswordSubmit = async () => {
    if (password === '12341234') {
      setShowPasswordModal(false);
      setPassword('');
      setPasswordError('');
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/reports?password=${password}` || `http://localhost:5000/api/reports?password=${password}`, {
          method: 'DELETE'
        });
        if (response.ok) {
          setReports([]);
          setTotalReports(0);
          setReportStats({ garbage: 0, animalDeath: 0, animalAdopt: 0, other: 0 });
        } else {
          throw new Error('Failed to clear reports');
        }
      } catch (error) {
        console.error('Error clearing reports:', error);
      }
    } else {
      setPasswordError('Incorrect password');
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-emerald-50 scroll-smooth">
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent z-10 transition-all duration-700"></div>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center z-0 transition-all duration-700"
        >
          <source src="/download.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-20 text-center text-white px-6">
          <h1 className="text-hero font-black mb-6 font-display drop-shadow-2xl animate-slide-up">
            <span className="bg-gradient-to-r from-white via-emerald-100 to-blue-200 bg-clip-text text-transparent animate-gradient-shift">
              EcoVision
            </span>
          </h1>
          <p className="text-lg md:text-2xl lg:text-3xl font-medium mb-8 drop-shadow-lg max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <span key={currentSloganIndex} className="animate-scale-in block">
              {slogans[currentSloganIndex]}
            </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 xs:gap-6 justify-center items-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Link
              to="/report"
              className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white px-6 xs:px-8 py-3 xs:py-4 rounded-2xl xs:rounded-3xl font-bold text-base xs:text-lg md:text-xl shadow-glow-lg hover:shadow-glow transition-all duration-300 hover:scale-105 transform animate-bounce-gentle"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center justify-center">
                <FontAwesomeIcon icon={faFlag} className="mr-2 xs:mr-3 animate-bounce-gentle" />
                Report Issue
              </span>
            </Link>
            <button
              onClick={() => scrollToSection('dashboard-section')}
              className="group relative overflow-hidden bg-white/20 backdrop-blur-xl text-white px-6 xs:px-8 py-3 xs:py-4 rounded-2xl xs:rounded-3xl font-bold text-base xs:text-lg md:text-xl shadow-2xl hover:shadow-card-lg transition-all duration-300 border border-white/30 hover:border-white/50 hover:scale-105 hover:bg-white/30 animate-fade-in"
            >
              <FontAwesomeIcon icon={faChartBar} className="mr-2 xs:mr-3" />
              View Dashboard
            </button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section ref={statsRef} className="max-w-7xl mx-auto mt-16 px-6">
        <div className="glass-card rounded-3xl p-6 md:p-8 shadow-2xl animate-slide-up">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-gray-800 mb-4 font-heading">
              <FontAwesomeIcon icon={faClipboardList} className="mr-3 text-emerald-500" />
              Report Statistics
            </h2>
            <p className="text-gray-600 text-lg">Track the impact of community reports</p>
          </div>

          <div className="flex justify-center">
            {/* Total Reports */}
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white p-6 md:p-8 rounded-3xl text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-stagger max-w-md">
              <div className="text-4xl md:text-5xl font-bold mb-3">{totalReports}</div>
              <div className="text-lg md:text-xl font-semibold">Total Reports</div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section ref={galleryRef} className="max-w-7xl mx-auto mt-20 px-6">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-section-title font-black text-gray-800 mb-4 font-heading bg-gradient-to-r from-emerald-700 to-blue-700 bg-clip-text text-transparent animate-gradient-shift">
            Our Mission in Action
          </h2>
          <p className="text-base xs:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            Discover how we're making a difference in communities around the world
          </p>
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6 md:gap-8">
          {[
            { src: '/images/img1.avif', alt: 'Clean Environment', title: 'Protect Nature, Preserve Life' },
            { src: '/images/img2.webp', alt: 'Community Action', title: 'Every Action Counts' },
            { src: '/images/img4.avif', alt: 'Sustainable Living', title: 'Sustainable Living, Sustainable Future' },
            { src: '/images/banner_29.jpg', alt: 'Green Future', title: 'Cleaner Communities, Greener Future' }
          ].map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl xs:rounded-3xl shadow-card hover:shadow-card-lg transition-all duration-500 hover:scale-105 transform animate-slide-up card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-40 xs:h-48 md:h-64 object-cover object-center transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1 animate-fade-in"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-white font-bold text-sm xs:text-lg md:text-xl mb-4 xs:mb-6 drop-shadow-lg text-center px-2 xs:px-4 animate-slide-up">
                  {image.title}
                </span>
              </div>
              <div className="absolute top-4 right-4 w-3 h-3 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            </div>
          ))}
        </div>
      </section>



     

      {/* Dashboard Section */}
      <main ref={dashboardRef} className="max-w-7xl mx-auto px-6 mt-16 mb-16" id="dashboard-section">
        <div className="glass-card rounded-3xl p-6 md:p-8 shadow-2xl border border-white/30">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-gray-800 font-heading">
                Reported Issues Dashboard
              </h2>
              <p className="text-gray-600 mt-2">Showing {filteredReports.length} of {totalReports} total reports</p>
            </div>
            <button
              onClick={handleClearReports}
              className="btn-secondary bg-red-500 hover:bg-red-600 text-white border-red-500 hover:border-red-600 group"
            >
              <FontAwesomeIcon icon={faTrash} className="mr-2 group-hover:scale-110 transition-transform duration-300" />
              Clear All Reports
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoading ? (
              <div className="col-span-full text-center py-12">
                <div className="loading-shimmer w-16 h-16 rounded-full mx-auto mb-4"></div>
                <p className="text-gray-500 text-lg">Loading reports...</p>
              </div>
            ) : filteredReports.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">No reported issues yet.</p>
              </div>
            ) : (
              filteredReports.map((report, index) => {
                // Priority color map
                const priorityMap = {
                  'Critical': 'bg-red-500 text-white',
                  'High': 'bg-orange-500 text-white',
                  'Medium': 'bg-yellow-400 text-gray-900',
                  'Low': 'bg-emerald-400 text-white',
                };
                const priority = report.priority || 'Medium';
                const priorityClass = priorityMap[priority] || 'bg-gray-300 text-gray-800';
                // Type card style
                const typeCardMap = {
                  'garbage': 'border-emerald-400 shadow-emerald-200/40',
                  'animal-death': 'border-red-400 shadow-red-200/40',
                  'animal-adopt': 'border-blue-400 shadow-blue-200/40',
                  'animal-care': 'border-purple-400 shadow-purple-200/40',
                  'cleaning': 'border-cyan-400 shadow-cyan-200/40',
                  'recycling': 'border-green-400 shadow-green-200/40',
                  'hazardous': 'border-red-600 shadow-red-300/40',
                  'other': 'border-gray-400 shadow-gray-200/40',
                };
                const cardType = typeCardMap[report.type] || 'border-gray-300 shadow-gray-100/40';
                return (
                  <div
                    key={report._id}
                    className={`relative bg-white/90 backdrop-blur-md rounded-2xl border-2 p-4 shadow-xl hover:shadow-2xl transition-all duration-300 group ${cardType} animate-slide-up card-hover`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Priority Badge */}
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full font-bold text-xs shadow-md animate-bounce-gentle ${priorityClass}`}>
                      {priority} Priority
                    </div>
                    {/* Type Badge */}
                    <div className="mb-2 flex flex-col items-start gap-1">
                      {getTypeBadge(report.reportType)}
                    </div>
                    <img
                      src={report.image}
                      alt="Report"
                      className="w-full h-32 object-cover rounded-xl mb-2 border border-emerald-200 group-hover:scale-105 group-hover:shadow-lg transition-transform duration-300"
                    />
                    <div className="font-semibold text-gray-800 text-center mb-1">
                      {report.location || 'Unknown Location'}
                    </div>
                    <div className={`inline-block px-3 py-1 rounded-full font-semibold text-sm mt-2 ${getStatusColorMap(report.status)}`}>
                      {report.status}
                    </div>
                    <div className="text-gray-500 text-xs mt-1">
                      {new Date(report.createdAt || report.date).toLocaleDateString()}
                    </div>
                  </div>
                )
              })
            )}
          </div>
        </div>
      </main>

      {/* Password Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 max-w-md w-full animate-scale-in">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faLock} className="text-2xl text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Admin Access Required</h3>
              <p className="text-gray-600">Enter password to clear all reports</p>
            </div>

            <div className="space-y-4">
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="form-input focus-ring"
                  onKeyPress={(e) => e.key === 'Enter' && handlePasswordSubmit()}
                />
                {passwordError && (
                  <p className="text-red-500 text-sm mt-2">{passwordError}</p>
                )}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setShowPasswordModal(false)
                    setPassword('')
                    setPasswordError('')
                  }}
                  className="flex-1 px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handlePasswordSubmit}
                  className="flex-1 px-4 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Community Impact Gallery */}
      <section className="max-w-6xl mx-auto mt-24 px-6 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-4 font-heading">
            Community Impact
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            See the real difference our community makes
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            { src: '/img2/img2-1.jpg', title: 'Together for a Greener Tomorrow' },
            { src: '/img2/img2-2.jpg', title: 'Your Report Makes a Difference' },
            { src: '/img2/img2-3.webp', title: 'Cleaner Communities, Brighter Future' },
            { src: '/img2/img2-4.jpg', title: 'Act Green, Live Clean' }
          ].map((image, index) => (
            <div key={index} className="relative group overflow-hidden rounded-3xl shadow-2xl card-hover animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 md:h-80 object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-white font-bold text-lg md:text-xl mb-6 drop-shadow-lg text-center px-4">
                  {image.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Animal Reverence Gallery */}
      <section className="max-w-6xl mx-auto mt-24 px-6 mb-16">
        <h2 className="text-3xl md:text-4xl font-black text-emerald-700 mb-12 text-center flex items-center justify-center gap-4 font-heading">
          <FontAwesomeIcon icon={faPaw} className="text-3xl md:text-4xl text-emerald-400" />
          Animal Reverence & Protection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {[
            { src: '/imgd/1d.jpg', title: 'Animals are revered as gods in India' },
            { src: '/imgd/2d.jpg', title: 'Save and protect animals' },
            { src: '/imgd/3d.jpg', title: 'Compassion for all living beings' },
            { src: '/imgd/4d.jpg', title: 'Every life matters: protect our animals' },
            { src: '/imgd/5d.jpg', title: 'Kindness to animals is a mark of a great nation' },
            { src: '/imgd/6d.jpg', title: 'Protect the voiceless, preserve our future' }
          ].map((image, index) => (
            <div key={index} className="relative group overflow-hidden rounded-3xl shadow-2xl card-hover animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 md:h-80 object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-white font-bold text-sm md:text-lg mb-6 drop-shadow-lg text-center px-2">
                  {image.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} id="about" className="w-full max-w-7xl mx-auto mt-24 mb-16 px-4 sm:px-8">
        <div className="glass-card rounded-3xl p-6 sm:p-10 md:p-14 shadow-2xl flex flex-col lg:flex-row items-center lg:items-start gap-10 md:gap-16">
          <div className="flex-1 w-full max-w-2xl lg:pr-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-800 mb-4 sm:mb-6 font-heading leading-tight">
              About Clean and Healthy Area
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8 max-w-prose">
              Clean and Healthy Area is dedicated to building cleaner, greener communities by empowering citizens to report and resolve waste issues. Our mission is to protect the environment, promote sustainability, and inspire positive change for a better tomorrow.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center p-4 sm:p-6 bg-white/60 rounded-2xl shadow-lg flex flex-col items-center min-w-[180px] animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <FontAwesomeIcon icon={faLeaf} className="text-3xl sm:text-4xl text-emerald-500 mb-2 sm:mb-4" />
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-1 sm:mb-2">Environmental Protection</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Safeguarding our natural resources</p>
              </div>
              <div className="text-center p-4 sm:p-6 bg-white/60 rounded-2xl shadow-lg flex flex-col items-center min-w-[180px] animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <FontAwesomeIcon icon={faUsers} className="text-3xl sm:text-4xl text-blue-500 mb-2 sm:mb-4" />
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-1 sm:mb-2">Community Engagement</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Empowering local communities</p>
              </div>
              <div className="text-center p-4 sm:p-6 bg-white/60 rounded-2xl shadow-lg flex flex-col items-center min-w-[180px] animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <FontAwesomeIcon icon={faRecycle} className="text-3xl sm:text-4xl text-purple-500 mb-2 sm:mb-4" />
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-1 sm:mb-2">Sustainable Solutions</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Creating lasting positive impact</p>
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md flex-shrink-0 mx-auto lg:mx-0">
            <img
              src="/goal1.png"
              alt="Clean and Healthy Area Goal"
              className="w-full h-auto rounded-3xl shadow-2xl object-cover aspect-[4/5] max-h-[400px] min-h-[220px] animate-float"
            />
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-3xl blur opacity-30 -z-10"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gradient-to-r from-emerald-50 to-blue-50 border-t border-emerald-200 py-12 mt-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-6">
          <div className="text-emerald-700 font-bold text-lg">
            © 2025 Clean and Healthy Area
          </div>
          <div className="text-emerald-600 text-lg text-center md:text-left">
            Contact: <a
              href="mailto:paraskumar9953952680@gmail.com"
              className="text-emerald-700 hover:text-emerald-800 font-semibold transition-colors"
            >
              paraskumar9953952680@gmail.com
            </a>
          </div>
        </div>
      </footer>

      {/* Floating Report Button */}
      <Link
        to="/report"
        className="fixed z-50 bottom-8 right-8 bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-2xl rounded-2xl px-6 md:px-8 py-3 md:py-4 flex items-center gap-3 text-lg md:text-xl font-bold hover:scale-110 hover:shadow-3xl transition-all duration-300 animate-float"
      >
        <FontAwesomeIcon icon={faFlag} />
        <span className="hidden sm:inline">Report Issue</span>
      </Link>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed z-50 bottom-28 right-8 bg-white/20 backdrop-blur-xl text-gray-700 shadow-2xl rounded-2xl p-4 text-2xl font-bold hover:scale-110 transition-all duration-300 border border-white/30 animate-bounce-gentle"
          aria-label="Back to top"
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
    </div>
  )
}

export default Home
