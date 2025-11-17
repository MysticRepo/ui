import React from 'react'
import { cn } from '../../utils/cn'

/**
 * Luma Weather Widget Component
 * Extracted from https://luma.com/style-guide/weather
 */

export interface WeatherCondition {
  id: string
  label: string
  temperature?: number
  icon?: React.ReactNode
}

export interface WeatherWidgetProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Current weather condition */
  condition: WeatherCondition
  /** Show day/night icons */
  showDayNight?: boolean
}

export const WeatherWidget = React.forwardRef<HTMLDivElement, WeatherWidgetProps>(
  ({ className, condition, showDayNight = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'p-4 bg-white rounded-lg border border-gray-200',
          'hover:shadow-md transition-shadow',
          className
        )}
        {...props}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">{condition.label}</p>
            {condition.temperature !== undefined && (
              <p className="text-3xl font-bold text-gray-900 mt-1">
                {condition.temperature}°
              </p>
            )}
          </div>
          {condition.icon && (
            <div className="flex-shrink-0">
              {condition.icon}
            </div>
          )}
        </div>
        {showDayNight && (
          <div className="flex gap-2 mt-3 pt-3 border-t border-gray-200">
            <div className="flex-1 p-2 border border-dashed border-gray-300 rounded">
              <p className="text-xs text-gray-500">Day</p>
            </div>
            <div className="flex-1 p-2 border border-dashed border-gray-300 rounded">
              <p className="text-xs text-gray-500">Night</p>
            </div>
          </div>
        )}
      </div>
    )
  }
)

WeatherWidget.displayName = 'WeatherWidget'

export default WeatherWidget
