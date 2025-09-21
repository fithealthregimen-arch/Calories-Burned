import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-white/5" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 sm:py-20 text-center">
          {/* Logo and Icon */}
          <div className="flex justify-center items-center gap-3 mb-6">
            <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl">
              <span className="text-2xl">🧮</span>
            </div>
            <span className="text-2xl">⚡</span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="block">Calories Burned</span>
            <span className="block text-yellow-300">Calculator</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
            Discover how many calories you burn during your favorite activities. 
            Get instant results with our science-based calculator!
          </p>
          
          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 text-sm sm:text-base">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-green-300 rounded-full"></div>
              <span>100+ Activities</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
              <span>Science-Based</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
              <span>Instant Results</span>
            </div>
          </div>
        </div>
        
        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent"></div>
      </div>
    </header>
  );
};

export default Header;
