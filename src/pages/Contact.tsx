import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, ExternalLink, Sparkles, Star, Users } from 'lucide-react';
import LiveStatus from '../components/LiveStatus';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '2',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=It's+Brown+%26+Roasted+Singasandra+Bangalore";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: 'Singasandra Industrial Area\nKudlu Gate, Bangalore\nKarnataka 560068, India',
      action: {
        text: 'View on Google Maps',
        href: googleMapsUrl,
        external: true
      },
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 98765 43210',
      action: {
        text: 'Call Now',
        href: 'tel:+919876543210',
        external: false
      },
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'hello@brownroasted.com',
      action: {
        text: 'Send Email',
        href: 'mailto:hello@brownroasted.com',
        external: false
      },
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-cream-50 pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-coffee-800 via-coffee-900 to-coffee-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/887723/pexels-photo-887723.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Café interior"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/80 via-transparent to-transparent"></div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6 border border-white/20">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-accent-400" />
            <span className="text-xs sm:text-sm font-medium">We'd Love to Hear From You</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-4 sm:mb-6 leading-tight">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">Touch</span>
          </h1>
          <p className="text-lg sm:text-xl text-coffee-100 leading-relaxed mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
            We'd love to hear from you. Book a table, ask a question, or just say hello!
          </p>
          
          <div className="flex justify-center">
            <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 border border-white/20 shadow-soft">
              <LiveStatus className="text-white" size="md" />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <div className="inline-flex items-center bg-coffee-50 rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-coffee-600" />
              <span className="text-xs sm:text-sm font-medium text-coffee-700">Contact Information</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-coffee-800 mb-6 sm:mb-8 leading-tight">
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-coffee-600 to-accent-600">Information</span>
            </h2>
            
            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="group bg-white rounded-2xl sm:rounded-3xl shadow-medium hover:shadow-strong transition-all duration-300 transform hover:scale-105 overflow-hidden">
                  <div className="p-4 sm:p-6">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${info.color} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-medium group-hover:shadow-glow transition-all duration-300`}>
                        <info.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-coffee-800 mb-2 text-base sm:text-lg font-display">{info.title}</h3>
                        <p className="text-coffee-600 mb-3 sm:mb-4 whitespace-pre-line leading-relaxed text-sm sm:text-base">{info.content}</p>
                        <a
                          href={info.action.href}
                          target={info.action.external ? "_blank" : undefined}
                          rel={info.action.external ? "noopener noreferrer" : undefined}
                          className="inline-flex items-center text-coffee-600 hover:text-coffee-700 font-medium transition-colors duration-300 group text-sm sm:text-base"
                        >
                          {info.action.text}
                          {info.action.external && <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover:scale-110 transition-transform duration-300" />}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Opening Hours Card */}
              <div className="bg-gradient-to-br from-coffee-800 to-coffee-900 rounded-2xl sm:rounded-3xl shadow-strong text-white overflow-hidden">
                <div className="p-4 sm:p-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center">
                      <Clock className="w-6 h-6 sm:w-7 sm:h-7 text-accent-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white mb-3 sm:mb-4 text-base sm:text-lg font-display">Opening Hours</h3>
                      <div className="space-y-2 sm:space-y-3">
                        <div className="flex justify-between items-center bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 border border-white/10">
                          <span className="text-coffee-200 text-sm sm:text-base">Monday - Friday</span>
                          <span className="font-semibold text-sm sm:text-base">7:00 AM - 10:00 PM</span>
                        </div>
                        <div className="flex justify-between items-center bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 border border-white/10">
                          <span className="text-coffee-200 text-sm sm:text-base">Saturday - Sunday</span>
                          <span className="font-semibold text-sm sm:text-base">8:00 AM - 11:00 PM</span>
                        </div>
                      </div>
                      <div className="mt-3 sm:mt-4">
                        <LiveStatus size="sm" className="text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="mt-6 sm:mt-8 bg-white rounded-2xl sm:rounded-3xl shadow-medium overflow-hidden">
              <div className="h-48 sm:h-56 lg:h-64 bg-gradient-to-br from-coffee-100 to-coffee-200 flex items-center justify-center relative overflow-hidden">
                <div className="text-center z-10">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-coffee-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-medium">
                    <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <p className="text-coffee-700 font-medium mb-3 sm:mb-4 text-sm sm:text-base">Find Us on Google Maps</p>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-coffee-600 hover:bg-coffee-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl font-medium transition-all duration-300 hover:shadow-glow transform hover:scale-105 text-sm sm:text-base"
                  >
                    Open in Google Maps
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                  </a>
                </div>
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
                  }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Reservation Form */}
          <div className="animate-slide-in-right">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-strong p-6 sm:p-8">
              <div className="inline-flex items-center bg-coffee-50 rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6">
                <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-coffee-600" />
                <span className="text-xs sm:text-sm font-medium text-coffee-700">Table Reservation</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-coffee-800 mb-6 sm:mb-8 leading-tight">
                Book a <span className="text-transparent bg-clip-text bg-gradient-to-r from-coffee-600 to-accent-600">Table</span>
              </h2>

              {isSubmitted && (
                <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-xl sm:rounded-2xl flex items-center space-x-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <p className="text-green-700 font-medium text-sm sm:text-base">Thank you! Your reservation request has been submitted.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-coffee-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-coffee-200 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-coffee-500 focus:border-transparent transition-all duration-300 bg-cream-50 hover:bg-white text-sm sm:text-base"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-coffee-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-coffee-200 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-coffee-500 focus:border-transparent transition-all duration-300 bg-cream-50 hover:bg-white text-sm sm:text-base"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-coffee-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-coffee-200 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-coffee-500 focus:border-transparent transition-all duration-300 bg-cream-50 hover:bg-white text-sm sm:text-base"
                      placeholder="+91 12345 67890"
                    />
                  </div>

                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-coffee-700 mb-2">
                      Number of Guests
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-coffee-200 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-coffee-500 focus:border-transparent transition-all duration-300 bg-cream-50 hover:bg-white text-sm sm:text-base"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-coffee-700 mb-2">
                    Preferred Date & Time
                  </label>
                  <input
                    type="datetime-local"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-coffee-200 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-coffee-500 focus:border-transparent transition-all duration-300 bg-cream-50 hover:bg-white text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-coffee-700 mb-2">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-coffee-200 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-coffee-500 focus:border-transparent transition-all duration-300 resize-none bg-cream-50 hover:bg-white text-sm sm:text-base"
                    placeholder="Any special requests or dietary requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-coffee-600 to-coffee-700 hover:from-coffee-700 hover:to-coffee-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 hover:shadow-glow transform hover:scale-105 active:scale-95 flex items-center justify-center text-sm sm:text-base"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Submit Reservation Request
                </button>

                <p className="text-xs sm:text-sm text-coffee-500 text-center">
                  We'll confirm your reservation within 2 hours via email or phone.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-br from-coffee-800 via-coffee-900 to-coffee-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white text-center animate-fade-in relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6 border border-white/20">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-accent-400" />
              <span className="text-xs sm:text-sm font-medium">Need Help?</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold mb-3 sm:mb-4 leading-tight">
              Have Questions About Our Menu or Services?
            </h3>
            <p className="text-coffee-200 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base px-4">
              Our friendly staff is always happy to help with any questions about our offerings, 
              dietary restrictions, or special events.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <a
                href="tel:+919876543210"
                className="bg-white/10 backdrop-blur-sm hover:bg-white hover:text-coffee-800 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl font-medium transition-all duration-300 hover:shadow-glow transform hover:scale-105 border border-white/20 text-sm sm:text-base"
              >
                Call Us Now
              </a>
              <a
                href="mailto:hello@brownroasted.com"
                className="bg-white text-coffee-600 hover:bg-cream-100 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl font-medium transition-all duration-300 hover:shadow-glow transform hover:scale-105 text-sm sm:text-base"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;