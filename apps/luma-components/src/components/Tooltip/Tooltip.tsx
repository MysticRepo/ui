import React from 'react'
import { cn } from '../../utils/cn'

/**
 * Luma Tooltip Component
 * Simple tooltip without external dependencies
 * For production, consider using @floating-ui/react for advanced positioning
 */

export interface TooltipProps {
  /** Content to show in tooltip */
  content: React.ReactNode
  /** Children (trigger element) */
  children: React.ReactNode
  /** Tooltip placement */
  placement?: 'top' | 'right' | 'bottom' | 'left'
  /** Tooltip variant */
  variant?: 'default' | 'warning' | 'error'
  /** Delay before showing (ms) */
  delay?: number
  /** Custom className */
  className?: string
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  placement = 'top',
  variant = 'default',
  delay = 200,
  className,
}) => {
  const [isVisible, setIsVisible] = React.useState(false)
  const timeoutRef = React.useRef<NodeJS.Timeout>()

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true)
    }, delay)
  }

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsVisible(false)
  }

  const variantClasses = {
    default: 'bg-gray-900 text-white',
    warning: 'bg-yellow-600 text-white',
    error: 'bg-red-600 text-white',
  }

  const placementClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
  }

  const arrowClasses = {
    top: 'top-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent',
    right: 'right-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent',
    bottom: 'bottom-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent',
    left: 'left-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent',
  }

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isVisible && (
        <div
          role="tooltip"
          className={cn(
            'absolute z-50 px-3 py-1.5 text-sm rounded-md shadow-lg whitespace-nowrap',
            'animate-in fade-in-0 zoom-in-95',
            variantClasses[variant],
            placementClasses[placement],
            className
          )}
        >
          {content}
          <div
            className={cn(
              'absolute w-0 h-0 border-4',
              arrowClasses[placement],
              variant === 'default' && 'border-gray-900',
              variant === 'warning' && 'border-yellow-600',
              variant === 'error' && 'border-red-600'
            )}
          />
        </div>
      )}
    </div>
  )
}

Tooltip.displayName = 'Tooltip'

export default Tooltip
