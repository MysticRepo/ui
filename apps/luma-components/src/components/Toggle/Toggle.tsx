import React from 'react'
import { cn } from '../../utils/cn'

/**
 * Luma Toggle/Switch Component
 * Extracted from https://luma.com/style-guide/controls
 */

export interface ToggleProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** Label for the toggle */
  label?: React.ReactNode
  /** Description text */
  description?: string
  /** Size variant */
  size?: 'sm' | 'md' | 'lg'
  /** Loading state */
  loading?: boolean
}

export const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(
  ({ className, label, description, size = 'md', loading, checked, id, ...props }, ref) => {
    const toggleId = id || `toggle-${Math.random().toString(36).substr(2, 9)}`

    const sizeClasses = {
      sm: {
        switch: 'h-5 w-9',
        thumb: 'h-4 w-4',
        translate: 'translate-x-4',
      },
      md: {
        switch: 'h-6 w-11',
        thumb: 'h-5 w-5',
        translate: 'translate-x-5',
      },
      lg: {
        switch: 'h-7 w-14',
        thumb: 'h-6 w-6',
        translate: 'translate-x-7',
      },
    }

    const sizes = sizeClasses[size]

    return (
      <div className="flex items-start gap-3">
        <label className={cn('relative inline-flex items-center cursor-pointer', props.disabled && 'opacity-50 cursor-not-allowed')}>
          <input
            ref={ref}
            id={toggleId}
            type="checkbox"
            className="sr-only peer"
            checked={checked}
            {...props}
          />
          <div
            className={cn(
              sizes.switch,
              'rounded-full transition-colors',
              'peer-focus:ring-2 peer-focus:ring-offset-2 peer-focus:ring-blue-500',
              checked
                ? 'bg-blue-600 peer-checked:bg-blue-600'
                : 'bg-gray-300',
              'peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
              className
            )}
          >
            <span
              className={cn(
                sizes.thumb,
                'absolute top-0.5 left-0.5 bg-white rounded-full transition-transform shadow-sm',
                checked && sizes.translate,
                loading && 'animate-pulse'
              )}
            />
          </div>
        </label>
        {(label || description) && (
          <div className="flex flex-col gap-0.5">
            {label && (
              <label
                htmlFor={toggleId}
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

Toggle.displayName = 'Toggle'

export default Toggle
