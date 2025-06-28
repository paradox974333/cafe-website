import React from 'react';
import { Coffee, MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, ExternalLink } from 'lucide-react';

const Footer = () => {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=It's+Brown+%26+Roasted+Singasandra+Bangalore";

  return (
    <footer className="bg-gradient-to-br from-coffee-800 via-coffee-900 to-coffee-800 text-cream-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:gri-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-4 sm:space-y-6 animate-fade-in">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-coffee-600 to-coffee-700 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-medium">
                <Coffee className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-display font-bold text-white">
                  It's Brown & Roasted
                </h3>
                <p className="text-xs sm:text-sm text-coffee-300">Café & Restaurant</p>
              </div>
            </div>
            <p className="text-coffee-200 leading-relaxed text-sm sm:text-base">
              Experience the perfect blend of exceptional coffee, delicious food, and warm ambiance in the heart of Bangalore.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Twitter, href: "#", label: "Twitter" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  aria-label={social.label}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-coffee-700 hover:bg-coffee-600 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-300 hover:shadow-glow transform hover:scale-110"
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-coffee-300 hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-in-left">
            <h4 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6 font-display">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {['Home', 'Menu', 'About Us', 'Contact', 'Order Online'].map((link, index) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-coffee-200 hover:text-white transition-all duration-300 flex items-center group text-sm sm:text-base"
                  >
                    <span className="w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-3 sm:group-hover:w-4 mr-0 group-hover:mr-2"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-slide-in-right">
            <h4 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6 font-display">Contact Info</h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-2 sm:space-x-3 group">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-coffee-700 rounded-xl sm:rounded-2xl flex items-center justify-center mt-0.5 group-hover:bg-coffee-600 transition-colors duration-300">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-coffee-300" />
                </div>
                <div>
                  <a 
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-coffee-200 hover:text-white transition-colors duration-300 group text-sm sm:text-base"
                  >
                    Singasandra Industrial Area<br />
                    Kudlu Gate, Bangalore<br />
                    Karnataka 560068
                    <div className="flex items-center mt-1 sm:mt-2 text-coffee-300 group-hover:text-white">
                      <span className="text-xs mr-1">View on Google Maps</span>
                      <ExternalLink className="w-2 h-2 sm:w-3 sm:h-3" />
                    </div>
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 group">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-coffee-700 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:bg-coffee-600 transition-colors duration-300">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-coffee-300" />
                </div>
                <a 
                  href="tel:+919876543210"
                  className="text-coffee-200 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                >
                  +91 98765 43210
                </a>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 group">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-coffee-700 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:bg-coffee-600 transition-colors duration-300">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-coffee-300" />
                </div>
                <a 
                  href="mailto:hello@brownroasted.com"
                  className="text-coffee-200 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                >
                  hello@brownroasted.com
                </a>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="animate-fade-in">
            <h4 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6 font-display">Opening Hours</h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="bg-coffee-700/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-coffee-600/30">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-coffee-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-coffee-300" />
                  </div>
                  <span className="font-semibold text-white text-sm sm:text-base">Current Hours</span>
                </div>
                <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                  <div className="flex justify-between">
                    <span className="text-coffee-200">Mon - Fri</span>
                    <span className="text-white font-medium">7:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-coffee-200">Sat - Sun</span>
                    <span className="text-white font-medium">8:00 AM - 11:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-coffee-700 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-3 sm:space-y-4 lg:space-y-0">
            <p className="text-coffee-300 text-center lg:text-left text-xs sm:text-sm">
              © 2024 It's Brown & Roasted. All rights reserved. | 
              <span className="text-coffee-200"> Crafted with ❤️ in Bangalore</span>
            </p>
            
            {/* Root Wave Branding */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-coffee-300">
              <span className="text-xs sm:text-sm">Powered by</span>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <a 
                  href="https://rootwave.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-coffee-200 hover:text-white transition-colors duration-300 group text-xs sm:text-sm"
                >
                  <span className="font-semibold">Root Wave</span>
                  <ExternalLink className="w-2 h-2 sm:w-3 sm:h-3 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <span className="text-coffee-400">|</span>
                <a 
                  href="https://shop.rootwave.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-coffee-200 hover:text-white transition-colors duration-300 group text-xs sm:text-sm"
                >
                  <span className="font-medium">Shop</span>
                  <ExternalLink className="w-2 h-2 sm:w-3 sm:h-3 group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;