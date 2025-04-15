/*import type React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link"
  size?: "default" | "sm" | "lg"
}

export function Button({ className = "", variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none data-[state=open]:bg-secondary data-[state=open]:text-secondary-foreground
        ${
          variant === "outline"
            ? "bg-transparent border border-input hover:bg-accent hover:text-accent-foreground"
            : variant === "ghost"
              ? "hover:bg-secondary hover:text-secondary-foreground"
              : variant === "link"
                ? "underline-offset-4 hover:underline text-primary"
                : "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90"
        }
        ${
          size === "sm"
            ? "px-3 py-1.5 rounded-md text-xs"
            : size === "lg"
              ? "px-8 py-3 rounded-md text-lg"
              : "px-4 py-2"
        }
        ${className}
      `}
      {...props}
    />
  )
}*/
