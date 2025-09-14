import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-[#1d2228]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:text-[#1d2228]",
        outline: "border border-input bg-background hover:bg-accent hover:text-[#1d2228]",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:text-[#1d2228]",
        ghost: "hover:bg-accent hover:text-[#1d2228]",
        link: "text-primary underline-offset-4 hover:underline hover:text-[#1d2228]",
        hero: "bg-accent text-[#1d2228] shadow-accent hover:bg-accent/90 hover:shadow-lg transform hover:-translate-y-0.5 hover:text-[#1d2228]",
        premium: "bg-gradient-accent text-[#1d2228] shadow-premium hover:shadow-accent transform hover:-translate-y-1 hover:text-[#1d2228]",
        automotive: "bg-navy-medium text-primary-foreground border border-accent/20 hover:bg-navy-light hover:border-accent/40 shadow-card hover:text-[#1d2228]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);
