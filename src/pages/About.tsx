import React from 'react';
import { Users, Award, Heart, Coffee, MapPin, Clock, ExternalLink, Sparkles, Star, CheckCircle } from 'lucide-react';

const About = () => {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=It's+Brown+%26+Roasted+Singasandra+Bangalore";

  const values = [
    {
      icon: Coffee,
      title: 'Quality First',
      description: 'We source the finest beans and ingredients to ensure every cup and dish meets our high standards.',
      color: 'from-coffee-500 to-coffee-600'
    },
    {
      icon: Heart,
      title: 'Passion Driven',
      description: 'Our love for coffee and food drives us to create memorable experiences for every guest.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Users,
      title: 'Community Focused',
      description: 'We believe in building connections and creating a welcoming space for all coffee lovers.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Award,
      title: 'Excellence Committed',
      description: 'Our commitment to excellence shows in every detail, from service to presentation.',
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'Head Chef',
      image: 'https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Culinary expert with international experience',
      speciality: 'International Cuisine'
    },
    {
      name: 'Priya Sharma',
      role: 'Coffee Master',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Certified barista and coffee expert',
      speciality: 'Specialty Coffee'
    },
    {
      name: 'Amit Patel',
      role: 'General Manager',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Hospitality management specialist',
      speciality: 'Customer Experience'
    }
  ];

  const achievements = [
    { year: 'Today', milestone: 'Serving fresh coffee daily' },
    { year: '2023', milestone: 'Reached 1000+ customers' },
    { year: '2022', milestone: 'Launched online delivery' },
    { year: '2021', milestone: 'Best Café Award' },
    { year: '2020', milestone: 'Grand opening in Bangalore' }
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
            <span className="text-xs sm:text-sm font-medium">Our Journey</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-4 sm:mb-6 leading-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">Story</span>
          </h1>
          <p className="text-lg sm:text-xl text-coffee-100 leading-relaxed max-w-3xl mx-auto px-4">
            Born from a passion for exceptional coffee and a dream to create a community space 
            where people connect over great food and memorable moments.
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-slide-in-left order-2 lg:order-1">
              <div className="inline-flex items-center bg-coffee-50 rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6">
                <Coffee className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-coffee-600" />
                <span className="text-xs sm:text-sm font-medium text-coffee-700">Our Beginning</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-coffee-800 mb-4 sm:mb-6 leading-tight">
                Where It All <span className="text-transparent bg-clip-text bg-gradient-to-r from-coffee-600 to-accent-600">Began</span>
              </h2>
              <p className="text-base sm:text-lg text-coffee-700 mb-4 sm:mb-6 leading-relaxed">
                In the bustling streets of Bangalore, passionate coffee enthusiasts came together with a shared vision – 
                to create more than just a café, but a haven where quality meets comfort. Our journey has been one of 
                continuous learning and dedication to serving the perfect cup.
              </p>
              <p className="text-base sm:text-lg text-coffee-700 mb-6 sm:mb-8 leading-relaxed">
                Every recipe, every blend, every dish has been crafted with love and refined through countless conversations 
                with our patrons. We believe in creating experiences that bring people together over exceptional food and coffee.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  { icon: MapPin, text: 'Proudly serving Bangalore' },
                  { icon: Users, text: 'Over 10,000 happy customers' },
                  { icon: Award, text: 'Best Café Award 2022 & 2023' },
                  { icon: CheckCircle, text: 'Commitment to excellence' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-xl sm:rounded-2xl shadow-soft">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-coffee-100 to-coffee-200 rounded-lg sm:rounded-xl flex items-center justify-center">
                      <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-coffee-600" />
                    </div>
                    <span className="text-coffee-700 font-medium text-xs sm:text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative animate-slide-in-right order-1 lg:order-2">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1833399/pexels-photo-1833399.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Coffee preparation"
                  className="rounded-2xl sm:rounded-3xl shadow-strong w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/20 via-transparent to-transparent rounded-2xl sm:rounded-3xl"></div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 bg-gradient-to-br from-accent-500 to-accent-600 text-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-strong animate-float">
                <div className="text-3xl sm:text-4xl font-bold font-display">4.8★</div>
                <div className="text-xs sm:text-sm opacity-90">Customer Rating</div>
              </div>
              
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-strong">
                <div className="flex items-center space-x-2 mb-2">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold text-coffee-800 text-sm sm:text-base">4.8/5</span>
                </div>
                <p className="text-xs text-coffee-600">Customer Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-coffee-800 mb-4 sm:mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-coffee-600 to-accent-600">Journey</span>
            </h2>
            <p className="text-lg sm:text-xl text-coffee-600 max-w-2xl mx-auto px-4">
              Key milestones that shaped our story
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-coffee-300 to-accent-300 hidden sm:block"></div>
            
            <div className="space-y-8 sm:space-y-12">
              {achievements.map((achievement, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'} animate-fade-in`}>
                  <div className={`w-full sm:w-1/2 ${index % 2 === 0 ? 'sm:pr-8 sm:text-right' : 'sm:pl-8 sm:text-left'}`}>
                    <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-medium hover:shadow-strong transition-shadow duration-300">
                      <div className="text-xl sm:text-2xl font-bold text-coffee-600 mb-2 font-display">{achievement.year}</div>
                      <div className="text-coffee-700 text-sm sm:text-base">{achievement.milestone}</div>
                    </div>
                  </div>
                  
                  <div className="relative z-10 hidden sm:block">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-coffee-500 to-accent-500 rounded-full border-4 border-white shadow-medium"></div>
                  </div>
                  
                  <div className="w-full sm:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-coffee-50 to-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <div className="inline-flex items-center bg-white rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6 shadow-soft">
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-red-500" />
              <span className="text-xs sm:text-sm font-medium text-coffee-700">Our Core Values</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-coffee-800 mb-4 sm:mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-coffee-600 to-accent-600">Values</span>
            </h2>
            <p className="text-lg sm:text-xl text-coffee-600 max-w-3xl mx-auto px-4">
              The principles that guide everything we do at It's Brown & Roasted
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div key={index} className="group text-center animate-scale-in">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${value.color} rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-medium group-hover:shadow-strong transition-all duration-300 transform group-hover:scale-110`}>
                  <value.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-coffee-800 mb-3 sm:mb-4 font-display">{value.title}</h3>
                <p className="text-coffee-600 leading-relaxed text-sm sm:text-base px-2">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <div className="inline-flex items-center bg-coffee-50 rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6">
              <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-coffee-600" />
              <span className="text-xs sm:text-sm font-medium text-coffee-700">Meet Our Team</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-coffee-800 mb-4 sm:mb-6">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-coffee-600 to-accent-600">Team</span>
            </h2>
            <p className="text-lg sm:text-xl text-coffee-600 max-w-3xl mx-auto px-4">
              The passionate individuals who make the magic happen every day
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {team.map((member, index) => (
              <div key={index} className="group bg-white rounded-2xl sm:rounded-3xl shadow-medium hover:shadow-strong overflow-hidden transition-all duration-300 transform hover:scale-105 animate-fade-in">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-3">
                      <p className="text-xs font-medium">{member.speciality}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 sm:p-6 text-center">
                  <h3 className="text-lg sm:text-xl font-semibold text-coffee-800 mb-2 font-display">{member.name}</h3>
                  <p className="text-coffee-600 font-medium mb-3 text-sm sm:text-base">{member.role}</p>
                  <p className="text-coffee-500 text-xs sm:text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-coffee-800 via-coffee-900 to-coffee-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-slide-in-left">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6 border border-white/20">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-accent-400" />
                <span className="text-xs sm:text-sm font-medium">Find Us</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6 sm:mb-8 leading-tight">
                Visit <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">Us</span>
              </h2>
              
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-accent-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 sm:mb-3 text-base sm:text-lg">Our Location</h3>
                    <p className="text-coffee-200 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                      Singasandra Industrial Area<br />
                      Kudlu Gate, Bangalore<br />
                      Karnataka 560068, India
                    </p>
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-3 sm:px-4 py-2 rounded-xl sm:rounded-2xl font-medium transition-all duration-300 group border border-white/20 text-sm sm:text-base"
                    >
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                      View on Google Maps
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:scale-110 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-accent-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 sm:mb-3 text-base sm:text-lg">Opening Hours</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 border border-white/10">
                        <span className="text-coffee-200 text-sm sm:text-base">Monday - Friday</span>
                        <span className="font-semibold text-sm sm:text-base">7:00 AM - 10:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 border border-white/10">
                        <span className="text-coffee-200 text-sm sm:text-base">Saturday - Sunday</span>
                        <span className="font-semibold text-sm sm:text-base">8:00 AM - 11:00 PM</span>
                      </div>
                    </div>
                    <p className="text-coffee-300 text-xs sm:text-sm mt-3">Kitchen closes 30 minutes before closing</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/20 shadow-strong">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 font-display">Find Us Easily</h3>
                <div className="bg-gradient-to-br from-coffee-600 to-coffee-800 h-48 sm:h-64 rounded-xl sm:rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="text-center z-10">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <p className="text-coffee-200 mb-3 sm:mb-4 text-sm sm:text-base">Interactive Map</p>
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-white text-coffee-600 hover:bg-cream-100 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl font-medium transition-all duration-300 hover:shadow-glow transform hover:scale-105 text-sm sm:text-base"
                    >
                      Open Google Maps
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                    </a>
                  </div>
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                  </div>
                </div>
                <p className="text-coffee-200 mt-4 sm:mt-6 text-center leading-relaxed text-sm sm:text-base">
                  Located in the heart of Bangalore's tech corridor, easily accessible by metro and bus
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-coffee-600 via-coffee-700 to-coffee-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-fade-in">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6 border border-white/20">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-accent-400" />
            <span className="text-xs sm:text-sm font-medium text-white">Join Our Story</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4 sm:mb-6 leading-tight">
            Ready to Be Part of Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">Story?</span>
          </h2>
          <p className="text-lg sm:text-xl text-coffee-100 mb-8 sm:mb-10 leading-relaxed max-w-3xl mx-auto px-4">
            Join thousands of coffee lovers who have made It's Brown & Roasted their home away from home.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <a
              href="/contact"
              className="bg-white text-coffee-600 hover:bg-cream-100 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 hover:shadow-glow transform hover:scale-105 active:scale-95 text-sm sm:text-base"
            >
              Visit Us Today
            </a>
            <a
              href="/menu"
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white hover:text-coffee-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 hover:shadow-glow transform hover:scale-105 active:scale-95 text-sm sm:text-base"
            >
              Explore Our Menu
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;