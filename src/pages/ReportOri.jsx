import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet'
import { useNotification } from '../context/NotificationContext'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFlag,
  faInfoCircle,
  faMapMarkerAlt,
  faTag,
  faComment,
  faRuler,
  faRoad,
  faUser,
  faPhone,
  faCamera,
  faCloudUploadAlt,
  faPaperPlane,
  faTrash,
  faCheckCircle,
  faExclamationTriangle,
  faSpinner,
  faTimes,
  faCheck
} from '@fortawesome/free-solid-svg-icons'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

const MapClickHandler = ({ onLocationSelect }) => {
  useMapEvents({
    click: (e) => {
      onLocationSelect(e.latlng.lat, e.latlng.lng)
    }
  })
  return null
}

const Report = () => {
  const { showSuccess, showError } = useNotification()
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    location: '',
    latitude: '',
    longitude: '',
    reportType: '',
    description: '',
    size: '',
    accessibility: '',
    name: '',
    phone: '',
    image: null
  })
  const [mapPosition, setMapPosition] = useState([28.6139, 77.2090]) // Default: Delhi
  const [markerPosition, setMarkerPosition] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState({ type: '', title: '', message: '' })
  const fileInputRef = useRef(null)

  useEffect(() => {
    // Get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords
          setMapPosition([latitude, longitude])
          setMarkerPosition([latitude, longitude])

          // Reverse geocode to get location name
          try {
            const locationName = await reverseGeocode(latitude, longitude)
            setFormData(prev => ({
              ...prev,
              location: locationName,
              latitude: latitude.toString(),
              longitude: longitude.toString()
            }))
          } catch (error) {
            console.error('Reverse geocoding failed:', error)
          }
        },
        (error) => {
          console.error('Geolocation error:', error)
        }
      )
    }
  }, [])

  const reverseGeocode = async (lat, lng) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`
      )
      const data = await response.json()
      return data.display_name || `${lat.toFixed(4)}, ${lng.toFixed(4)}`
    } catch (error) {
      return `${lat.toFixed(4)}, ${lng.toFixed(4)}`
    }
  }

  const handleLocationSelect = async (lat, lng) => {
    setMarkerPosition([lat, lng])
    const locationName = await reverseGeocode(lat, lng)
    setFormData(prev => ({
      ...prev,
      location: locationName,
      latitude: lat.toString(),
      longitude: lng.toString()
    }))
  }

  const goToCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords
          setMapPosition([latitude, longitude])
          await handleLocationSelect(latitude, longitude)
        },
        (error) => {
          showError('Failed to get current location. Please select location on map.')
        }
      )
    } else {
      showError('Geolocation is not supported by this browser.')
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      // Validate file type
      if (!file.type.match('image/jpeg') && !file.type.match('image/png')) {
        showError('Please select a JPEG or PNG image file.')
        return
      }

      // Validate file size (5MB)
      if (file.size > 5 * 1024 * 1024) {
        showError('Image size must be less than 5MB.')
        return
      }

      setFormData(prev => ({ ...prev, image: file }))

      // Create preview
      const reader = new FileReader()
      reader.onload = (e) => {
        setImagePreview(e.target.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const removeImage = () => {
    setFormData(prev => ({ ...prev, image: null }))
    setImagePreview(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const validateForm = () => {
    if (!formData.reportType) {
      showError('Please select a report type.')
      return false
    }

    if (!formData.description || formData.description.length < 10) {
      showError('Please enter a description (minimum 10 characters).')
      return false
    }

    if (!formData.image) {
      showError('Please upload an image.')
      return false
    }

    if (!formData.latitude || !formData.longitude) {
      showError('Please select a location on the map.')
      return false
    }

    return true
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

  async function submitReport(report) {
    const formData = new FormData();

    // Append text fields
    formData.append('location', report.location)
    formData.append('latitude', report.latitude)
    formData.append('longitude', report.longitude)
    formData.append('reportType', report.reportType)
    formData.append('description', report.description)
    formData.append('size', report.size)
    formData.append('accessibility', report.accessibility)
    formData.append('name', report.name)
    formData.append('phone', report.phone)
    formData.append('image', report.image)


    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/reports`  || 'http://localhost:5000/api/reports', {
      method: "POST",
      body: formData // No Content-Type here!
    });

    return res.json();
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

      if (!validateForm()) {
        return
      }

      setIsSubmitting(true)

    try {
      const result = await submitReport(formData);
      if (result.success) {
        setModalContent({
          type: 'success',
          title: 'Report Submitted Successfully!',
          message: 'Your report has been received and will be processed within 24-48 hours.'
        })
        setShowModal(true)

        // Reset form
        setFormData({
          location: '',
          latitude: '',
          longitude: '',
          reportType: '',
          description: '',
          size: '',
          accessibility: '',
          name: '',
          phone: '',
          image: null
        })
        setImagePreview(null)
        setMarkerPosition(null)
        if (fileInputRef.current) {
          fileInputRef.current.value = ''
        }
        // Redirect after a short delay
        setTimeout(() => {
          setShowModal(false)
          navigate('/#dashboard-section')
        }, 2000)
      } else {
        showError(result.error || 'Failed to submit report.')
      }
    } catch (error) {
      showError('Failed to submit report. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  };

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <div className="min-h-screen scroll-smooth smooth-scroll-container bg-gradient-to-b from-white via-blue-50 to-emerald-50">
      <Header />
      {/* Hero Header */}
      <section className="max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto mt-8 px-2 sm:px-6 py-8">
        <div className="bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-500 rounded-3xl shadow-2xl p-6 md:p-10 mb-8 text-center animate-fade-in">
          <div className="bg-white/30 backdrop-blur-2xl rounded-3xl p-6 md:p-10">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-black text-white mb-4 md:mb-6 font-heading drop-shadow-2xl flex items-center justify-center gap-4">
              <FontAwesomeIcon icon={faFlag} className="mr-2 md:mr-6 animate-bounce-gentle" />
              Report Waste Issue
            </h1>
            <p className="text-white/90 text-lg md:text-2xl mb-2 animate-fade-in">Help us keep our community clean and healthy</p>
            <p className="text-white/80 text-base md:text-xl animate-fade-in">Your report makes a difference in our environment</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-6 md:mt-8">
              <div className="flex items-center text-white/90 bg-white/10 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-2xl shadow-md animate-slide-up">
                <FontAwesomeIcon icon={faCheckCircle} className="mr-2 md:mr-3 text-lg md:text-2xl" />
                <span className="text-sm md:text-lg font-semibold">Quick & Easy</span>
              </div>
              <div className="flex items-center text-white/90 bg-white/10 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-2xl shadow-md animate-slide-up">
                <FontAwesomeIcon icon={faExclamationTriangle} className="mr-2 md:mr-3 text-lg md:text-2xl" />
                <span className="text-sm md:text-lg font-semibold">Secure & Private</span>
              </div>
            </div>
          </div>
        </div>
        <div className="glass-card rounded-3xl shadow-2xl border border-white/30 p-4 sm:p-6 md:p-10 animate-fade-in">
          <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10">
            {/* Basic Information Section */}
            <div className="bg-gradient-to-r from-blue-50/80 to-emerald-50/80 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-8 border border-white/50 shadow-md animate-slide-up">
              <h2 className="text-xl md:text-2xl font-black text-gray-800 mb-4 md:mb-6 flex items-center font-heading gap-2">
                <FontAwesomeIcon icon={faInfoCircle} className="text-blue-600 text-2xl md:text-3xl animate-pulse" />
                Basic Information
              </h2>
              {/* Location Map */}
              <div className="mb-6 md:mb-8">
                <label className="block text-base md:text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-emerald-600" />
                  Location <span className="text-red-500">*</span>
                </label>
                <div className="h-56 md:h-72 lg:h-80 rounded-2xl overflow-hidden border-4 border-emerald-200 shadow-lg mb-4 relative group">
                  <MapContainer
                    center={mapPosition}
                    zoom={13}
                    className="w-full h-full"
                    key={mapPosition.toString()}
                  >
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution="© OpenStreetMap contributors"
                    />
                    {markerPosition && <Marker position={markerPosition} />}
                    <MapClickHandler onLocationSelect={handleLocationSelect} />
                  </MapContainer>
                  <span className="absolute top-2 left-2 bg-emerald-500 text-white text-xs px-3 py-1 rounded-full shadow-md opacity-80 group-hover:opacity-100 transition">Interactive Map</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={goToCurrentLocation}
                    className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 font-semibold shadow-md"
                  >
                    📍 My Location
                  </button>
                  {formData.latitude && formData.longitude && (
                    <button
                      type="button"
                      onClick={() => window.open(`https://www.google.com/maps?q=${formData.latitude},${formData.longitude}`, '_blank')}
                      className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-semibold shadow-md"
                    >
                      🌍 Open in Google Maps
                    </button>
                  )}
                </div>
                {formData.location && (
                  <div className="mt-3 p-3 bg-white/90 rounded-lg border border-gray-200 shadow-sm">
                    <p className="text-xs text-gray-600">Selected Location:</p>
                    <p className="font-semibold text-gray-800 text-sm md:text-base">{formData.location}</p>
                  </div>
                )}
              </div>
              {/* Report Type */}
              <div className="mb-6 md:mb-8">
                <label htmlFor="reportType" className="block text-base md:text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                  <FontAwesomeIcon icon={faTag} className="text-emerald-600" />
                  Type of Report <span className="text-red-500">*</span>
                </label>
                <select
                  id="reportType"
                  name="reportType"
                  value={formData.reportType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-2xl border-2 border-blue-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-200 transition-all duration-300 bg-white/90 backdrop-blur-sm text-gray-800 text-base md:text-lg shadow-sm"
                >
                  <option value="">Select report type</option>
                  <option value="garbage">🗑️ Garbage/Waste Collection</option>
                  <option value="animal-death">💔 Animal Death/Injury</option>
                  <option value="animal-adopt">🏠 Animal Adoption</option>
                  <option value="animal-care">🐾 Animal Care/Rescue</option>
                  <option value="cleaning">🧹 Cleaning Request</option>
                  <option value="recycling">♻️ Recycling Issue</option>
                  <option value="hazardous">⚠️ Hazardous Waste</option>
                  <option value="other">📋 Other</option>
                </select>
              </div>
            </div>
            {/* Detailed Information Section */}
            <div className="bg-gradient-to-r from-emerald-50/80 to-blue-50/80 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-8 border border-white/50 shadow-md animate-slide-up">
              <h2 className="text-xl md:text-2xl font-black text-gray-800 mb-4 md:mb-6 flex items-center font-heading gap-2">
                <FontAwesomeIcon icon={faComment} className="text-emerald-600 text-2xl md:text-3xl animate-pulse" />
                Detailed Information
              </h2>
              {/* Description */}
              <div className="mb-6 md:mb-8">
                <label htmlFor="description" className="block text-base md:text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                  <FontAwesomeIcon icon={faComment} className="text-emerald-600" />
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  minLength={10}
                  maxLength={300}
                  rows={4}
                  placeholder="Describe the issue in detail. Include specific details about the problem, size, impact, and any relevant observations..."
                  className="w-full px-4 py-3 rounded-2xl border-2 border-blue-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-200 transition-all duration-300 bg-white/90 backdrop-blur-sm text-gray-800 placeholder-gray-500 resize-none text-base md:text-lg shadow-sm"
                />
                <div className="flex justify-between items-center mt-2">
                  <p className="text-xs text-gray-600 flex items-center">
                    <FontAwesomeIcon icon={faInfoCircle} className="text-blue-500 mr-2" />
                    Minimum 10 characters, maximum 300 characters
                  </p>
                  <span className="text-xs text-gray-500 font-semibold">
                    {formData.description.length}/300
                  </span>
                </div>
              </div>
              {/* Size and Accessibility */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 md:mb-8">
                <div>
                  <label htmlFor="size" className="block text-base md:text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <FontAwesomeIcon icon={faRuler} className="text-emerald-600" />
                    Estimated Size
                  </label>
                  <select
                    id="size"
                    name="size"
                    value={formData.size}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-2xl border-2 border-blue-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-200 transition-all duration-300 bg-white/90 backdrop-blur-sm text-gray-800 text-base md:text-lg shadow-sm"
                  >
                    <option value="">Select size (optional)</option>
                    <option value="small">📏 Small - Less than 1 meter</option>
                    <option value="medium">📐 Medium - 1-3 meters</option>
                    <option value="large">📏 Large - 3-10 meters</option>
                    <option value="very-large">📐 Very Large - More than 10 meters</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="accessibility" className="block text-base md:text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <FontAwesomeIcon icon={faRoad} className="text-emerald-600" />
                    Accessibility
                  </label>
                  <select
                    id="accessibility"
                    name="accessibility"
                    value={formData.accessibility}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-2xl border-2 border-blue-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-200 transition-all duration-300 bg-white/90 backdrop-blur-sm text-gray-800 text-base md:text-lg shadow-sm"
                  >
                    <option value="">Select accessibility (optional)</option>
                    <option value="easy">🚗 Easy - Vehicle accessible</option>
                    <option value="moderate">🚶 Moderate - Walking distance</option>
                    <option value="difficult">🏔️ Difficult - Hard to reach</option>
                    <option value="restricted">🚫 Restricted - Limited access</option>
                  </select>
                </div>
              </div>
            </div>
            {/* Contact Information Section */}
            <div className="bg-gradient-to-r from-blue-50/80 to-purple-50/80 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-8 border border-white/50 shadow-md animate-slide-up">
              <h2 className="text-xl md:text-2xl font-black text-gray-800 mb-4 md:mb-6 flex items-center font-heading gap-2">
                <FontAwesomeIcon icon={faUser} className="text-blue-600 text-2xl md:text-3xl animate-pulse" />
                Contact Information <span className="text-gray-500 text-xs">(Optional)</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-base md:text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <FontAwesomeIcon icon={faUser} className="text-blue-600" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    maxLength={50}
                    placeholder="Enter your name (optional)"
                    className="w-full px-4 py-3 rounded-2xl border-2 border-blue-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-200 transition-all duration-300 bg-white/90 backdrop-blur-sm text-gray-800 placeholder-gray-500 text-base md:text-lg shadow-sm"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-base md:text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <FontAwesomeIcon icon={faPhone} className="text-blue-600" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    pattern="[0-9]{10,15}"
                    placeholder="Enter phone number (optional)"
                    className="w-full px-4 py-3 rounded-2xl border-2 border-blue-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-200 transition-all duration-300 bg-white/90 backdrop-blur-sm text-gray-800 placeholder-gray-500 text-base md:text-lg shadow-sm"
                  />
                </div>
              </div>
            </div>
            {/* Image Upload Section */}
            <div className="bg-gradient-to-r from-purple-50/80 to-pink-50/80 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-8 border border-white/50 shadow-md animate-slide-up">
              <h2 className="text-xl md:text-2xl font-black text-gray-800 mb-4 md:mb-6 flex items-center font-heading gap-2">
                <FontAwesomeIcon icon={faCamera} className="text-purple-600 text-2xl md:text-3xl animate-pulse" />
                Visual Evidence <span className="text-red-500">*</span>
              </h2>
              <div className="border-2 border-dashed border-purple-300 rounded-3xl p-6 md:p-12 text-center hover:border-emerald-400 transition-all duration-300 bg-white/70 backdrop-blur-md relative group">
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/jpeg,image/png"
                  required
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  className="hidden"
                />
                {!imagePreview ? (
                  <div
                    className="cursor-pointer flex flex-col items-center justify-center gap-2"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <FontAwesomeIcon icon={faCloudUploadAlt} className="text-6xl md:text-8xl text-purple-400 mb-2 md:mb-4 animate-bounce-gentle" />
                    <p className="text-gray-700 text-lg md:text-2xl mb-2 font-bold">Click to upload or drag and drop</p>
                    <p className="text-gray-500 mb-2 md:mb-4 text-base md:text-lg">JPEG, PNG up to 5MB <span className="text-red-500">*</span></p>
                    <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-xs md:text-lg text-gray-600">
                      <span className="bg-white/80 backdrop-blur-sm px-3 md:px-4 py-2 rounded-xl shadow-sm">
                        <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" />High quality images
                      </span>
                      <span className="bg-white/80 backdrop-blur-sm px-3 md:px-4 py-2 rounded-xl shadow-sm">
                        <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" />Multiple angles
                      </span>
                      <span className="bg-white/80 backdrop-blur-sm px-3 md:px-4 py-2 rounded-xl shadow-sm">
                        <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" />Clear visibility
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="mt-4 md:mt-8 relative inline-block">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="max-w-full max-h-64 mx-auto rounded-3xl shadow-2xl border-4 border-purple-200"
                    />
                    <button
                      type="button"
                      onClick={removeImage}
                      className="absolute top-2 right-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full p-2 shadow-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 font-bold text-base md:text-lg"
                      aria-label="Remove Image"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                )}
              </div>
            </div>
            {/* Submit Section */}
            <div className="text-center pt-6 md:pt-8 animate-fade-in">
              <div className="bg-gradient-to-r from-emerald-50/80 to-green-50/80 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-8 border border-white/50 mb-6 md:mb-8 shadow-md">
                <h3 className="text-lg md:text-xl font-black text-gray-800 mb-2 md:mb-4 font-heading flex items-center gap-2">
                  <FontAwesomeIcon icon={faPaperPlane} className="text-emerald-500 animate-bounce-gentle" />Ready to Submit?
                </h3>
                <p className="text-gray-600 mb-2 md:mb-4 text-base md:text-lg">Your report will be reviewed and processed within 24-48 hours</p>
                <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-xs md:text-lg text-gray-600">
                  <span className="bg-white/80 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-2xl shadow-sm">
                    <FontAwesomeIcon icon={faExclamationTriangle} className="text-emerald-500 mr-2" />Secure submission
                  </span>
                  <span className="bg-white/80 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-2xl shadow-sm">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-emerald-500 mr-2" />Quick processing
                  </span>
                </div>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-10 md:px-16 py-4 md:py-6 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-black text-lg md:text-2xl rounded-3xl shadow-2xl hover:from-emerald-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 focus:ring-4 focus:ring-emerald-200 hover:shadow-3xl ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                aria-busy={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <FontAwesomeIcon icon={faSpinner} className="mr-4 animate-spin" />Submitting...
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faPaperPlane} className="mr-4" />Submit Report
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>
      {/* Success/Error Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="glass-card rounded-3xl p-6 md:p-8 text-center shadow-2xl max-w-md w-full border border-white/30">
            <div className="text-6xl md:text-8xl mb-4 md:mb-6">
              {modalContent.type === 'success' ? (
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 animate-bounce-gentle" />
              ) : (
                <FontAwesomeIcon icon={faExclamationTriangle} className="text-red-500 animate-bounce-gentle" />
              )}
            </div>
            <h3 className="text-2xl md:text-3xl font-black mb-4 font-heading text-gray-800">
              {modalContent.title}
            </h3>
            <p className="text-gray-600 mb-6 md:mb-8 text-base md:text-lg">
              {modalContent.message}
            </p>
            <button
              onClick={closeModal}
              className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold rounded-2xl hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Report
