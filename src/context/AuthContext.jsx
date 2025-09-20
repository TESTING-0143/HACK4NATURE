import React, { createContext, useContext, useEffect, useState } from 'react'
import { initializeApp } from 'firebase/app'
import { 
  getAuth, 
  onAuthStateChanged, 
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile
} from 'firebase/auth'
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore'

// Firebase config
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey || 'demo-api-key',
  authDomain: import.meta.env.VITE_authDomain || 'demo.firebaseapp.com',
  projectId: import.meta.env.VITE_projectId || 'demo-project',
  storageBucket: import.meta.env.VITE_storageBucket || 'demo.appspot.com',
  messagingSenderId: import.meta.env.VITE_messagingSenderId || '123456789',
  appId: import.meta.env.VITE_appId || 'demo-app-id'
}

// Initialize Firebase
let app, auth, db

try {
  app = initializeApp(firebaseConfig)
  auth = getAuth(app)
  db = getFirestore(app)
} catch (error) {
  console.warn('Firebase initialization failed:', error)
  // Create mock objects for development
  app = null
  auth = null
  db = null
}

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [adminUser, setAdminUser] = useState(null)

  // Sign up with email and password
  const signUp = async (email, password, firstName, lastName, role = 'user', additionalData = {}) => {
    if (!auth) {
      throw new Error('Authentication service not available')
    }
    
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    await updateProfile(userCredential.user, {
      displayName: `${firstName} ${lastName}`
    })
    
    // Save user data to Firestore
    if (db) {
      try {
        await setDoc(doc(db, 'users', userCredential.user.uid), {
          uid: userCredential.user.uid,
          email: userCredential.user.email,
          displayName: `${firstName} ${lastName}`,
          role: role,
          createdAt: new Date().toISOString(),
          ...additionalData
        })
      } catch (error) {
        console.warn('Failed to save user data to Firestore:', error)
      }
    }
    
    return userCredential
  }

  // Sign in with email and password
  const signIn = async (email, password, role = null) => {
    if (!auth) {
      throw new Error('Authentication service not available')
    }
    
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    
    // If role is specified, check if user has that role
    if (role && db) {
      try {
        const userDoc = await getDoc(doc(db, 'users', userCredential.user.uid))
        if (userDoc.exists() && userDoc.data().role !== role) {
          throw new Error('Invalid role for this account')
        }
      } catch (error) {
        console.warn('Failed to check user role:', error)
      }
    }
    
    return userCredential
  }

  // Sign in with Google
  const signInWithGoogle = async (role = null) => {
    if (!auth) {
      throw new Error('Authentication service not available')
    }
    
    const provider = new GoogleAuthProvider()
    const userCredential = await signInWithPopup(auth, provider)
    
    // If role is specified, check if user has that role
    if (role && db) {
      try {
        const userDoc = await getDoc(doc(db, 'users', userCredential.user.uid))
        if (userDoc.exists() && userDoc.data().role !== role) {
          throw new Error('Invalid role for this account')
        }
      } catch (error) {
        console.warn('Failed to check user role:', error)
      }
    }
    
    return userCredential
  }

  // Admin sign in with hardcoded credentials
  const adminSignIn = async (email, password) => {
    // Hardcoded admin credentials
    const ADMIN_EMAIL = 'parascursor9@gmail.com'
    const ADMIN_PASSWORD = 'Up12k0143@'
    
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      const adminData = {
        email: ADMIN_EMAIL,
        role: 'admin',
        displayName: 'Admin User',
        uid: 'admin-user-id'
      }
      setAdminUser(adminData)
      localStorage.setItem('adminUser', JSON.stringify(adminData))
      return adminData
    } else {
      throw new Error('Invalid admin credentials')
    }
  }

  // Admin sign out
  const adminLogout = () => {
    setAdminUser(null)
    localStorage.removeItem('adminUser')
  }

  // Sign out
  const logout = () => {
    if (!auth) {
      return Promise.resolve()
    }
    return signOut(auth)
  }

  useEffect(() => {
    // Check for existing admin session
    const savedAdminUser = localStorage.getItem('adminUser')
    if (savedAdminUser) {
      try {
        setAdminUser(JSON.parse(savedAdminUser))
      } catch (error) {
        console.error('Error parsing admin user data:', error)
        localStorage.removeItem('adminUser')
      }
    }

    if (!auth) {
      setLoading(false)
      return
    }
    
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Get additional user data from Firestore
        if (db) {
          try {
            const userDoc = await getDoc(doc(db, 'users', user.uid))
            if (userDoc.exists()) {
              setUser({ ...user, ...userDoc.data() })
            } else {
              setUser(user)
            }
          } catch (error) {
            console.error('Error fetching user data:', error)
            setUser(user)
          }
        } else {
          setUser(user)
        }
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    user,
    adminUser,
    signUp,
    signIn,
    signInWithGoogle,
    adminSignIn,
    adminLogout,
    logout,
    loading
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
      {!loading && !auth && (
        <div className="fixed top-4 right-4 bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded z-50">
          <strong>Demo Mode:</strong> Firebase not configured. Authentication features are disabled.
        </div>
      )}
    </AuthContext.Provider>
  )
}
