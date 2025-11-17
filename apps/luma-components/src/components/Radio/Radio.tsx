import React from 'react'
import { cn } from '../../utils/cn'

/**
 * Luma Radio Component
 * Extracted from https://luma.com/style-guide/controls
 */

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** Label for the radio button */
  label?: React.ReactNode
  /** Description text */
  description?: string
  /** Error state */
  error?: boolean
  /** Size variant */
  size?: 'sm' | 'md' | 'lg'
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, description, error, size = 'md', id, ...props }, ref) => {
    const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`

    const sizeClasses = {
      sm: 'h-3.5 w-3.5',
      md: 'h-4 w-4',
      lg: 'h-5 w-5',
    }

    return (
      <div className="flex items-start gap-3">
        <div className="flex h-5 items-center">
          <input
            ref={ref}
            id={radioId}
            type="radio"
            className={cn(
              'rounded-full border transition-colors',
              'focus:ring-2 focus:ring-offset-2',
              sizeClasses[size],
              error
                ? 'border-red-600 text-red-600 focus:ring-red-500'
                : 'border-gray-300 text-blue-600 focus:ring-blue-500',
              'disabled:cursor-not-allowed disabled:opacity-50',
              className
            )}
            {...props}
          />
        </div>
        {(label || description) && (
          <div className="flex flex-col gap-0.5">
            {label && (
              <label
                htmlFor={radioId}
                className="text-sm font-medium text-gray-900 cursor-pointer"
              >
                {label}
              </label>
            )}
            {description && (
              <p className="text-sm text-gray-500">{description}</p>
            )}
          </div>
        )}
      </div>
    )
  }
)

Radio.displayName = 'Radio'

export default Radio
