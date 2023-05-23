import "./LandingPage.css";
import Filter from "../Components/Filter";
import Footer from "../Components/Footer";
import ProductTile from "../Components/ProductTile";
import { useProduct } from "../Contexts/ProductContext";

const LandingPage = () => {
  const {
    state: { product },
  } = useProduct();

  return (
    <div>
      <div className="filter-productlist-container">
        <Filter />
        <div className="product-list">
          {product.map((item) => {
            return <ProductTile item={item} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default LandingPage;
