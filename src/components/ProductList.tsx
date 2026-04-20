import { FC } from "react";
import { Product } from "../models/Product";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";

const ProductList: FC<{ title: string; products: Product[] | undefined; loading?: boolean }> = ({
  title,
  products,
  loading = false,
}) => {
  const isLoading = loading || !products || products.length === 0;
  
  return (
    <div className="container mt-8 mx-auto px-4 dark:bg-slate-800">
      <div className="sm:flex items-center justify-between mb-6">
        <h2 className="text-4xl font-medium font-lora dark:text-white animate-fadeInUp">
          {title}
        </h2>
        {!isLoading && products && (
          <span className="text-gray-500 dark:text-gray-400 text-sm animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            {products.length} products
          </span>
        )}
      </div>
      
      <div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 stagger-animation"
        data-test="product-list-container"
      >
        {isLoading ? (
          // Show skeleton loaders while loading
          [...Array(8)].map((_, index) => (
            <ProductCardSkeleton key={`skeleton-${index}`} />
          ))
        ) : (
          // Show actual products when loaded
          products?.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              category={product.category}
              title={product.title}
              price={product.price}
              thumbnail={product.thumbnail}
              rating={product.rating}
              discountPercentage={product.discountPercentage}
            />
          ))
        )}
      </div>
      
      {/* Empty state */}
      {!isLoading && (!products || products.length === 0) && (
        <div className="text-center py-12 animate-fadeInUp">
          <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No products found</h3>
          <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
