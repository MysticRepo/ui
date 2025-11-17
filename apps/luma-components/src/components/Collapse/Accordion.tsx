import React from 'react'
import { cn } from '../../utils/cn'

/**
 * Luma Accordion Component
 * Container for multiple Collapse panels with controlled behavior
 */

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Type of accordion - single allows one open at a time, multiple allows many */
  type?: 'single' | 'multiple'
  /** Default open items (by index) */
  defaultOpenItems?: number[]
  /** Controlled open items (by index) */
  openItems?: number[]
  /** Callback when open items change */
  onOpenItemsChange?: (items: number[]) => void
  /** Accordion items */
  items: Array<{
    trigger: React.ReactNode
    content: React.ReactNode
    disabled?: boolean
  }>
}

export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      className,
      type = 'single',
      defaultOpenItems = [],
      openItems: controlledOpenItems,
      onOpenItemsChange,
      items,
      ...props
    },
    ref
  ) => {
    const [internalOpenItems, setInternalOpenItems] = React.useState<number[]>(defaultOpenItems)
    const openItems = controlledOpenItems ?? internalOpenItems

    const handleToggle = (index: number) => {
      let newOpenItems: number[]

      if (type === 'single') {
        newOpenItems = openItems.includes(index) ? [] : [index]
      } else {
        newOpenItems = openItems.includes(index)
          ? openItems.filter((i) => i !== index)
          : [...openItems, index]
      }

      if (controlledOpenItems === undefined) {
        setInternalOpenItems(newOpenItems)
      }
      onOpenItemsChange?.(newOpenItems)
    }

    return (
      <div ref={ref} className={cn('space-y-2', className)} {...props}>
        {items.map((item, index) => {
          const isOpen = openItems.includes(index)
          const contentRef = React.useRef<HTMLDivElement>(null)
          const [height, setHeight] = React.useState<number | undefined>(
            isOpen ? undefined : 0
          )

          React.useEffect(() => {
            if (!contentRef.current) return

            if (isOpen) {
              const contentHeight = contentRef.current.scrollHeight
              setHeight(contentHeight)
              const timeout = setTimeout(() => setHeight(undefined), 300)
              return () => clearTimeout(timeout)
            } else {
              setHeight(contentRef.current.scrollHeight)
              setTimeout(() => setHeight(0), 10)
            }
          }, [isOpen])

          return (
            <div
              key={index}
              className="border border-gray-200 rounded-md overflow-hidden"
            >
              <button
                type="button"
                onClick={() => !item.disabled && handleToggle(index)}
                disabled={item.disabled}
                className={cn(
                  'flex w-full items-center justify-between px-4 py-3 text-left transition-colors',
                  item.disabled
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-gray-50'
                )}
              >
                <span className="font-medium text-gray-900">{item.trigger}</span>
                <svg
                  className={cn(
                    'h-5 w-5 text-gray-500 transition-transform duration-200',
                    isOpen && 'rotate-180'
                  )}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                ref={contentRef}
                style={{ height }}
                className={cn(
                  'overflow-hidden transition-all duration-300 ease-in-out',
                  !isOpen && height === 0 && 'invisible'
                )}
              >
                <div className="px-4 py-3 border-t border-gray-200">
                  {item.content}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
)

Accordion.displayName = 'Accordion'

export default Accordion
