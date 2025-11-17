import React from 'react'
import { cn } from '../../utils/cn'

/**
 * Luma Modal Component
 * Extracted from https://luma.com/style-guide/overlay
 *
 * Variants: alert, standard, panel, glass, longContent, multiStep
 */

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Whether modal is open */
  open?: boolean
  /** Callback when modal should close */
  onClose?: () => void
  /** Modal title */
  title?: React.ReactNode
  /** Modal content */
  children: React.ReactNode
  /** Footer content */
  footer?: React.ReactNode
  /** Modal variant */
  variant?: 'standard' | 'alert' | 'panel' | 'glass' | 'longContent' | 'multiStep'
  /** Modal size */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  /** Close on backdrop click */
  closeOnBackdropClick?: boolean
  /** Close on escape key */
  closeOnEscape?: boolean
  /** Show close button */
  showCloseButton?: boolean
}

export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      className,
      open = false,
      onClose,
      title,
      children,
      footer,
      variant = 'standard',
      size = 'md',
      closeOnBackdropClick = true,
      closeOnEscape = true,
      showCloseButton = true,
      ...props
    },
    ref
  ) => {
    React.useEffect(() => {
      if (!open) return

      const handleEscape = (e: KeyboardEvent) => {
        if (closeOnEscape && e.key === 'Escape') {
          onClose?.()
        }
      }

      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'

      return () => {
        document.removeEventListener('keydown', handleEscape)
        document.body.style.overflow = ''
      }
    }, [open, closeOnEscape, onClose])

    if (!open) return null

    const sizeClasses = {
      sm: 'max-w-md',
      md: 'max-w-lg',
      lg: 'max-w-2xl',
      xl: 'max-w-4xl',
      full: 'max-w-full m-4',
    }

    const variantClasses = {
      standard: 'bg-white',
      alert: 'bg-white border-l-4 border-red-500',
      panel: 'bg-white h-full max-h-screen',
      glass: 'bg-white/90 backdrop-blur-lg',
      longContent: 'bg-white max-h-[80vh] overflow-y-auto',
      multiStep: 'bg-white',
    }

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
      >
        {/* Backdrop */}
        <div
          className={cn(
            'absolute inset-0 bg-black transition-opacity',
            variant === 'glass' ? 'bg-opacity-30' : 'bg-opacity-50'
          )}
          onClick={() => closeOnBackdropClick && onClose?.()}
        />

        {/* Modal */}
        <div
          ref={ref}
          className={cn(
            'relative w-full rounded-lg shadow-xl',
            'animate-in fade-in-0 zoom-in-95 duration-200',
            sizeClasses[size],
            variantClasses[variant],
            variant === 'panel' && 'rounded-none',
            className
          )}
          {...props}
        >
          {/* Header */}
          {(title || showCloseButton) && (
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              {title && (
                <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
              )}
              {showCloseButton && (
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Close"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          )}

          {/* Content */}
          <div className={cn('p-6', variant === 'longContent' && 'max-h-96 overflow-y-auto')}>
            {children}
          </div>

          {/* Footer */}
          {footer && (
            <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200 bg-gray-50">
              {footer}
            </div>
          )}
        </div>
      </div>
    )
  }
)

Modal.displayName = 'Modal'

export default Modal
