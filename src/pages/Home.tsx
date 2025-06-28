import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, MapPin, Clock, Users, Award, Coffee, Heart, Sparkles } from 'lucide-react';
import LiveStatus from '../components/LiveStatus';

const Home = () => {
  const featuredItems = [
    {
      name: 'Signature Espresso',
      description: 'Rich, bold, and perfectly balanced',
      price: '₹150',
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Bestseller'
    },
    {
      name: 'Belgian Waffle',
      description: 'Crispy waffle with fresh berries and cream',
      price: '₹280',
      image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Chef\'s Special'
    },
    {
      name: 'Gourmet Burger',
      description: 'Juicy patty with premium toppings',
      price: '₹350',
      image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Popular'
    }
  ];

  const stats = [
    { icon: Users, value: '10K+', label: 'Happy Customers', color: 'from-blue-500 to-blue-600' },
    { icon: Award, value: '4.8', label: 'Rating', color: 'from-yellow-500 to-yellow-600' },
    { icon: Clock, value: 'Daily', label: 'Fresh Ingredients', color: 'from-green-500 to-green-600' },
  ];

  const features = [
    {
      icon: Coffee,
      title: 'Premium Coffee',
      description: 'Sourced from the finest coffee regions worldwide'
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every dish crafted with passion and attention to detail'
    },
    {
      icon: Sparkles,
      title: 'Fresh Daily',
      description: 'All ingredients sourced fresh daily for the best taste'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1833399/pexels-photo-1833399.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Coffee shop ambiance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-coffee-900/90 via-coffee-800/70 to-coffee-900/90"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 sm:px-6 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-4 sm:mb-6 animate-slide-up leading-tight">
            It's Brown & <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">Roasted</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-cream-100 animate-slide-up max-w-3xl mx-auto leading-relaxed px-2">
            Where every cup tells a story and every bite creates a memory. Experience Bangalore's finest café with exceptional coffee, delicious food, and warm ambiance.
          </p>
          
          {/* Live Status in Hero */}
          <div className="mb-8 sm:mb-10 flex justify-center animate-slide-up">
            <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 border border-white/20 shadow-soft">
              <LiveStatus className="text-white" size="md" />
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-slide-up px-4">
            <Link
              to="/menu"
              className="group bg-gradient-to-r from-coffee-600 to-coffee-700 hover:from-coffee-700 hover:to-coffee-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-base sm:text-lg font-semibold transition-all duration-300 hover:shadow-glow transform hover:scale-105 active:scale-95 flex items-center justify-center"
            >
              Explore Menu 
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/order"
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white hover:text-coffee-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-base sm:text-lg font-semibold transition-all duration-300 hover:shadow-glow transform hover:scale-105 active:scale-95"
            >
              Order Online
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-soft">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-2 sm:h-3 bg-white rounded-full mt-1 sm:mt-2 animate-pulse-soft"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-coffee-800 via-coffee-900 to-coffee-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group animate-fade-in">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-br ${stat.color} rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-strong group-hover:shadow-glow transition-all duration-300 transform group-hover:scale-110`}>
                  <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 font-display">{stat.value}</div>
                <div className="text-coffee-200 text-sm sm:text-base lg:text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-cream-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-coffee-800 mb-4 sm:mb-6">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-coffee-600 to-accent-600">Us?</span>
            </h2>
            <p className="text-lg sm:text-xl text-coffee-600 max-w-3xl mx-auto leading-relaxed px-4">
              We're committed to delivering an exceptional experience through quality, passion, and attention to detail
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group text-center animate-slide-up">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-coffee-100 to-coffee-200 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-medium group-hover:shadow-strong transition-all duration-300 transform group-hover:scale-110">
                  <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-coffee-600 group-hover:text-coffee-700 transition-colors duration-300" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-coffee-800 mb-3 sm:mb-4 font-display">{feature.title}</h3>
                <p className="text-coffee-600 leading-relaxed px-4">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-slide-in-left order-2 lg:order-1">
              <div className="inline-flex items-center bg-coffee-50 rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6">
                <Coffee className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-coffee-600" />
                <span className="text-xs sm:text-sm font-medium text-coffee-700">Our Story</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-coffee-800 mb-4 sm:mb-6 leading-tight">
                Crafting Moments, <span className="text-transparent bg-clip-text bg-gradient-to-r from-coffee-600 to-accent-600">One Cup at a Time</span>
              </h2>
              <p className="text-base sm:text-lg text-coffee-700 mb-4 sm:mb-6 leading-relaxed">
                Nestled in the heart of Bangalore, It's Brown & Roasted is more than just a café – 
                it's a sanctuary for coffee lovers and food enthusiasts. Our passion for quality 
                drives us to source the finest beans and create unforgettable culinary experiences.
              </p>
              
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-coffee-100 to-coffee-200 rounded-xl sm:rounded-2xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-coffee-600" />
                  </div>
                  <span className="text-coffee-700 font-medium text-sm sm:text-base">Located in vibrant Bangalore</span>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl sm:rounded-2xl flex items-center justify-center">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-2 h-2 sm:w-3 sm:h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <span className="text-coffee-700 font-medium text-sm sm:text-base">4.8/5 from 1000+ reviews</span>
                </div>
              </div>
              
              <Link
                to="/about"
                className="inline-flex items-center text-coffee-600 hover:text-coffee-700 font-semibold text-base sm:text-lg transition-colors duration-300 group"
              >
                Learn More About Us 
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
            
            <div className="relative animate-slide-in-right order-1 lg:order-2">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/887723/pexels-photo-887723.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Café interior"
                  className="rounded-2xl sm:rounded-3xl shadow-strong w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/20 via-transparent to-transparent rounded-2xl sm:rounded-3xl"></div>
              </div>
              
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-strong animate-float">
                <div className="text-center">
                  <LiveStatus showText={false} size="sm" className="mb-2 sm:mb-3 justify-center" />
                  <p className="font-semibold text-coffee-800 text-xs sm:text-sm">Mon-Fri: 7AM-10PM</p>
                  <p className="text-xs text-coffee-600">Sat-Sun: 8AM-11PM</p>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-gradient-to-br from-accent-500 to-accent-600 text-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-strong">
                <div className="text-2xl sm:text-3xl font-bold font-display">4.8★</div>
                <div className="text-xs sm:text-sm opacity-90">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-coffee-50 to-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <div className="inline-flex items-center bg-white rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6 shadow-soft">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-accent-500" />
              <span className="text-xs sm:text-sm font-medium text-coffee-700">Customer Favorites</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-coffee-800 mb-4 sm:mb-6">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-coffee-600 to-accent-600">Favorites</span>
            </h2>
            <p className="text-lg sm:text-xl text-coffee-600 max-w-3xl mx-auto leading-relaxed px-4">
              Discover our most loved items, crafted with passion and served with love
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredItems.map((item, index) => (
              <div key={index} className="group cursor-pointer animate-scale-in">
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-medium hover:shadow-strong transition-all duration-500 transform hover:scale-105 bg-white">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    
                    {/* Badge */}
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                      <span className="bg-gradient-to-r from-accent-500 to-accent-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-semibold shadow-medium">
                        {item.badge}
                      </span>
                    </div>
                    
                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                      <h3 className="text-lg sm:text-xl font-semibold mb-2 font-display">{item.name}</h3>
                      <p className="text-cream-200 mb-3 sm:mb-4 text-sm leading-relaxed">{item.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xl sm:text-2xl font-bold text-accent-400 font-display">{item.price}</span>
                        <button className="bg-white/20 backdrop-blur-sm hover:bg-white hover:text-coffee-800 px-3 sm:px-4 py-2 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-medium transition-all duration-300 border border-white/30">
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12 animate-fade-in">
            <Link
              to="/menu"
              className="group bg-gradient-to-r from-coffee-600 to-coffee-700 hover:from-coffee-700 hover:to-coffee-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-base sm:text-lg font-semibold transition-all duration-300 hover:shadow-glow transform hover:scale-105 active:scale-95 inline-flex items-center"
            >
              View Full Menu 
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <div className="inline-flex items-center bg-gradient-to-r from-pink-100 to-purple-100 rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6">
              <span className="text-lg sm:text-2xl mr-2">📸</span>
              <span className="text-xs sm:text-sm font-medium text-purple-700">Follow Our Journey</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-coffee-800 mb-4 sm:mb-6">
              Follow Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">Journey</span>
            </h2>
            <p className="text-lg sm:text-xl text-coffee-600 mb-4 sm:mb-6 leading-relaxed px-4">
              Stay connected with our daily café life on Instagram
            </p>
            <a
              href="#"
              className="inline-flex items-center text-coffee-600 hover:text-coffee-700 font-semibold text-base sm:text-lg transition-colors duration-300 group"
            >
              @brownandroasted 
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
            {[
              'https://images.pexels.com/photos/1833399/pexels-photo-1833399.jpeg?auto=compress&cs=tinysrgb&w=300',
              'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=300',
              'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=300',
              'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=300',
              'https://images.pexels.com/photos/887723/pexels-photo-887723.jpeg?auto=compress&cs=tinysrgb&w=300',
              'https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=300',
              'https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=300',
              'https://images.pexels.com/photos/1418354/pexels-photo-1418354.jpeg?auto=compress&cs=tinysrgb&w=300'
            ].map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-xl sm:rounded-2xl aspect-square hover:scale-105 transition-transform duration-300 cursor-pointer animate-fade-in group">
                <img
                  src={image}
                  alt={`Instagram post ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Heart className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-coffee-600 via-coffee-700 to-coffee-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-fade-in">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6 border border-white/20">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-accent-400" />
            <span className="text-xs sm:text-sm font-medium text-white">Ready for an Amazing Experience?</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4 sm:mb-6 leading-tight">
            Ready to Experience the <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">Magic?</span>
          </h2>
          <p className="text-lg sm:text-xl text-coffee-100 mb-8 sm:mb-10 leading-relaxed max-w-3xl mx-auto px-4">
            Join us for an unforgettable café experience. Book your table or order online today and discover why we're Bangalore's favorite coffee destination!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link
              to="/contact"
              className="bg-white text-coffee-600 hover:bg-cream-100 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-base sm:text-lg font-semibold transition-all duration-300 hover:shadow-glow transform hover:scale-105 active:scale-95"
            >
              Book a Table
            </Link>
            <Link
              to="/order"
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white hover:text-coffee-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-base sm:text-lg font-semibold transition-all duration-300 hover:shadow-glow transform hover:scale-105 active:scale-95"
            >
              Order for Delivery
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;