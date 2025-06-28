import React, { useState } from 'react';
import { Leaf, Flame, Star, ExternalLink, ShoppingCart, X } from 'lucide-react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('beverages');
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const categories = [
    { id: 'beverages', name: 'Beverages', icon: '☕' },
    { id: 'food', name: 'Food', icon: '🍽️' },
    { id: 'desserts', name: 'Desserts', icon: '🧁' },
  ];

  const deliveryPartners = [
    {
      name: 'Zomato',
      logo: '🍽️',
      url: 'https://www.zomato.com/bangalore/its-brown-roasted-bommanahalli-bangalore',
      color: 'bg-red-500',
      hoverColor: 'hover:bg-red-600'
    },
    {
      name: 'Swiggy',
      logo: '🛵',
      url: 'https://www.swiggy.com/city/bangalore/its-brown-and-roasted-singasandra-industrial-area-kudlu-gate-rest940118',
      color: 'bg-orange-500',
      hoverColor: 'hover:bg-orange-600'
    },
    {
      name: 'Magicpin',
      logo: '✨',
      url: 'https://magicpin.in/Bangalore/Singasandra/Restaurant/ItS-Brown-and-Roasted/store/17099b7/menu/?srsltid=AfmBOoqpunLFctreHt8-ZDV7DRw1T5kqpIW0hlHfuJRbMJqM0PmQCZWo',
      color: 'bg-purple-500',
      hoverColor: 'hover:bg-purple-600'
    }
  ];

  const menuItems = {
    beverages: [
      {
        name: 'Signature Espresso',
        description: 'Rich, bold Italian espresso with perfect crema',
        price: '₹150',
        image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400',
        dietary: ['vegetarian'],
        popular: true
      },
      {
        name: 'Caramel Macchiato',
        description: 'Vanilla syrup, steamed milk, espresso, and caramel drizzle',
        price: '₹220',
        image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400',
        dietary: ['vegetarian']
      },
      {
        name: 'Cold Brew Coffee',
        description: 'Smooth, cold-extracted coffee served over ice',
        price: '₹180',
        image: 'https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=400',
        dietary: ['vegetarian']
      },
      {
        name: 'Chocolate Frappe',
        description: 'Blended iced coffee with chocolate and whipped cream',
        price: '₹250',
        image: 'https://images.pexels.com/photos/1418354/pexels-photo-1418354.jpeg?auto=compress&cs=tinysrgb&w=400',
        dietary: ['vegetarian']
      },
      {
        name: 'Green Tea Latte',
        description: 'Premium matcha with steamed milk and honey',
        price: '₹200',
        image: 'https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=400',
        dietary: ['vegetarian']
      },
      {
        name: 'Fruit Slushie',
        description: 'Refreshing blend of seasonal fruits and ice',
        price: '₹180',
        image: 'https://images.pexels.com/photos/1843319/pexels-photo-1843319.jpeg?auto=compress&cs=tinysrgb&w=400',
        dietary: ['vegan']
      }
    ],
    food: [
      {
        name: 'Classic Burger',
        description: 'Juicy beef patty with lettuce, tomato, and our special sauce',
        price: '₹350',
        image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400',
        popular: true,
        spicy: false
      },
      {
        name: 'Chicken Tikka Burger',
        description: 'Grilled chicken tikka with mint chutney and onions',
        price: '₹380',
        image: 'https://images.pexels.com/photos/1556909/pexels-photo-1556909.jpeg?auto=compress&cs=tinysrgb&w=400',
        spicy: true
      },
      {
        name: 'Belgian Waffle',
        description: 'Crispy waffle with fresh berries, whipped cream, and maple syrup',
        price: '₹280',
        image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400',
        dietary: ['vegetarian'],
        popular: true
      },
      {
        name: 'Paneer Tikka Wrap',
        description: 'Grilled paneer with vegetables in a soft tortilla',
        price: '₹320',
        image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=400',
        dietary: ['vegetarian'],
        spicy: true
      },
      {
        name: 'Club Sandwich',
        description: 'Triple-layered sandwich with chicken, bacon, and vegetables',
        price: '₹300',
        image: 'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        name: 'Pasta Arrabiata',
        description: 'Penne pasta in spicy tomato sauce with herbs',
        price: '₹340',
        image: 'https://images.pexels.com/photos/1460872/pexels-photo-1460872.jpeg?auto=compress&cs=tinysrgb&w=400',
        dietary: ['vegetarian'],
        spicy: true
      }
    ],
    desserts: [
      {
        name: 'Chocolate Lava Cake',
        description: 'Warm chocolate cake with molten center, served with vanilla ice cream',
        price: '₹220',
        image: 'https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=400',
        dietary: ['vegetarian'],
        popular: true
      },
      {
        name: 'Tiramisu',
        description: 'Classic Italian dessert with coffee-soaked ladyfingers',
        price: '₹250',
        image: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=400',
        dietary: ['vegetarian']
      },
      {
        name: 'Red Velvet Cake',
        description: 'Moist red velvet cake with cream cheese frosting',
        price: '₹200',
        image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400',
        dietary: ['vegetarian']
      },
      {
        name: 'Cheesecake',
        description: 'New York style cheesecake with berry compote',
        price: '₹240',
        image: 'https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg?auto=compress&cs=tinysrgb&w=400',
        dietary: ['vegetarian']
      },
      {
        name: 'Chocolate Brownie',
        description: 'Rich chocolate brownie with nuts and chocolate chips',
        price: '₹180',
        image: 'https://images.pexels.com/photos/1998634/pexels-photo-1998634.jpeg?auto=compress&cs=tinysrgb&w=400',
        dietary: ['vegetarian']
      },
      {
        name: 'Ice Cream Sundae',
        description: 'Three scoops of assorted ice cream with toppings',
        price: '₹160',
        image: 'https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg?auto=compress&cs=tinysrgb&w=400',
        dietary: ['vegetarian']
      }
    ]
  };

  const handleOrderClick = (item: any) => {
    setSelectedItem(item);
    setShowOrderModal(true);
  };

  const OrderModal = () => {
    if (!showOrderModal || !selectedItem) return null;

    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
        <div className="bg-white rounded-t-3xl sm:rounded-2xl w-full sm:max-w-lg max-h-[95vh] sm:max-h-[90vh] overflow-y-auto animate-slide-up">
          {/* Modal Header */}
          <div className="sticky top-0 bg-white border-b border-coffee-100 p-4 sm:p-6 rounded-t-3xl sm:rounded-t-2xl">
            <div className="flex justify-between items-start">
              <div className="flex-1 pr-4">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-coffee-800 leading-tight">
                  Order {selectedItem.name}
                </h3>
                <p className="text-coffee-600 text-sm mt-1">Choose your delivery partner</p>
              </div>
              <button
                onClick={() => setShowOrderModal(false)}
                className="w-8 h-8 sm:w-10 sm:h-10 bg-coffee-100 hover:bg-coffee-200 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-coffee-600" />
              </button>
            </div>
          </div>
          
          {/* Modal Content */}
          <div className="p-4 sm:p-6">
            {/* Item Details */}
            <div className="mb-6">
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className="w-full h-48 sm:h-56 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {selectedItem.popular && (
                        <span className="bg-coffee-600 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                          <Star className="w-3 h-3 mr-1" /> Popular
                        </span>
                      )}
                      {selectedItem.dietary?.includes('vegetarian') && (
                        <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                          <Leaf className="w-3 h-3 mr-1" /> Veg
                        </span>
                      )}
                      {selectedItem.spicy && (
                        <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                          <Flame className="w-3 h-3 mr-1" /> Spicy
                        </span>
                      )}
                    </div>
                    <span className="text-2xl font-bold text-white bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      {selectedItem.price}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-coffee-600 leading-relaxed">{selectedItem.description}</p>
            </div>

            {/* Delivery Partners */}
            <div className="space-y-3">
              {deliveryPartners.map((partner, index) => (
                <a
                  key={index}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between p-4 ${partner.color} ${partner.hoverColor} text-white rounded-2xl transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98]`}
                  onClick={() => setShowOrderModal(false)}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-xl">{partner.logo}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-lg">Order on {partner.name}</span>
                      <p className="text-xs opacity-90">Tap to open app/website</p>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 opacity-80" />
                </a>
              ))}
            </div>

            {/* Info Note */}
            <div className="mt-6 p-4 bg-gradient-to-r from-coffee-50 to-cream-50 rounded-2xl border border-coffee-100">
              <p className="text-sm text-coffee-600 text-center leading-relaxed">
                <span className="font-medium">💡 Quick Tip:</span> You'll be redirected to the delivery app where you can search for &quot;<span className="font-semibold">{selectedItem.name}</span>&quot; and complete your order.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-cream-50 pt-20">
      {/* Hero Section - Mobile Optimized */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-coffee-800 via-coffee-700 to-coffee-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/887723/pexels-photo-887723.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Menu background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/50 via-transparent to-transparent"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 sm:mb-6">
            Our <span className="text-coffee-300">Menu</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-coffee-100 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4">
            Discover our carefully crafted selection of beverages, food, and desserts
          </p>
          
          {/* Legend - Mobile Optimized */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-coffee-200">
            <span className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full">
              <Leaf className="w-3 h-3 sm:w-4 sm:h-4 mr-1" /> Vegetarian
            </span>
            <span className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full">
              <Flame className="w-3 h-3 sm:w-4 sm:h-4 mr-1" /> Spicy
            </span>
            <span className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1" /> Popular
            </span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        {/* Category Navigation - Mobile Optimized */}
        <div className="mb-8 sm:mb-12 animate-fade-in">
          <div className="flex overflow-x-auto sm:justify-center gap-2 sm:gap-4 pb-2 sm:pb-0 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex-shrink-0 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeCategory === category.id
                    ? 'bg-coffee-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-coffee-600 hover:bg-coffee-50 shadow-md'
                }`}
              >
                <span className="text-lg sm:text-xl mr-2">{category.icon}</span>
                <span className="text-sm sm:text-base">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] animate-fade-in overflow-hidden">
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 sm:h-52 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  {item.popular && (
                    <span className="bg-coffee-600 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center shadow-lg">
                      <Star className="w-3 h-3 mr-1" /> Popular
                    </span>
                  )}
                  {item.dietary?.includes('vegetarian') && (
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center shadow-lg">
                      <Leaf className="w-3 h-3 mr-1" /> Veg
                    </span>
                  )}
                  {item.dietary?.includes('vegan') && (
                    <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium shadow-lg">
                      Vegan
                    </span>
                  )}
                  {item.spicy && (
                    <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center shadow-lg">
                      <Flame className="w-3 h-3 mr-1" /> Spicy
                    </span>
                  )}
                </div>

                {/* Price Badge */}
                <div className="absolute bottom-3 right-3">
                  <span className="bg-white/90 backdrop-blur-sm text-coffee-800 px-3 py-1.5 rounded-full text-lg font-bold shadow-lg">
                    {item.price}
                  </span>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-coffee-800 mb-2 leading-tight">{item.name}</h3>
                <p className="text-coffee-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base line-clamp-2">{item.description}</p>
                
                {/* Order Button */}
                <button 
                  onClick={() => handleOrderClick(item)}
                  className="w-full bg-gradient-to-r from-coffee-600 to-coffee-700 hover:from-coffee-700 hover:to-coffee-800 text-white py-3 sm:py-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">Order Now</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Order CTA - Mobile Optimized */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 bg-gradient-to-br from-coffee-600 via-coffee-700 to-coffee-800 rounded-3xl animate-fade-in text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"></div>
          <div className="relative z-10 text-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold mb-4">
              Want to Order Everything at Once?
            </h3>
            <p className="text-coffee-100 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Visit our delivery partners directly to browse the full menu and create your perfect order
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              {deliveryPartners.map((partner, index) => (
                <a
                  key={index}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-2"
                >
                  <span className="text-lg sm:text-xl">{partner.logo}</span>
                  <span className="text-sm sm:text-base">Order on {partner.name}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA - Mobile Optimized */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 bg-coffee-800 rounded-3xl animate-fade-in text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-coffee-700 to-coffee-900"></div>
          <div className="relative z-10 text-center">
            <h3 className="text-xl sm:text-2xl font-display font-bold mb-4">
              Can't Decide? Try Our Chef's Special!
            </h3>
            <p className="text-coffee-200 mb-6 text-sm sm:text-base leading-relaxed">
              Let our experienced chefs surprise you with their daily recommendations
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="tel:+919876543210"
                className="bg-coffee-600 hover:bg-coffee-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105 active:scale-95 text-sm sm:text-base"
              >
                Call for Chef's Special
              </a>
              <a
                href="/contact"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-coffee-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105 active:scale-95 text-sm sm:text-base"
              >
                Visit Our Café
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Order Modal */}
      <OrderModal />
    </div>
  );
};

export default Menu;