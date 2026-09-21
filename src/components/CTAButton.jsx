import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CTAButton({ to, href, children, variant = 'primary', size = 'md', icon = false, className = '' }) {
  const baseClasses = `inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 ${
    size === 'lg' ? 'px-8 py-4 text-base' : 'px-6 py-3 text-sm'
  }`;

  const variants = {
    primary: 'bg-td-red hover:bg-td-red-dark text-white shadow-md hover:shadow-lg',
    secondary: 'border-2 border-td-red text-td-red hover:bg-td-red hover:text-white',
    white: 'bg-white text-td-red hover:bg-gray-100',
    dark: 'bg-td-dark text-white hover:bg-td-charcoal',
    yellow: 'bg-td-yellow text-td-dark hover:bg-td-yellow-light',
    green: 'bg-green-500 hover:bg-green-600 text-white'
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  const content = (
    <>
      {children}
      {icon && <ArrowRight size={18} />}
    </>
  );

  if (to) {
    return <Link to={to} className={classes}>{content}</Link>;
  }

  if (href) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>{content}</a>;
  }

  return <button className={classes}>{content}</button>;
}
