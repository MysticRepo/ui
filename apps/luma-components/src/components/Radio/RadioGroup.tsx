import React from 'react'
import { cn } from '../../utils/cn'

/**
 * Luma RadioGroup Component
 * Container for Radio buttons with shared state
 */

export interface RadioGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Selected value */
  value?: string
  /** Default selected value (uncontrolled) */
  defaultValue?: string
  /** Change handler */
  onChange?: (value: string) => void
  /** Group name for radio buttons */
  name?: string
  /** Disabled state for all radios */
  disabled?: boolean
  /** Layout direction */
  orientation?: 'horizontal' | 'vertical'
  /** Children (Radio components) */
  children: React.ReactNode
}

export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      className,
      value: controlledValue,
      defaultValue,
      onChange,
      name,
      disabled,
      orientation = 'vertical',
      children,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue)
    const value = controlledValue ?? internalValue

    const handleChange = (newValue: string) => {
      if (!controlledValue) {
        setInternalValue(newValue)
      }
      onChange?.(newValue)
    }

    return (
      <div
        ref={ref}
        role="radiogroup"
        className={cn(
          'flex gap-4',
          orientation === 'vertical' ? 'flex-col' : 'flex-row flex-wrap',
          className
        )}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement<any>, {
              name: name || 'radio-group',
              checked: child.props.value === value,
              onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                handleChange(child.props.value)
                child.props.onChange?.(e)
              },
              disabled: disabled || child.props.disabled,
            })
          }
          return child
        })}
      </div>
    )
  }
)

RadioGroup.displayName = 'RadioGroup'

export default RadioGroup
