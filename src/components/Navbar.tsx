import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '../lib/utils';

import { motion } from 'motion/react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent',
        isScrolled
          ? 'bg-dark/90 backdrop-blur-md border-white/10 py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src="https://i.imgur.com/hRwLjUb.png" 
              alt="bogs_details" 
              className="h-16 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  location.pathname === link.path ? 'text-primary' : 'text-gray-300'
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:9412048340" className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">
              <Phone className="w-4 h-4 text-primary" />
              <span>(941) 204-8340</span>
            </a>
            <Link
              to="/contact"
              className="bg-primary hover:bg-primary-light text-dark font-semibold px-5 py-2.5 rounded-sm transition-colors text-sm uppercase tracking-wider"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 bg-dark z-40 flex flex-col pt-24 px-6 transition-transform duration-300 ease-in-out md:hidden',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col gap-6 text-2xl font-heading font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'transition-colors',
                location.pathname === link.path ? 'text-primary' : 'text-white'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className={cn(
              'transition-colors',
              location.pathname === '/contact' ? 'text-primary' : 'text-white'
            )}
          >
            Contact
          </Link>
        </nav>
        
        <div className="mt-auto mb-12 flex flex-col gap-6">
          <a href="tel:9412048340" className="flex items-center gap-3 text-xl font-medium text-white">
            <div className="w-12 h-12 rounded-full bg-dark-gray-2 flex items-center justify-center">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <span>(941) 204-8340</span>
          </a>
          <Link
            to="/contact"
            className="bg-primary text-dark font-bold py-4 text-center rounded-sm uppercase tracking-wider text-lg"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
