import React from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    loading = false, 
    disabled,
    children, 
    ...props 
  }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
    
    const variants = {
      primary: 'bg-primary text-white hover:bg-primary/90 focus:ring-primary/50 shadow-sm',
      secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500/50 shadow-sm',
      outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary/50',
      ghost: 'text-gray-700 hover:bg-gray-100 hover:text-primary focus:ring-gray-300',
      link: 'text-primary hover:text-primary/80 underline-offset-4 hover:underline p-0 h-auto font-normal',
    };

    const sizes = {
      sm: 'h-8 px-3 text-xs rounded',
      md: 'h-10 px-4 py-2 text-sm rounded-md',
      lg: 'h-12 px-6 py-3 text-base rounded-md',
      xl: 'h-14 px-8 py-4 text-lg rounded-lg',
    };

    return (
      <button
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          loading && 'cursor-not-allowed',
          className
        )}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;