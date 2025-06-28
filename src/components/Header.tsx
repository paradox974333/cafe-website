import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Coffee } from 'lucide-react';
import LiveStatus from './LiveStatus';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const headerBg = !isHomePage 
    ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-cream-200' 
    : isScrolled 
      ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-cream-200' 
      : 'bg-transparent';

  const logoColor = !isHomePage || isScrolled ? 'text-coffee-600' : 'text-white';
  const logoSubColor = !isHomePage || isScrolled ? 'text-coffee-500' : 'text-cream-100';
  const navTextColor = !isHomePage || isScrolled ? 'text-coffee-700' : 'text-white';
  const navActiveColor = !isHomePage || isScrolled ? 'text-coffee-600' : 'text-cream-100';
  const mobileButtonColor = !isHomePage || isScrolled 
    ? 'text-coffee-800 hover:bg-coffee-50' 
    : 'text-white hover:bg-white/10';

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${headerBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 lg:py-4">
          <Link to="/" className="flex items-center space-x-2 lg:space-x-3 group">
            <div className="relative">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-coffee-600 to-coffee-700 rounded-xl lg:rounded-2xl flex items-center justify-center shadow-medium group-hover:shadow-glow transition-all duration-300">
                <Coffee className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 lg:w-3 lg:h-3 bg-accent-500 rounded-full animate-pulse-soft shadow-glow-accent"></div>
            </div>
            <div>
              <h1 className={`text-sm lg:text-lg font-display font-bold transition-colors duration-300 ${
                !isHomePage || isScrolled ? 'text-coffee-800' : 'text-white'
              }`}>
                It's Brown & Roasted
              </h1>
              <p className={`text-xs transition-colors duration-300 ${logoSubColor}`}>
                Café & Restaurant
              </p>
            </div>
          </Link>

          {/* Live Status - Desktop */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-3 py-2 border border-white/20">
              <LiveStatus 
                className={`transition-colors duration-300 ${
                  !isHomePage || isScrolled ? 'text-coffee-700' : 'text-white'
                }`}
                size="sm"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-3 lg:px-4 py-2 font-medium transition-all duration-300 rounded-xl hover:bg-white/10 text-sm lg:text-base ${
                  location.pathname === item.href
                    ? navActiveColor
                    : navTextColor
                } group`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-coffee-500 to-accent-500 transition-all duration-300 group-hover:w-3/4 ${
                  location.pathname === item.href ? 'w-3/4' : ''
                }`}></span>
              </Link>
            ))}
            <Link
              to="/order"
              className="ml-2 lg:ml-4 bg-gradient-to-r from-coffee-600 to-coffee-700 hover:from-coffee-700 hover:to-coffee-800 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-xl lg:rounded-2xl font-semibold transition-all duration-300 hover:shadow-glow transform hover:scale-105 active:scale-95 text-sm lg:text-base"
            >
              Order Online
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 lg:p-3 rounded-xl lg:rounded-2xl transition-all duration-300 ${mobileButtonColor}`}
            >
              {isOpen ? <X className="w-5 h-5 lg:w-6 lg:h-6" /> : <Menu className="w-5 h-5 lg:w-6 lg:h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-strong border-b border-cream-200 animate-slide-up">
            <div className="px-4 py-4 space-y-3">
              {/* Live Status - Mobile */}
              <div className="pb-3 border-b border-coffee-100">
                <div className="bg-coffee-50 rounded-xl p-3">
                  <LiveStatus className="text-coffee-700" size="sm" compact />
                </div>
              </div>
              
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 px-4 font-medium transition-all duration-300 rounded-xl ${
                    location.pathname === item.href
                      ? 'text-coffee-600 bg-coffee-50 border-l-4 border-coffee-500'
                      : 'text-coffee-700 hover:text-coffee-500 hover:bg-coffee-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/order"
                onClick={() => setIsOpen(false)}
                className="block w-full bg-gradient-to-r from-coffee-600 to-coffee-700 hover:from-coffee-700 hover:to-coffee-800 text-white text-center py-3 rounded-xl font-semibold transition-all duration-300 shadow-medium"
              >
                Order Online
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;