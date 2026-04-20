import { useAppSelector } from "../redux/hooks";
import ProductList from "./ProductList";

interface LatestProductsProps {
  loading?: boolean;
}

const LatestProducts = ({ loading }: LatestProductsProps) => {
  const newProducts = useAppSelector(
    (state) => state.productReducer.newProducts
  );

  return <ProductList title="New Arrivals" products={newProducts} loading={loading} />;
};

export default LatestProducts;
