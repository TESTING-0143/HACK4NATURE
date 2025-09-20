import React, { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNotification } from '../context/NotificationContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faHardHat,
  faTools,
  faMapMarkerAlt,
  faClock,
  faCheck,
  faTimes,
  faEye,
  faSpinner,
  faCalendarAlt,
  faDollarSign,
  faTrophy,
  faChartLine,
  faBell,
  faSignOutAlt,
  faHome,
  faFlag,
  faChartBar,
  faInfo,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons'
import AuthStatus from '../components/AuthStatus'

const WorkerDashboard = () => {
  const { user, logout } = useAuth()
  const { showSuccess, showError } = useNotification()
  const [assignments, setAssignments] = useState([])
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({
    totalAssignments: 0,
    completedAssignments: 0,
    pendingAssignments: 0,
    totalEarnings: 0
  })

  // Mock data for demonstration
  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      const mockAssignments = [
        {
          id: 1,
          title: 'Garbage Collection - Downtown Area',
          description: 'Collect garbage from downtown area including Main Street and surrounding alleys',
          location: 'Downtown Area, Main Street',
          coordinates: { lat: 40.7128, lng: -74.0060 },
          estimatedTime: '2-3 hours',
          distance: '1.2 km',
          amount: 150,
          status: 'pending',
          priority: 'high',
          reportedAt: '2024-01-15T10:30:00Z',
          image: '/imgd/1d.jpg'
        },
        {
          id: 2,
          title: 'Street Cleaning - Park Avenue',
          description: 'Clean street and remove debris from Park Avenue and adjacent sidewalks',
          location: 'Park Avenue, Central District',
          coordinates: { lat: 40.7589, lng: -73.9851 },
          estimatedTime: '1.5-2 hours',
          distance: '0.8 km',
          amount: 120,
          status: 'accepted',
          priority: 'medium',
          reportedAt: '2024-01-15T09:15:00Z',
          image: '/imgd/2d.jpg'
        },
        {
          id: 3,
          title: 'Drainage Maintenance - Industrial Zone',
          description: 'Clear blocked drains and ensure proper water flow in industrial area',
          location: 'Industrial Zone, Factory District',
          coordinates: { lat: 40.7505, lng: -73.9934 },
          estimatedTime: '3-4 hours',
          distance: '2.1 km',
          amount: 200,
          status: 'completed',
          priority: 'high',
          reportedAt: '2024-01-14T14:20:00Z',
          image: '/imgd/3d.jpg'
        },
        {
          id: 4,
          title: 'Park Maintenance - Central Park',
          description: 'Maintain cleanliness and remove litter from Central Park area',
          location: 'Central Park, Green Zone',
          coordinates: { lat: 40.7829, lng: -73.9654 },
          estimatedTime: '2-2.5 hours',
          distance: '1.5 km',
          amount: 180,
          status: 'pending',
          priority: 'low',
          reportedAt: '2024-01-15T11:45:00Z',
          image: '/imgd/4d.jpg'
        }
      ]

      setAssignments(mockAssignments)
      
      // Calculate stats
      const totalAssignments = mockAssignments.length
      const completedAssignments = mockAssignments.filter(a => a.status === 'completed').length
      const pendingAssignments = mockAssignments.filter(a => a.status === 'pending').length
      const totalEarnings = mockAssignments
        .filter(a => a.status === 'completed')
        .reduce((sum, a) => sum + a.amount, 0)

      setStats({
        totalAssignments,
        completedAssignments,
        pendingAssignments,
        totalEarnings
      })
      
      setLoading(false)
    }, 1000)
  }, [])

  const handleAcceptAssignment = (assignmentId) => {
    setAssignments(prev => 
      prev.map(assignment => 
        assignment.id === assignmentId 
          ? { ...assignment, status: 'accepted' }
          : assignment
      )
    )
    showSuccess('Assignment accepted successfully!')
  }

  const handleRejectAssignment = (assignmentId) => {
    setAssignments(prev => 
      prev.map(assignment => 
        assignment.id === assignmentId 
          ? { ...assignment, status: 'rejected' }
          : assignment
      )
    )
    showSuccess('Assignment rejected.')
  }

  const handleCompleteAssignment = (assignmentId) => {
    setAssignments(prev => 
      prev.map(assignment => 
        assignment.id === assignmentId 
          ? { ...assignment, status: 'completed' }
          : assignment
      )
    )
    
    // Update stats
    const assignment = assignments.find(a => a.id === assignmentId)
    if (assignment) {
      setStats(prev => ({
        ...prev,
        completedAssignments: prev.completedAssignments + 1,
        pendingAssignments: prev.pendingAssignments - 1,
        totalEarnings: prev.totalEarnings + assignment.amount
      }))
    }
    
    showSuccess('Assignment completed successfully!')
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-100'
      case 'medium': return 'text-yellow-600 bg-yellow-100'
      case 'low': return 'text-green-600 bg-green-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'text-blue-600 bg-blue-100'
      case 'accepted': return 'text-yellow-600 bg-yellow-100'
      case 'completed': return 'text-green-600 bg-green-100'
      case 'rejected': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 flex items-center justify-center">
        <div className="text-center">
          <FontAwesomeIcon icon={faSpinner} className="animate-spin text-4xl text-orange-500 mb-4" />
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    )
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
              <span className="text-gray-600 text-sm font-semibold">Worker Dashboard</span>
            </div>
          </div>
          <AuthStatus />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="glass-card rounded-2xl p-6 border border-white/30">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-orange-100 rounded-full">
                <FontAwesomeIcon icon={faHardHat} className="text-2xl text-orange-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  Welcome back, {user?.displayName || 'Worker'}!
                </h1>
                <p className="text-gray-600">Manage your work assignments and track your progress</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="glass-card rounded-2xl p-6 border border-white/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Assignments</p>
                <p className="text-2xl font-bold text-gray-800">{stats.totalAssignments}</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <FontAwesomeIcon icon={faChartBar} className="text-xl text-blue-600" />
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-white/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Completed</p>
                <p className="text-2xl font-bold text-green-600">{stats.completedAssignments}</p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <FontAwesomeIcon icon={faCheck} className="text-xl text-green-600" />
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-white/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Pending</p>
                <p className="text-2xl font-bold text-yellow-600">{stats.pendingAssignments}</p>
              </div>
              <div className="p-3 bg-yellow-100 rounded-full">
                <FontAwesomeIcon icon={faClock} className="text-xl text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-white/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Earnings</p>
                <p className="text-2xl font-bold text-emerald-600">${stats.totalEarnings}</p>
              </div>
              <div className="p-3 bg-emerald-100 rounded-full">
                <FontAwesomeIcon icon={faDollarSign} className="text-xl text-emerald-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Assignments Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Work Assignments</h2>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-orange-100 text-orange-600 rounded-lg font-semibold hover:bg-orange-200 transition-colors">
                All
              </button>
              <button className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg font-semibold hover:bg-blue-200 transition-colors">
                Pending
              </button>
              <button className="px-4 py-2 bg-yellow-100 text-yellow-600 rounded-lg font-semibold hover:bg-yellow-200 transition-colors">
                Accepted
              </button>
              <button className="px-4 py-2 bg-green-100 text-green-600 rounded-lg font-semibold hover:bg-green-200 transition-colors">
                Completed
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {assignments.map((assignment) => (
              <div key={assignment.id} className="glass-card rounded-2xl p-6 border border-white/30 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{assignment.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{assignment.description}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-orange-500" />
                        <span>{assignment.distance}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FontAwesomeIcon icon={faClock} className="text-blue-500" />
                        <span>{assignment.estimatedTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FontAwesomeIcon icon={faDollarSign} className="text-emerald-500" />
                        <span>${assignment.amount}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getPriorityColor(assignment.priority)}`}>
                        {assignment.priority} priority
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(assignment.status)}`}>
                        {assignment.status}
                      </span>
                    </div>
                  </div>
                  
                  {assignment.image && (
                    <img 
                      src={assignment.image} 
                      alt="Assignment" 
                      className="w-16 h-16 rounded-lg object-cover ml-4"
                    />
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500">
                    Reported: {new Date(assignment.reportedAt).toLocaleDateString()}
                  </div>
                  
                  <div className="flex gap-2">
                    {assignment.status === 'pending' && (
                      <>
                        <button
                          onClick={() => handleAcceptAssignment(assignment.id)}
                          className="px-3 py-1 bg-green-500 text-white rounded-lg text-sm font-semibold hover:bg-green-600 transition-colors"
                        >
                          <FontAwesomeIcon icon={faCheck} className="mr-1" />
                          Accept
                        </button>
                        <button
                          onClick={() => handleRejectAssignment(assignment.id)}
                          className="px-3 py-1 bg-red-500 text-white rounded-lg text-sm font-semibold hover:bg-red-600 transition-colors"
                        >
                          <FontAwesomeIcon icon={faTimes} className="mr-1" />
                          Reject
                        </button>
                      </>
                    )}
                    
                    {assignment.status === 'accepted' && (
                      <button
                        onClick={() => handleCompleteAssignment(assignment.id)}
                        className="px-3 py-1 bg-emerald-500 text-white rounded-lg text-sm font-semibold hover:bg-emerald-600 transition-colors"
                      >
                        <FontAwesomeIcon icon={faCheck} className="mr-1" />
                        Complete
                      </button>
                    )}
                    
                    <button className="px-3 py-1 bg-blue-500 text-white rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors">
                      <FontAwesomeIcon icon={faEye} className="mr-1" />
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="glass-card rounded-2xl p-6 border border-white/30">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="flex items-center gap-3 p-4 bg-orange-100 rounded-xl hover:bg-orange-200 transition-colors">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-orange-600 text-xl" />
              <div className="text-left">
                <p className="font-semibold text-gray-800">View Map</p>
                <p className="text-sm text-gray-600">See all assignments</p>
              </div>
            </button>
            
            <button className="flex items-center gap-3 p-4 bg-blue-100 rounded-xl hover:bg-blue-200 transition-colors">
              <FontAwesomeIcon icon={faChartLine} className="text-blue-600 text-xl" />
              <div className="text-left">
                <p className="font-semibold text-gray-800">Performance</p>
                <p className="text-sm text-gray-600">View your stats</p>
              </div>
            </button>
            
            <button className="flex items-center gap-3 p-4 bg-green-100 rounded-xl hover:bg-green-200 transition-colors">
              <FontAwesomeIcon icon={faBell} className="text-green-600 text-xl" />
              <div className="text-left">
                <p className="font-semibold text-gray-800">Notifications</p>
                <p className="text-sm text-gray-600">Check updates</p>
              </div>
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default WorkerDashboard

