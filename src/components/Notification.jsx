import React from 'react'
import { useNotification } from '../context/NotificationContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faCheckCircle, 
  faExclamationTriangle, 
  faInfoCircle, 
  faTimesCircle,
  faTimes 
} from '@fortawesome/free-solid-svg-icons'

const Notification = () => {
  const { notifications, removeNotification } = useNotification()

  const getNotificationStyles = (type) => {
    switch (type) {
      case 'success':
        return {
          bgColor: 'bg-green-500',
          textColor: 'text-green-800',
          borderColor: 'border-green-200',
          icon: faCheckCircle,
          iconColor: 'text-green-500'
        }
      case 'error':
        return {
          bgColor: 'bg-red-500',
          textColor: 'text-red-800',
          borderColor: 'border-red-200',
          icon: faTimesCircle,
          iconColor: 'text-red-500'
        }
      case 'warning':
        return {
          bgColor: 'bg-yellow-500',
          textColor: 'text-yellow-800',
          borderColor: 'border-yellow-200',
          icon: faExclamationTriangle,
          iconColor: 'text-yellow-500'
        }
      case 'info':
      default:
        return {
          bgColor: 'bg-blue-500',
          textColor: 'text-blue-800',
          borderColor: 'border-blue-200',
          icon: faInfoCircle,
          iconColor: 'text-blue-500'
        }
    }
  }

  if (notifications.length === 0) return null

  return (
    <div className="fixed top-4 right-4 z-[9999] space-y-3 max-w-md">
      {notifications.map((notification) => {
        const styles = getNotificationStyles(notification.type)
        
        return (
          <div
            key={notification.id}
            className={`
              ${styles.bgColor} ${styles.textColor} ${styles.borderColor}
              bg-opacity-10 backdrop-blur-lg border rounded-2xl shadow-2xl 
              p-4 flex items-center gap-3 transform transition-all duration-500 ease-out
              animate-in slide-in-from-right-5 fade-in
            `}
          >
            <div className={`flex-shrink-0 ${styles.iconColor}`}>
              <FontAwesomeIcon icon={styles.icon} className="text-xl" />
            </div>
            
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium leading-5 break-words">
                {notification.message}
              </p>
            </div>
            
            <button
              onClick={() => removeNotification(notification.id)}
              className={`
                flex-shrink-0 ${styles.textColor} hover:${styles.bgColor} 
                hover:bg-opacity-20 rounded-lg p-1 transition-colors duration-200
              `}
            >
              <FontAwesomeIcon icon={faTimes} className="text-sm" />
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default Notification
