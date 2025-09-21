import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useNotification } from '../context/NotificationContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSignInAlt, 
  faUserPlus,
  faSignOutAlt,
  faChevronDown,
  faHardHat,
  faTools,
  faUser,
  faShieldAlt
} from '@fortawesome/free-solid-svg-icons';

// A component that intelligently displays the auth status in the header.
// It shows the user's profile icon and a logout dropdown if logged in,
// otherwise it shows the Sign In and Sign Up buttons.
const AuthStatus = () => {
  // Access the current user object and logout function from the AuthContext
  const { user, adminUser, logout, adminLogout } = useAuth();
  const { showSuccess, showError } = useNotification();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Function to handle user logout
  const handleLogout = async () => {
    try {
      if (adminUser) {
        adminLogout();
        showSuccess('Admin access revoked.');
      } else {
        await logout();
        showSuccess('You have been logged out.');
      }
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
      showError('Failed to log out. Please try again.');
    }
  };

  // Logic to close the dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // If a user is logged in (user object exists), show their profile icon and a dropdown
  if (user || adminUser) {
    const currentUser = adminUser || user;
    // Get the first letter of the email for the avatar if no photo is available
    const userInitial = currentUser.email ? currentUser.email.charAt(0).toUpperCase() : '?';

    return (
      <div className="relative" ref={dropdownRef}>
        {/* Profile icon and dropdown toggle button */}
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-full transition-all duration-300 group"
        >
          {currentUser.photoURL ? (
            <img
              src={currentUser.photoURL}
              alt="User profile"
              className="h-10 w-10 rounded-full object-cover border-2 border-white/50 shadow-lg group-hover:scale-110 transition-transform duration-300"
            />
          ) : (
            <div className={`flex items-center justify-center h-10 w-10 ${adminUser ? 'bg-gradient-to-r from-red-500 to-orange-500' : 'bg-emerald-500'} text-white rounded-full font-bold text-xl shadow-lg border-2 border-white/50 group-hover:scale-110 transition-transform duration-300`}>
              {userInitial}
            </div>
          )}
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`text-gray-600 text-sm transform transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
          />
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute right-0 mt-3 w-56 glass-card rounded-xl shadow-2xl z-10 p-2 border border-white/30 animate-fade-in-up origin-top-right">
            <div className="p-3 border-b border-white/30 mb-2">
              <p className="text-gray-800 font-semibold truncate">{currentUser.email}</p>
              <p className="text-gray-500 text-sm flex items-center gap-2">
                {adminUser ? (
                  <>
                    <FontAwesomeIcon icon={faShieldAlt} className="text-red-500" />
                    Admin
                  </>
                ) : currentUser.role === 'worker' ? (
                  <>
                    <FontAwesomeIcon icon={faHardHat} className="text-orange-500" />
                    Worker
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faUser} className="text-emerald-500" />
                    User
                  </>
                )}
              </p>
            </div>
            
            {!adminUser && user && user.role === 'worker' && (
              <Link
                to="/worker-dashboard"
                className="w-full text-left px-4 py-3 rounded-lg text-gray-700 hover:bg-orange-100/60 hover:text-orange-600 transition-colors duration-200 font-semibold flex items-center gap-3"
                onClick={() => setIsDropdownOpen(false)}
              >
                <FontAwesomeIcon icon={faTools} />
                Worker Dashboard
              </Link>
            )}
            
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-3 rounded-lg text-gray-700 hover:bg-red-100/60 hover:text-red-600 transition-colors duration-200 font-semibold flex items-center gap-3"
            >
              <FontAwesomeIcon icon={faSignOutAlt} />
              Logout
            </button>
          </div>
        )}
      </div>
    );
  }

  // If no user is logged in, show the Sign In and Sign Up links
  return (
    <nav className="hidden md:flex items-center gap-4">
      <div className="flex gap-2">
        <Link
          to="/signin"
          className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-4 py-2 rounded-lg font-semibold transition duration-300 shadow-lg hover:shadow-xl"
        >
          <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
          Sign In
        </Link>
        <Link
          to="/signup"
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-semibold transition duration-300 shadow-lg hover:shadow-xl"
        >
          <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
          Sign Up
        </Link>
      </div>
      
      <div className="border-l border-gray-300 pl-4">
        <div className="flex gap-2">
          <Link
            to="/worker-signin"
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-3 py-2 rounded-lg font-semibold transition duration-300 shadow-lg hover:shadow-xl text-sm"
          >
            <FontAwesomeIcon icon={faHardHat} className="mr-1" />
            Worker Sign In
          </Link>
          <Link
            to="/worker-signup"
            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-3 py-2 rounded-lg font-semibold transition duration-300 shadow-lg hover:shadow-xl text-sm"
          >
            <FontAwesomeIcon icon={faTools} className="mr-1" />
            Worker Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default AuthStatus;