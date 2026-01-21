import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';
import { NAV_ITEMS, COMPANY_NAME } from '../constants';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Determine if we should show the solid (scrolled) style
  // Always solid on non-home pages, or when scrolled on home page, or when menu is open
  const showSolid = !isHome || scrolled || isOpen;

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        showSolid ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className={`p-2 rounded-full transition-colors ${showSolid ? 'bg-green-50' : 'bg-white/20 backdrop-blur-sm'}`}>
              <Leaf className={`w-6 h-6 ${showSolid ? 'text-green-850' : 'text-white'}`} />
            </div>
            <span className={`font-serif text-2xl font-bold tracking-tight transition-colors ${
              showSolid ? 'text-green-950' : 'text-white'
            }`}>
              {COMPANY_NAME}
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-green-600 ${
                  location.pathname === item.path
                    ? 'text-green-600'
                    : showSolid ? 'text-slate-700' : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button 
              to="/contact" 
              variant={showSolid ? 'primary' : 'white'}
              className={!showSolid ? 'text-green-950 bg-white hover:bg-stone-100' : ''}
            >
              Offerte Aanvragen
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md focus:outline-none transition-colors ${
                showSolid ? 'text-slate-800' : 'text-white'
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-4 text-base font-medium border-b border-slate-50 ${
                  location.pathname === item.path
                    ? 'text-green-850 bg-green-50'
                    : 'text-slate-600 hover:text-green-850 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 px-3">
              <Button to="/contact" variant="primary" className="w-full justify-center">
                Offerte Aanvragen
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;