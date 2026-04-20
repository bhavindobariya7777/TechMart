import { FC } from "react";

const ProductCardSkeleton: FC = () => {
  return (
    <div className="group relative bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 animate-pulse">
      {/* Skeleton for discount badge */}
      <div className="absolute top-3 left-3 z-10 w-12 h-6 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
      
      {/* Skeleton for image */}
      <div className="relative overflow-hidden bg-gray-100 dark:bg-gray-700">
        <div className="w-full h-64 skeleton"></div>
      </div>

      {/* Skeleton for product info */}
      <div className="p-4 space-y-3">
        {/* Category skeleton */}
        <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
        
        {/* Title skeleton */}
        <div className="space-y-2">
          <div className="h-6 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
        
        {/* Rating skeleton */}
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
          ))}
        </div>
        
        {/* Price and button skeleton */}
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-4 w-12 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
          <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
