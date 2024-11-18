import * as React from "react"

import { cn } from "@/lib/utils"

interface InputProps extends React.ComponentProps<"input"> {
  hasValidationError?: boolean; // Prop to control the error state
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, hasValidationError = false,...props }, ref) => {
    const value = React.useState('')
    return (
      <input
        type={type}
        className={cn(
          `flex h-[45px] w-[300px] px-3 py-2  border border-input rounded-lg bg-input text-primary-foreground text-sm placeholder:text-primary-foreground placeholder:text-sm placeholder:pl-4 placeholder:font-normal  focus:placeholder-transparent focus:border-input focus:outline-none caret-white ${hasValidationError ? 'caret-error border-error focus:border-error' : ''}`,
          className
        )}
        ref={ref}
        {...props}
        onChange={(e) => console.log(e.target.value)}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
