import React from 'react'
import { cn } from '../../utils/cn'

/**
 * Luma Event Card Component
 * Extracted from https://luma.com/style-guide/events
 */

export interface EventCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Event title */
  title: string
  /** Event description */
  description?: string
  /** Event date/time */
  datetime?: string
  /** Event location */
  location?: string
  /** Event image */
  image?: string
  /** RSVP button action */
  onRSVP?: () => void
  /** RSVP status */
  rsvpStatus?: 'going' | 'interested' | 'not-going' | null
}

export const EventCard = React.forwardRef<HTMLDivElement, EventCardProps>(
  (
    {
      className,
      title,
      description,
      datetime,
      location,
      image,
      onRSVP,
      rsvpStatus,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'bg-white rounded-lg border border-gray-200 overflow-hidden',
          'hover:shadow-lg transition-shadow',
          className
        )}
        {...props}
      >
        {image && (
          <div className="aspect-video w-full overflow-hidden bg-gray-100">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>

          {datetime && (
            <p className="text-sm text-gray-600 mt-2 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {datetime}
            </p>
          )}

          {location && (
            <p className="text-sm text-gray-600 mt-1 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {location}
            </p>
          )}

          {description && (
            <p className="text-sm text-gray-700 mt-3 line-clamp-2">{description}</p>
          )}

          {onRSVP && (
            <button
              onClick={onRSVP}
              className={cn(
                'mt-4 w-full px-4 py-2 rounded-md font-medium transition-colors',
                rsvpStatus === 'going'
                  ? 'bg-green-600 text-white hover:bg-green-700'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              )}
            >
              {rsvpStatus === 'going' ? 'Going' : 'RSVP'}
            </button>
          )}
        </div>
      </div>
    )
  }
)

EventCard.displayName = 'EventCard'

export default EventCard
