import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: "default" | "rounded"
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-[hsl(var(--placeholder-color))] focus-visible:outline-none focus-visible:border-[hsl(var(--input-focus-border-color))] focus-visible:shadow-[var(--input-focus-box-shadow)] disabled:cursor-not-allowed disabled:bg-[hsl(var(--disabled-background-color))] disabled:opacity-50 transition-[var(--transition)]",
          variant === "rounded" && "rounded-lg",
          variant === "default" && "rounded-md",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
