import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  // Agregamos 'group' aquí para que las flechas animadas funcionen siempre
  "group inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        
        // 👇 TU NUEVA VARIANTE GLOW
        // Tiene fondo transparente (bg-osa-white/0), borde semitransparente inicial y la sombra blanca al hover
        glow: "bg-white/10 text-grey-300 border border-white/15 hover:border-white/40 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300",
      },
      size: {
        // 👇 TAMAÑO LG PERSONALIZADO
        // Aquí metemos el 'rounded-full' y el 'py-6' para que sea idéntico a tu snippet
        lg: "h-6 px-8 py-6 rounded-full text-base", 
        
        default: "h-10 px-4 rounded-full py-2 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]",
        nav: "h-10 px-4 rounded-full py-2 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]",
        icon: "h-10 w-10",
        
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }