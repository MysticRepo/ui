import React from 'react'
import { cn } from '../../utils/cn'

/**
 * Luma Slider Component
 * Extracted from https://luma.com/style-guide/controls
 */

export interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** Label */
  label?: string
  /** Show value display */
  showValue?: boolean
  /** Size variant */
  size?: 'sm' | 'md' | 'lg'
}

export const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  ({ className, label, showValue, size = 'md', id, value, min = 0, max = 100, ...props }, ref) => {
    const sliderId = id || `slider-${Math.random().toString(36).substr(2, 9)}`

    const sizeClasses = {
      sm: 'h-1',
      md: 'h-2',
      lg: 'h-3',
    }

    return (
      <div className="flex flex-col gap-2 w-full">
        {(label || showValue) && (
          <div className="flex justify-between items-center">
            {label && (
              <label htmlFor={sliderId} className="text-sm font-medium text-gray-700">
                {label}
              </label>
            )}
            {showValue && (
              <span className="text-sm text-gray-600">{value}</span>
            )}
          </div>
        )}
        <input
          ref={ref}
          id={sliderId}
          type="range"
          value={value}
          min={min}
          max={max}
          className={cn(
            'w-full appearance-none bg-transparent cursor-pointer',
            '[&::-webkit-slider-track]:rounded-full [&::-webkit-slider-track]:bg-gray-300',
            '[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5',
            '[&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-600',
            '[&::-webkit-slider-thumb]:shadow-sm [&::-webkit-slider-thumb]:cursor-pointer',
            '[&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:hover:bg-blue-700',
            '[&::-moz-range-track]:rounded-full [&::-moz-range-track]:bg-gray-300',
            '[&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5',
            '[&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-blue-600',
            '[&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:shadow-sm',
            `[&::-webkit-slider-track]:${sizeClasses[size]}`,
            `[&::-moz-range-track]:${sizeClasses[size]}`,
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2',
            className
          )}
          {...props}
        />
      </div>
    )
  }
)

Slider.displayName = 'Slider'

export default Slider
