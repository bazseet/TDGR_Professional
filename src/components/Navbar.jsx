import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { navLinks } from '../data/navigation';
import { business } from '../data/business';
import { getPhoneLink, getWhatsAppLink, scrollToTop } from '../utils/helpers';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    scrollToTop();
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="flex items-center justify-center h-10 w-14 lg:h-12 lg:w-16 overflow-hidden">
              <img src="/till-dawn-logo.png" alt="Till Dawn Global Resources Ltd." className="w-full h-full object-contain" />
            </div>
            <div className="hidden sm:block">
              <p className="text-xs font-bold text-td-red leading-tight tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>TILL DAWN</p>
              <p className="text-[10px] text-td-charcoal/70 leading-tight">DRIVING ACADEMY</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'text-td-red bg-td-red/5'
                    : 'text-td-charcoal hover:text-td-red hover:bg-td-red/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={getPhoneLink()}
              className="flex items-center gap-2 text-sm text-td-charcoal hover:text-td-red transition-colors"
            >
              <Phone size={16} />
              <span>{business.phone}</span>
            </a>
            <Link
              to="/booking"
              className="bg-td-red hover:bg-td-red-dark text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Book Now
            </Link>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <Link
              to="/booking"
              className="bg-td-red text-white px-3 py-1.5 rounded-lg text-xs font-semibold"
            >
              Book Now
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-td-charcoal"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all ${
                  location.pathname === link.path
                    ? 'text-td-red bg-td-red/5'
                    : 'text-td-charcoal hover:text-td-red hover:bg-td-red/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t pt-3 mt-3 space-y-2">
              <a
                href={getPhoneLink()}
                className="flex items-center gap-2 px-4 py-3 text-sm text-td-charcoal"
              >
                <Phone size={16} />
                Call {business.phone}
              </a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-3 rounded-lg text-sm font-semibold"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
