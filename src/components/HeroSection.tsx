import { FC } from "react";
import { Link } from "react-router-dom";

const HeroSection: FC = () => {
  return (
    <div className="relative overflow-hidden font-lora">
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-primary opacity-90"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
      
      {/* Floating animated elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="relative container px-4 grid md:grid-cols-2 py-16 mx-auto min-h-[500px] items-center">
        <div className="flex items-center">
          <div className="max-w-[500px] space-y-6 animate-fadeInLeft">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white animate-slideDown">
              <span className="text-sm font-medium">Limited Time Offer</span>
              <span className="ml-2 px-2 py-1 bg-red-500 text-white text-xs rounded-full animate-pulse-slow">-50%</span>
            </div>
            
            <h1 className="text-white font-bold text-4xl md:text-6xl leading-tight">
              Premium Tech
              <span className="block text-3xl md:text-4xl mt-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
                Collection 2025
              </span>
            </h1>
            
            <p className="text-white/90 text-lg md:text-xl">
              Starting at <span className="font-bold text-2xl text-yellow-400">$999</span>
            </p>
            
            <p className="text-white/80 text-base md:text-lg">
              Discover cutting-edge technology with exclusive deals this week only
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/category/laptops"
                data-test="hero-btn"
                className="inline-block bg-white text-purple-600 font-semibold px-8 py-4 rounded-lg hover-lift hover:shadow-2xl transform transition-all duration-300 text-center"
              >
                Shop Now
              </Link>
              <Link
                to="/products"
                className="inline-block glass text-white font-semibold px-8 py-4 rounded-lg hover-lift hover:shadow-2xl transform transition-all duration-300 text-center border border-white/30"
              >
                View All Products
              </Link>
            </div>
            
            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-6 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>In Stock</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-center md:justify-end animate-fadeInRight">
          <div className="relative">
            {/* Glowing effect behind image */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
            
            {/* Main image with enhanced styling */}
            <img 
              src="/hero.png" 
              alt="hero" 
              className="relative w-full max-w-md h-auto rounded-2xl shadow-2xl hover-scale"
            />
            
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold animate-bounce-slow shadow-lg">
              HOT
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold animate-pulse-slow shadow-lg">
              NEW
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
