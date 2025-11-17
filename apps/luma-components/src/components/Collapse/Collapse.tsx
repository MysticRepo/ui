import React from 'react'
import { cn } from '../../utils/cn'

/**
 * Luma Collapse Component
 * Extracted from https://luma.com/style-guide/collapse
 */

export interface CollapseProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Whether the collapse is open */
  open?: boolean
  /** Default open state (uncontrolled) */
  defaultOpen?: boolean
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void
  /** Trigger element (button/header) */
  trigger: React.ReactNode
  /** Content to collapse */
  children: React.ReactNode
  /** Show chevron icon */
  showChevron?: boolean
}

export const Collapse = React.forwardRef<HTMLDivElement, CollapseProps>(
  (
    {
      className,
      open: controlledOpen,
      defaultOpen = false,
      onOpenChange,
      trigger,
      children,
      showChevron = true,
      ...props
    },
    ref
  ) => {
    const [internalOpen, setInternalOpen] = React.useState(defaultOpen)
    const open = controlledOpen ?? internalOpen

    const contentRef = React.useRef<HTMLDivElement>(null)
    const [height, setHeight] = React.useState<number | undefined>(open ? undefined : 0)

    React.useEffect(() => {
      if (!contentRef.current) return

      if (open) {
        const contentHeight = contentRef.current.scrollHeight
        setHeight(contentHeight)
        const timeout = setTimeout(() => setHeight(undefined), 300)
        return () => clearTimeout(timeout)
      } else {
        setHeight(contentRef.current.scrollHeight)
        setTimeout(() => setHeight(0), 10)
      }
    }, [open])

    const handleToggle = () => {
      const newOpen = !open
      if (controlledOpen === undefined) {
        setInternalOpen(newOpen)
      }
      onOpenChange?.(newOpen)
    }

    return (
      <div ref={ref} className={cn('border border-gray-200 rounded-md', className)} {...props}>
        <button
          type="button"
          onClick={handleToggle}
          className="flex w-full items-center justify-between px-4 py-3 text-left hover:bg-gray-50 transition-colors"
        >
          <span className="font-medium text-gray-900">{trigger}</span>
          {showChevron && (
            <svg
              className={cn(
                'h-5 w-5 text-gray-500 transition-transform duration-200',
                open && 'rotate-180'
              )}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </button>
        <div
          ref={contentRef}
          style={{ height }}
          className={cn(
            'overflow-hidden transition-all duration-300 ease-in-out',
            !open && height === 0 && 'invisible'
          )}
        >
          <div className="px-4 py-3 border-t border-gray-200">
            {children}
          </div>
        </div>
      </div>
    )
  }
)

Collapse.displayName = 'Collapse'

export default Collapse
