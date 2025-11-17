import React from 'react'
import { cn } from '../../utils/cn'

/**
 * Luma Timeline Component
 * Extracted from https://luma.com/style-guide/timeline
 */

export interface TimelineItemProps {
  /** Item title */
  title: React.ReactNode
  /** Item description/content */
  description?: React.ReactNode
  /** Icon or marker */
  icon?: React.ReactNode
  /** Timestamp */
  timestamp?: string
  /** Whether this is the last item */
  isLast?: boolean
}

export interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Timeline items */
  items: TimelineItemProps[]
  /** Orientation */
  orientation?: 'vertical' | 'horizontal'
}

export const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
  ({ className, items, orientation = 'vertical', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'relative',
          orientation === 'vertical' ? 'space-y-8' : 'flex space-x-8',
          className
        )}
        {...props}
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <div
              key={index}
              className={cn(
                'relative',
                orientation === 'vertical' && 'pl-8'
              )}
            >
              {/* Connector Line */}
              {!isLast && (
                <div
                  className={cn(
                    'absolute bg-gray-300',
                    orientation === 'vertical'
                      ? 'left-2 top-6 bottom-0 w-0.5 -mb-8'
                      : 'left-full top-1/2 h-0.5 w-8'
                  )}
                />
              )}

              {/* Icon/Marker */}
              <div
                className={cn(
                  'absolute flex items-center justify-center bg-white border-2 border-blue-600 rounded-full',
                  orientation === 'vertical'
                    ? 'left-0 top-0 w-5 h-5'
                    : 'top-0 left-1/2 -translate-x-1/2 w-5 h-5'
                )}
              >
                {item.icon || (
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                )}
              </div>

              {/* Content */}
              <div className={cn(orientation === 'horizontal' && 'mt-8')}>
                {item.timestamp && (
                  <time className="text-xs text-gray-500 font-medium">
                    {item.timestamp}
                  </time>
                )}
                <h3 className="text-sm font-semibold text-gray-900 mt-1">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                )}
              </div>
            </div>
          )
        })}
      </div>
    )
  }
)

Timeline.displayName = 'Timeline'

export default Timeline
