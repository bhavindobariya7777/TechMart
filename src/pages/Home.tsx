import { FC, useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import TrendingProducts from "../components/TrendingProducts";
import { useAppDispatch } from "../redux/hooks";
import {
  updateNewList,
  updateFeaturedList,
} from "../redux/features/productSlice";
import { Product } from "../models/Product";
import LatestProducts from "../components/LatestProducts";
import Banner from "../components/Banner";
import { API_ENDPOINTS } from "../api";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  // Scroll animation hooks
  const featuresAnimation = useScrollAnimation({ threshold: 0.2 });
  const trendingAnimation = useScrollAnimation({ threshold: 0.1, animationClass: 'stagger-animation' });
  const bannerAnimation = useScrollAnimation({ threshold: 0.3 });
  const latestAnimation = useScrollAnimation({ threshold: 0.1, animationClass: 'stagger-animation' });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_ENDPOINTS.PRODUCTS}?limit=24`);
        const { products } = await response.json();
        
        const productList: Product[] = products.map((product: Product) => ({
          id: product.id,
          title: product.title,
          images: product.images,
          price: product.price,
          rating: product.rating,
          thumbnail: product.thumbnail,
          description: product.description,
          category: product.category,
          discountPercentage: product.discountPercentage,
        }));
        
        dispatch(updateFeaturedList(productList.slice(0, 8)));
        dispatch(updateNewList(productList.slice(8, 16)));
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [dispatch]);

  return (
    <div className="dark:bg-slate-800">
      <HeroSection />
      
      {/* Features Section with Scroll Animation */}
      <section 
        ref={featuresAnimation.ref}
        className={`${featuresAnimation.isVisible ? featuresAnimation.animationClass : 'opacity-0'}`}
      >
        <Features />
      </section>
      
      {/* Trending Products with Staggered Animation */}
      <section 
        ref={trendingAnimation.ref}
        className={`${trendingAnimation.isVisible ? trendingAnimation.animationClass : 'opacity-0'}`}
      >
        <TrendingProducts loading={loading} />
      </section>
      
      {/* Banner with Parallax Effect */}
      <section 
        ref={bannerAnimation.ref}
        className={`${bannerAnimation.isVisible ? bannerAnimation.animationClass : 'opacity-0'}`}
      >
        <Banner />
      </section>
      
      {/* Latest Products with Staggered Animation */}
      <section 
        ref={latestAnimation.ref}
        className={`${latestAnimation.isVisible ? latestAnimation.animationClass : 'opacity-0'}`}
      >
        <LatestProducts loading={loading} />
      </section>
      
      <br />
    </div>
  );
};

export default Home;
