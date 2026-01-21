import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'white';
  to?: string;
  onClick?: () => void;
  className?: string;
  icon?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  to, 
  onClick, 
  className = '',
  icon = false
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-base font-medium transition-all duration-300 rounded-sm group";
  
  const variants = {
    primary: "bg-green-850 text-white hover:bg-green-950 shadow-lg hover:shadow-xl border border-transparent",
    outline: "bg-transparent text-green-850 border-2 border-green-850 hover:bg-green-50",
    white: "bg-white text-green-950 hover:bg-stone-100 shadow-md border border-transparent"
  };

  const content = (
    <>
      {children}
      {icon && <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {content}
    </button>
  );
};

export default Button;