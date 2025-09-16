import React from 'react'

const LoadingSpinner = ({ 
  size = 'md', 
  color = 'eco', 
  text = '', 
  fullScreen = false,
  className = ''
}) => {
  const sizeClasses = {
    'sm': 'w-4 h-4',
    'md': 'w-8 h-8', 
    'lg': 'w-12 h-12',
    'xl': 'w-16 h-16'
  }

  const colorClasses = {
    'eco': 'border-eco-500',
    'ocean': 'border-ocean-500',
    'gray': 'border-gray-500',
    'white': 'border-white'
  }

  const textSizeClasses = {
    'sm': 'text-sm',
    'md': 'text-base',
    'lg': 'text-lg', 
    'xl': 'text-xl'
  }

  const spinnerElement = (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className={`relative ${sizeClasses[size]}`}>
        {/* Outer ring */}
        <div className={`absolute inset-0 border-4 border-gray-200 rounded-full`}></div>
        {/* Spinning ring */}
        <div className={`absolute inset-0 border-4 border-transparent ${colorClasses[color]} border-t-4 rounded-full animate-spin`}></div>
        {/* Inner pulse */}
        <div className={`absolute inset-2 bg-gradient-to-r from-${color}-400 to-${color}-600 rounded-full animate-pulse opacity-20`}></div>
      </div>
      
      {text && (
        <div className={`font-medium text-gray-600 ${textSizeClasses[size]} animate-pulse`}>
          {text}
        </div>
      )}
    </div>
  )

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl shadow-card-lg p-8 border border-white/30">
          {spinnerElement}
        </div>
      </div>
    )
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      {spinnerElement}
    </div>
  )
}

// Skeleton loader component
export const SkeletonLoader = ({ 
  width = 'w-full', 
  height = 'h-4', 
  rounded = 'rounded',
  className = '' 
}) => {
  return (
    <div className={`${width} ${height} ${rounded} bg-gray-200 loading-shimmer ${className}`}>
    </div>
  )
}

// Card skeleton
export const CardSkeleton = ({ className = '' }) => {
  return (
    <div className={`bg-white rounded-xl shadow-card p-4 animate-pulse ${className}`}>
      <SkeletonLoader height="h-32" rounded="rounded-lg" className="mb-3" />
      <SkeletonLoader height="h-4" className="mb-2" />
      <SkeletonLoader height="h-4" width="w-3/4" className="mb-2" />
      <SkeletonLoader height="h-3" width="w-1/2" />
    </div>
  )
}

export default LoadingSpinner
