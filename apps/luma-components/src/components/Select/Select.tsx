import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'

/**
 * Luma Select Component
 * Extracted from https://luma.com/style-guide/controls
 */

const selectVariants = cva(
  'w-full transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed appearance-none bg-white',
  {
    variants: {
      variant: {
        default:
          'border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100',
        filled: 'bg-gray-100 border border-transparent focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100',
        error: 'border-2 border-red-600 focus:border-red-700 focus:ring-2 focus:ring-red-100',
      },
      size: {
        sm: 'px-3 py-1.5 text-sm rounded pr-8',
        md: 'px-4 py-2 text-base rounded-md pr-10',
        lg: 'px-5 py-3 text-lg rounded-lg pr-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'>,
    VariantProps<typeof selectVariants> {
  /** Error message */
  error?: string
  /** Helper text */
  helperText?: string
  /** Label */
  label?: string
  /** Wrapper class name */
  wrapperClassName?: string
  /** Options */
  options?: Array<{ value: string; label: string; disabled?: boolean }>
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      variant,
      size,
      error,
      helperText,
      label,
      wrapperClassName,
      options,
      children,
      id,
      ...props
    },
    ref
  ) => {
    const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`
    const hasError = Boolean(error)

    return (
      <div className={cn('flex flex-col gap-1.5', wrapperClassName)}>
        {label && (
          <label
            htmlFor={selectId}
            className="text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            className={cn(
              selectVariants({ variant: hasError ? 'error' : variant, size }),
              className
            )}
            aria-invalid={hasError}
            aria-describedby={
              hasError ? `${selectId}-error` : helperText ? `${selectId}-helper` : undefined
            }
            {...props}
          >
            {options
              ? options.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    disabled={option.disabled}
                  >
                    {option.label}
                  </option>
                ))
              : children}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        {error && (
          <p id={`${selectId}-error`} className="text-sm text-red-600">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p id={`${selectId}-helper`} className="text-sm text-gray-500">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

Select.displayName = 'Select'

export default Select
export { selectVariants }
