import React from 'react';
import { Calculator, Zap } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 sm:py-20 text-center">
          {/* Logo and Icon */}
          <div className="flex justify-center items-center gap-3 mb-6">
            <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl">
              <Calculator className="w-8 h-8 text-white" />
            </div>
            <Zap className="w-6 h-6 text-yellow-300" />
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
