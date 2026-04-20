import { FC } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-float"></div>
        <div className="absolute top-1/2 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-pink-500/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="relative container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4 animate-fadeInUp">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                T
              </div>
              <h3 className="text-2xl font-bold">TechMart</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your premium destination for cutting-edge technology and electronics. Discover the latest innovations with exclusive deals.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/techmart" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-200 hover-scale">
                <FaFacebook className="text-lg" />
              </a>
              <a href="https://twitter.com/techmart" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-200 hover-scale">
                <FaTwitter className="text-lg" />
              </a>
              <a href="https://instagram.com/techmart" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-200 hover-scale">
                <FaInstagram className="text-lg" />
              </a>
              <a href="https://linkedin.com/company/techmart" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-200 hover-scale">
                <FaLinkedin className="text-lg" />
              </a>
              <a href="https://github.com/techmart" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-200 hover-scale">
                <FaGithub className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 animate-fadeInUp" style={{animationDelay: '0.1s'}}>
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link to="/account" className="text-gray-300 hover:text-white transition-colors duration-200">
                  My Account
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            <h4 className="text-lg font-semibold">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Returns
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white transition-colors duration-200">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 animate-fadeInUp" style={{animationDelay: '0.3s'}}>
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <FaMapMarkerAlt className="text-purple-400" />
                <span>456 Innovation Drive, Austin, TX 78701</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FaPhone className="text-purple-400" />
                <span>+1 (512) 555-0123</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FaEnvelope className="text-purple-400" />
                <span>hello@techmart.com</span>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="pt-4">
              <h5 className="font-semibold mb-2">Subscribe to our newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-l-lg focus:outline-none focus:border-purple-400 text-white placeholder-gray-400"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-r-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm animate-fadeInUp" style={{animationDelay: '0.4s'}}>
              © {currentYear} TechMart. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm animate-fadeInUp" style={{animationDelay: '0.5s'}}>
              <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-300 hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-300 hover:text-white transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
            <div className="text-sm animate-fadeInUp" style={{animationDelay: '0.6s'}}>
              <Link
                to="https://github.com/bhavin-dobar"
                className="text-purple-400 hover:text-purple-300 transition-colors duration-200 flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Made with <span className="text-red-500">❤️</span> by Bhavin Dobar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
