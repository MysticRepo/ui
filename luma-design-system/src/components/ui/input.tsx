import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const inputVariants = cva(
  "flex w-full rounded-md bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[hsl(var(--placeholder-color))] focus-visible:outline-none focus-visible:border-[hsl(var(--input-focus-border-color))] focus-visible:shadow-[var(--input-focus-box-shadow)] focus-visible:bg-[hsl(var(--input-focus-bg-color))] disabled:cursor-not-allowed disabled:bg-[hsl(var(--disabled-background-color))] disabled:opacity-50 transition-[var(--transition)]",
  {
    variants: {
      variant: {
        default: "border border-input",
        filled: "bg-muted border-0",
        rounded: "rounded-full border border-input",
        error: "border-destructive focus-visible:border-destructive",
      },
      inputSize: {
        default: "h-[var(--input-height)] px-3 py-2",
        sm: "h-8 px-2 py-1 text-xs",
        lg: "h-12 px-4 py-3",
      },
    },
    defaultVariants: {
      variant: "default",
      inputSize: "default",
    },
  }
)

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, inputSize, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, inputSize, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input, inputVariants }
