import { useAppSelector } from "../redux/hooks";
import ProductList from "./ProductList";

interface TrendingProductsProps {
  loading?: boolean;
}

const TrendingProducts = ({ loading }: TrendingProductsProps) => {
  const featuredProducts = useAppSelector(
    (state) => state.productReducer.featuredProducts
  );

  return <ProductList title="Trending Products" products={featuredProducts} loading={loading} />;
};

export default TrendingProducts;
