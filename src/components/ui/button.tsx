import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
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
        
        // 👇 VARIANTE GLOW (Adaptada)
        // Light: Fondo gris muy suave, texto oscuro, sombra negra sutil.
        // Dark: Fondo transparente blanco, texto gris claro, sombra blanca neón.
        glow: `
            bg-gray-100/50 text-gray-700 border border-gray-300 hover:border-gray-500 hover:shadow-[0_0_30px_rgba(0,0,0,0.1)] 
            dark:bg-white/10 dark:text-gray-300 dark:border-white/15 dark:hover:border-white/40 dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] 
            transition-all duration-300
        `,

        // 👇 VARIANTE GHABLEMOS (Primary Tech)
        // Light: Fondo Teal muy suave, texto Teal oscuro, borde Teal.
        // Dark: Fondo Teal oscuro, texto claro, borde y sombra Teal neón.
        ghablemos: `
            bg-teal-50 text-teal-900 border border-teal-200 hover:bg-teal-100 hover:border-teal-300 hover:shadow-[0_0_30px_rgba(45,212,191,0.2)]
            dark:bg-teal-900/40 dark:text-gray-200 dark:border-teal-500/30 dark:hover:border-teal-400/60 dark:hover:shadow-[0_0_30px_rgba(45,212,191,0.4)] 
            transition-all duration-300
        `,

        // 👇 VARIANTE GFORM (Formularios)
        // Light: Transparente, texto oscuro, borde gris visible.
        // Dark: Transparente, texto claro, borde blanco sutil.
        gform: `
            bg-transparent text-gray-700 border border-gray-300 hover:border-gray-800 hover:shadow-[0_0_20px_rgba(0,0,0,0.1)]
            dark:bg-white/0 dark:text-gray-300 dark:border-white/15 dark:hover:border-white/40 dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] 
            transition-all duration-300
        `,
      },
      size: {
        // 👇 TAMAÑO LG
        lg: "h-6 px-5 py-5 rounded-full text-base", 
        
        // 👇 TAMAÑOS CON SOMBRA ADAPTATIVA
        // Hemos cambiado la sombra fija blanca por una sombra que cambia según el tema
        default: "h-10 px-4 rounded-full py-2 hover:shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]",
        nav: "h-10 px-4 rounded-full py-2 hover:shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]",
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