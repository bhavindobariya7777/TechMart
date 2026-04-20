import { FC, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { setCartState } from "../redux/features/cartSlice";
import { updateModal } from "../redux/features/authSlice";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FaUser } from "react-icons/fa";
import CustomPopup from "./CustomPopup";
import { updateDarkMode } from "../redux/features/homeSlice";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import SearchBar from "./SearchBar";

const Navbar: FC = () => {
  const dispatch = useAppDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartCount = useAppSelector(
    (state) => state.cartReducer.cartItems.length
  );
  const username = useAppSelector((state) => state.authReducer.username);
  const isDarkMode = useAppSelector((state) => state.homeReducer.isDarkMode);
  const { requireAuth } = useAuth();

  const showCart = () => {
    requireAuth(() => dispatch(setCartState(true)));
  };

  const toggleTheme = () => {
    dispatch(updateDarkMode(!isDarkMode));
    document.body.classList.toggle("dark");
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="py-4 glass top-0 sticky z-50 shadow-xl font-karla backdrop-blur-lg transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="group flex items-center gap-2 text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent hover:from-purple-500 hover:to-blue-500 transition-all duration-300"
            data-test="main-logo"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300">
              T
            </div>
            TechMart
          </Link>

          <div className="hidden sm:block flex-1 max-w-md mx-8">
            <SearchBar onSearch={() => setIsMenuOpen(false)} />
          </div>

          <div className="hidden sm:flex gap-6 md:gap-8 items-center">
            <Link
              to="/products"
              className="text-lg font-semibold text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 relative group"
              data-test="main-products"
            >
              Products
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/categories"
              className="text-lg font-semibold text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 relative group"
              data-test="main-categories"
            >
              Categories
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            <div className="flex items-center gap-4">
              {/* User Profile */}
              <div className="flex items-center">
                {username !== "" ? (
                  <div className="relative group">
                    <img
                      src="https://robohash.org/Terry.png?set=set4"
                      alt="avatar"
                      className="w-8 h-8 rounded-full border-2 border-purple-500 group-hover:scale-110 transition-transform duration-200"
                    />
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-slate-800"></div>
                  </div>
                ) : (
                  <button
                    className="p-2 rounded-lg bg-gray-100 dark:bg-slate-700 hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors duration-200"
                    onClick={() => dispatch(updateModal(true))}
                    data-test="login-btn"
                  >
                    <FaUser className="text-gray-600 dark:text-gray-400 text-lg" />
                  </button>
                )}
                {username !== "" && <CustomPopup />}
              </div>

              {/* Cart */}
              <button
                className="relative p-2 rounded-lg bg-gray-100 dark:bg-slate-700 hover:bg-purple-100 dark:hover:bg-purple-900 transition-all duration-200 group"
                onClick={showCart}
                data-test="cart-btn"
              >
                <AiOutlineShoppingCart className="text-gray-600 dark:text-gray-400 text-lg group-hover:text-purple-600 dark:group-hover:text-purple-400" />
                {cartCount > 0 && (
                  <div
                    className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold animate-pulse"
                    data-test="cart-item-count"
                  >
                    {cartCount}
                  </div>
                )}
              </button>

              {/* Theme Toggle */}
              <button
                className="p-2 rounded-lg bg-gray-100 dark:bg-slate-700 hover:bg-purple-100 dark:hover:bg-purple-900 transition-all duration-200"
                onClick={toggleTheme}
              >
                {isDarkMode ? (
                  <MdOutlineLightMode className="text-yellow-500 text-lg" />
                ) : (
                  <MdOutlineDarkMode className="text-gray-600 text-lg" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="sm:hidden p-2 rounded-lg bg-gray-100 dark:bg-slate-700 hover:bg-purple-100 dark:hover:bg-purple-900 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-gray-600 dark:bg-gray-400 transform transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 bg-gray-600 dark:bg-gray-400 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 bg-gray-600 dark:bg-gray-400 transform transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden fixed inset-0 top-0 bg-black/60 backdrop-blur-sm z-40 animate-fadeInUp">
            <div className="absolute top-4 right-4 z-50">
              <button
                className="p-2 rounded-lg bg-white/20 backdrop-blur-lg text-white hover:bg-white/30 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <div className="w-6 h-5 flex flex-col justify-between">
                  <span className="block h-0.5 bg-white rotate-45 translate-y-2"></span>
                  <span className="block h-0.5 bg-white opacity-0"></span>
                  <span className="block h-0.5 bg-white -rotate-45 -translate-y-2"></span>
                </div>
              </button>
            </div>
            
            <div className="bg-white dark:bg-slate-800 h-full w-80 max-w-full ml-auto shadow-2xl animate-slideDown">
              <div className="p-6 space-y-6">
                {/* Mobile Search */}
                <div className="w-full">
                  <SearchBar onSearch={() => setIsMenuOpen(false)} />
                </div>

                {/* Mobile Navigation Links */}
                <nav className="space-y-4">
                  <Link
                    to="/products"
                    className="block text-lg font-semibold text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 py-2"
                    data-test="main-products"
                    onClick={handleLinkClick}
                  >
                    Products
                  </Link>

                  <Link
                    to="/categories"
                    className="block text-lg font-semibold text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 py-2"
                    data-test="main-categories"
                    onClick={handleLinkClick}
                  >
                    Categories
                  </Link>
                </nav>

                {/* Mobile User Actions */}
                <div className="space-y-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3">
                    {username !== "" ? (
                      <img
                        src="https://robohash.org/Terry.png?set=set4"
                        alt="avatar"
                        className="w-10 h-10 rounded-full border-2 border-purple-500"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-slate-700 flex items-center justify-center">
                        <FaUser className="text-gray-500 dark:text-gray-400" />
                      </div>
                    )}
                    <div className="flex-1">
                      {username !== "" ? (
                        <div className="font-semibold text-gray-700 dark:text-gray-300">
                          {username}
                        </div>
                      ) : (
                        <button
                          className="font-semibold text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                          onClick={() => {
                            dispatch(updateModal(true));
                            setIsMenuOpen(false);
                          }}
                          data-test="login-btn"
                        >
                          Sign In
                        </button>
                      )}
                    </div>
                  </div>

                  <button
                    className="flex items-center gap-3 w-full p-3 rounded-lg bg-gray-100 dark:bg-slate-700 hover:bg-purple-100 dark:hover:bg-purple-900 transition-all duration-200"
                    onClick={() => {
                      showCart();
                      setIsMenuOpen(false);
                    }}
                    data-test="cart-btn"
                  >
                    <div className="relative">
                      <AiOutlineShoppingCart className="text-xl text-gray-600 dark:text-gray-400" />
                      {cartCount > 0 && (
                        <div
                          className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-bold"
                          data-test="cart-item-count"
                        >
                          {cartCount}
                        </div>
                      )}
                    </div>
                    <span className="font-semibold text-gray-700 dark:text-gray-300">
                      Cart ({cartCount})
                    </span>
                  </button>

                  <button
                    className="flex items-center gap-3 w-full p-3 rounded-lg bg-gray-100 dark:bg-slate-700 hover:bg-purple-100 dark:hover:bg-purple-900 transition-all duration-200"
                    onClick={() => {
                      toggleTheme();
                      setIsMenuOpen(false);
                    }}
                  >
                    {isDarkMode ? (
                      <MdOutlineLightMode className="text-xl text-yellow-500" />
                    ) : (
                      <MdOutlineDarkMode className="text-xl text-gray-600" />
                    )}
                    <span className="font-semibold text-gray-700 dark:text-gray-300">
                      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;