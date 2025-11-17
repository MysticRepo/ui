import React from 'react'
import { cn } from '../../utils/cn'

/**
 * Luma Dropdown Component
 * Simple dropdown without external dependencies
 */

export interface DropdownProps {
  /** Trigger element */
  trigger: React.ReactNode
  /** Dropdown content */
  children: React.ReactNode
  /** Alignment */
  align?: 'left' | 'right' | 'center'
  /** Custom className */
  className?: string
}

export const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  children,
  align = 'left',
  className,
}) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const dropdownRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  const alignClasses = {
    left: 'left-0',
    right: 'right-0',
    center: 'left-1/2 -translate-x-1/2',
  }

  return (
    <div ref={dropdownRef} className="relative inline-block">
      <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>
      {isOpen && (
        <div
          className={cn(
            'absolute top-full mt-2 z-50',
            'bg-white rounded-md shadow-lg border border-gray-200',
            'min-w-[12rem] py-1',
            'animate-in fade-in-0 zoom-in-95 duration-200',
            alignClasses[align],
            className
          )}
        >
          {children}
        </div>
      )}
    </div>
  )
}

export interface DropdownItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  /** Item content */
  children: React.ReactNode
  /** Icon to show before text */
  icon?: React.ReactNode
  /** Disabled state */
  disabled?: boolean
}

export const DropdownItem = React.forwardRef<HTMLButtonElement, DropdownItemProps>(
  ({ className, children, icon, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          'flex w-full items-center gap-2 px-4 py-2 text-sm text-left',
          'hover:bg-gray-100 transition-colors',
          disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
          className
        )}
        {...props}
      >
        {icon && <span className="flex-shrink-0">{icon}</span>}
        <span>{children}</span>
      </button>
    )
  }
)

DropdownItem.displayName = 'DropdownItem'

export const DropdownDivider: React.FC = () => {
  return <div className="my-1 border-t border-gray-200" />
}

Dropdown.displayName = 'Dropdown'

export default Dropdown
