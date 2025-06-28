import React from 'react';
import { ExternalLink, Truck, Clock, Star, MapPin, Phone, Sparkles, CheckCircle, Users } from 'lucide-react';
import LiveStatus from '../components/LiveStatus';

const OrderOnline = () => {
  const deliveryPartners = [
    {
      name: 'Zomato',
      logo: '🍽️',
      description: 'Reliable service with live tracking',
      rating: '4.3',
      deliveryFee: '₹25',
      minOrder: '₹150',
      url: 'https://www.zomato.com/bangalore/its-brown-roasted-bommanahalli-bangalore',
      color: 'from-red-500 to-red-600',
      hoverColor: 'hover:from-red-600 hover:to-red-700'
    },
    {
      name: 'Swiggy',
      logo: '🛵',
      description: 'Fast delivery within 30-45 minutes',
      rating: '4.2',
      deliveryFee: '₹30',
      minOrder: '₹200',
      url: 'https://www.swiggy.com/city/bangalore/its-brown-and-roasted-singasandra-industrial-area-kudlu-gate-rest940118',
      color: 'from-orange-500 to-orange-600',
      hoverColor: 'hover:from-orange-600 hover:to-orange-700'
    },
    {
      name: 'Magicpin',
      logo: '✨',
      description: 'Discover deals and offers',
      rating: '4.1',
      deliveryFee: '₹35',
      minOrder: '₹100',
      url: 'https://magicpin.in/Bangalore/Singasandra/Restaurant/ItS-Brown-and-Roasted/store/17099b7/menu/?srsltid=AfmBOoqpunLFctreHt8-ZDV7DRw1T5kqpIW0hlHfuJRbMJqM0PmQCZWo',
      color: 'from-purple-500 to-purple-600',
      hoverColor: 'hover:from-purple-600 hover:to-purple-700'
    }
  ];

  const popularItems = [
    {
      name: 'Signature Espresso',
      price: '₹150',
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Rich, bold, and perfectly balanced',
      badge: 'Bestseller'
    },
    {
      name: 'Belgian Waffle',
      price: '₹280',
      image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Crispy waffle with fresh berries',
      badge: 'Popular'
    },
    {
      name: 'Gourmet Burger',
      price: '₹350',
      image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Juicy patty with premium toppings',
      badge: 'Chef\'s Special'
    }
  ];

  const deliveryAreas = [
    'Bommanahalli', 'Singasandra', 'Kudlu Gate', 'BTM Layout',
    'HSR Layout', 'Koramangala', 'Electronic City', 'Bannerghatta Road'
  ];

  const features = [
    { icon: Clock, text: '30-45 min delivery', color: 'from-blue-500 to-blue-600' },
    { icon: Truck, text: 'Free delivery above ₹300', color: 'from-green-500 to-green-600' },
    { icon: Star, text: '4.3★ rated', color: 'from-yellow-500 to-yellow-600' },
  ];

  return (
    <div className="min-h-screen bg-cream-50 pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-coffee-800 via-coffee-900 to-coffee-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Coffee delivery"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/80 via-transparent to-transparent"></div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6 border border-white/20">
            <Truck className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-accent-400" />
            <span className="text-xs sm:text-sm font-medium">Fast & Fresh Delivery</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-4 sm:mb-6 leading-tight">
            Order <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">Online</span>
          </h1>
          <p className="text-lg sm:text-xl text-coffee-100 leading-relaxed mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
            Enjoy our delicious coffee and food from the comfort of your home. 
            Fast delivery, fresh taste, every time.
          </p>
          
          {/* Live Status */}
          <div className="mb-8 sm:mb-10 flex justify-center">
            <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 border border-white/20 shadow-soft">
              <LiveStatus className="text-white" size="md" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center justify-center space-x-2 sm:space-x-3 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/20">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br ${feature.color} rounded-lg sm:rounded-xl flex items-center justify-center`}>
                  <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <span className="text-xs sm:text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Delivery Partners */}
        <section className="mb-16 sm:mb-20 animate-fade-in">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center bg-white rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6 shadow-soft">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-accent-500" />
              <span className="text-xs sm:text-sm font-medium text-coffee-700">Choose Your Partner</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-coffee-800 mb-4 sm:mb-6">
              Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-coffee-600 to-accent-600">Delivery Partner</span>
            </h2>
            <p className="text-lg sm:text-xl text-coffee-600 max-w-3xl mx-auto leading-relaxed px-4">
              Order through your favorite delivery app and get our delicious food delivered to your doorstep
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {deliveryPartners.map((partner, index) => (
              <div key={index} className="group bg-white rounded-2xl sm:rounded-3xl shadow-medium hover:shadow-strong transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <div className={`bg-gradient-to-br ${partner.color} p-6 sm:p-8 text-white text-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  <div className="relative z-10">
                    <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{partner.logo}</div>
                    <h3 className="text-xl sm:text-2xl font-bold font-display">{partner.name}</h3>
                  </div>
                </div>
                
                <div className="p-4 sm:p-6">
                  <p className="text-coffee-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{partner.description}</p>
                  
                  <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                    <div className="flex justify-between items-center p-2 sm:p-3 bg-cream-50 rounded-xl sm:rounded-2xl">
                      <span className="text-coffee-700 font-medium text-sm sm:text-base">Rating:</span>
                      <div className="flex items-center">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="font-semibold text-coffee-800 text-sm sm:text-base">{partner.rating}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-2 sm:p-3 bg-cream-50 rounded-xl sm:rounded-2xl">
                      <span className="text-coffee-700 font-medium text-sm sm:text-base">Delivery Fee:</span>
                      <span className="font-semibold text-coffee-800 text-sm sm:text-base">{partner.deliveryFee}</span>
                    </div>
                    <div className="flex justify-between items-center p-2 sm:p-3 bg-cream-50 rounded-xl sm:rounded-2xl">
                      <span className="text-coffee-700 font-medium text-sm sm:text-base">Min Order:</span>
                      <span className="font-semibold text-coffee-800 text-sm sm:text-base">{partner.minOrder}</span>
                    </div>
                  </div>

                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full bg-gradient-to-r ${partner.color} ${partner.hoverColor} text-white text-center py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 hover:shadow-glow transform hover:scale-105 active:scale-95 text-sm sm:text-base`}
                  >
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 inline mr-2" />
                    Order on {partner.name}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Items */}
        <section className="mb-16 sm:mb-20 animate-fade-in">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center bg-white rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6 shadow-soft">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-yellow-500" />
              <span className="text-xs sm:text-sm font-medium text-coffee-700">Customer Favorites</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-coffee-800 mb-4 sm:mb-6">
              Most <span className="text-transparent bg-clip-text bg-gradient-to-r from-coffee-600 to-accent-600">Ordered</span>
            </h2>
            <p className="text-lg sm:text-xl text-coffee-600 max-w-3xl mx-auto leading-relaxed px-4">
              Don't know what to order? Start with these customer favorites
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {popularItems.map((item, index) => (
              <div key={index} className="group bg-white rounded-2xl sm:rounded-3xl shadow-medium hover:shadow-strong transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
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
                    <p className="text-cream-200 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl sm:text-2xl font-bold text-accent-400 font-display">{item.price}</span>
                      <button className="bg-white/20 backdrop-blur-sm hover:bg-white hover:text-coffee-800 px-3 sm:px-4 py-2 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-medium transition-all duration-300 border border-white/30">
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/menu"
              className="group bg-gradient-to-r from-coffee-600 to-coffee-700 hover:from-coffee-700 hover:to-coffee-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-base sm:text-lg font-semibold transition-all duration-300 hover:shadow-glow transform hover:scale-105 active:scale-95 inline-flex items-center"
            >
              View Full Menu
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </section>

        {/* Contact & Delivery Info */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-16 sm:mb-20">
          {/* Contact Info */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-medium p-6 sm:p-8 animate-slide-in-left">
            <div className="inline-flex items-center bg-coffee-50 rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-coffee-600" />
              <span className="text-xs sm:text-sm font-medium text-coffee-700">Need Help?</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-coffee-800 mb-6 sm:mb-8">
              Need <span className="text-transparent bg-clip-text bg-gradient-to-r from-coffee-600 to-accent-600">Help?</span>
            </h3>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-cream-50 rounded-xl sm:rounded-2xl">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-coffee-800 text-sm sm:text-base">Call Us</p>
                  <a href="tel:+919876543210" className="text-coffee-600 hover:text-coffee-700 transition-colors text-sm sm:text-base">
                    +91 98765 43210
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-cream-50 rounded-xl sm:rounded-2xl">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-coffee-800 text-sm sm:text-base">Location</p>
                  <p className="text-coffee-600 text-xs sm:text-sm">Singasandra, Bangalore</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-cream-50 rounded-xl sm:rounded-2xl">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-coffee-800 mb-2 text-sm sm:text-base">Current Status</p>
                  <LiveStatus size="sm" />
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Areas */}
          <div className="bg-gradient-to-br from-coffee-800 to-coffee-900 rounded-2xl sm:rounded-3xl shadow-strong p-6 sm:p-8 text-white animate-slide-in-right relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6 border border-white/20">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-accent-400" />
                <span className="text-xs sm:text-sm font-medium">Service Areas</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold mb-6 sm:mb-8">
                Delivery <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">Areas</span>
              </h3>
              
              <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-6 sm:mb-8">
                {deliveryAreas.map((area, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-3 text-center border border-white/20">
                    <span className="text-xs sm:text-sm font-medium">{area}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-accent-500 rounded-xl sm:rounded-2xl flex items-center justify-center">
                    <Truck className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <span className="font-semibold text-base sm:text-lg">Delivery Info</span>
                </div>
                <ul className="text-coffee-200 space-y-1 sm:space-y-2 text-sm sm:text-base">
                  <li className="flex items-center">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-green-400" />
                    Average delivery time: 30-45 minutes
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-green-400" />
                    Free delivery on orders above ₹300
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-green-400" />
                    Fresh food, carefully packaged
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-green-400" />
                    Live order tracking available
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-coffee-600 via-coffee-700 to-coffee-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white text-center animate-fade-in relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6 border border-white/20">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-accent-400" />
              <span className="text-xs sm:text-sm font-medium">Ready to Order?</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold mb-4 sm:mb-6 leading-tight">
              Craving Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">Delicious?</span>
            </h3>
            <p className="text-coffee-100 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base px-4">
              Order now and get your favorite coffee and food delivered fresh to your doorstep. 
              Choose from our trusted delivery partners above!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <a
                href="/menu"
                className="bg-white text-coffee-600 hover:bg-cream-100 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 hover:shadow-glow transform hover:scale-105 active:scale-95 text-sm sm:text-base"
              >
                Browse Menu
              </a>
              <a
                href="/contact"
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white hover:text-coffee-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 hover:shadow-glow transform hover:scale-105 active:scale-95 text-sm sm:text-base"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OrderOnline;