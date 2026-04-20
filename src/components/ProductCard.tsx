import { FC } from "react";
import { Product } from "../models/Product";
import RatingStar from "./RatingStar";
import { addToCart } from "../redux/features/cartSlice";
import { useAppDispatch } from "../redux/hooks";
import toast from "react-hot-toast";
import { AiOutlineShoppingCart, AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import PriceSection from "./PriceSection";
import useAuth from "../hooks/useAuth";

const ProductCard: FC<Product> = ({
  id,
  price,
  thumbnail,
  title,
  category,
  rating,
  discountPercentage,
}) => {
  const dispatch = useAppDispatch();
  const { requireAuth } = useAuth();

  const addCart = () => {
    requireAuth(() => {
      dispatch(
        addToCart({
          id,
          price,
          title,
          category,
          rating,
          thumbnail,
          discountPercentage,
        })
      );
      toast.success("Item added to cart successfully!", {
        duration: 3000,
        position: 'bottom-center',
      });
    });
  };

  return (
    <div 
      className="group relative bg-white dark:bg-slate-800 rounded-xl shadow-lg hover-lift overflow-hidden border border-gray-100 dark:border-gray-700 transition-all duration-300"
      data-test="product-card"
    >
      {/* Discount badge */}
      {discountPercentage && discountPercentage > 0 && (
        <div className="absolute top-3 left-3 z-10 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
          -{discountPercentage}%
        </div>
      )}
      
      {/* Quick action buttons */}
      <div className="absolute top-3 right-3 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          className="w-10 h-10 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200 hover:bg-red-500 hover:text-white"
          title="Add to wishlist"
        >
          <AiOutlineHeart className="text-lg" />
        </button>
        <Link
          to={`/product/${id}`}
          className="w-10 h-10 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200 hover:bg-blue-500 hover:text-white"
          title="Quick view"
        >
          <AiOutlineEye className="text-lg" />
        </Link>
      </div>

      {/* Product image container */}
      <div className="relative overflow-hidden bg-gray-50 dark:bg-slate-900">
        <Link to={`/product/${id}`} className="block">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110"
            loading="lazy"
          />
          {/* Overlay gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Link>
      </div>

      {/* Product info */}
      <div className="p-4">
        {/* Category */}
        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide mb-2">
          {category}
        </p>
        
        {/* Title */}
        <Link
          to={`/product/${id}`}
          className="block font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 line-clamp-2"
          title={title}
        >
          {title}
        </Link>
        
        {/* Rating */}
        <div className="mt-3">
          <RatingStar rating={rating} />
        </div>
        
        {/* Price and Cart button */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex-1">
            {discountPercentage && discountPercentage > 0 ? (
              <PriceSection discountPercentage={discountPercentage} price={price} />
            ) : (
              <p className="text-xl font-bold text-gray-900 dark:text-white">
                ${price}
              </p>
            )}
          </div>
          
          <button
            type="button"
            className="gradient-primary text-white p-3 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 hover-glow z-40"
            onClick={addCart}
            data-test="add-cart-btn"
            title="Add to Cart"
          >
            <AiOutlineShoppingCart className="text-lg" />
          </button>
        </div>
      </div>

      {/* Loading state overlay */}
      <div className="absolute inset-0 bg-white/80 dark:bg-slate-800/80 flex items-center justify-center opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
          <p className="text-sm text-gray-600 dark:text-gray-300">Quick View</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
