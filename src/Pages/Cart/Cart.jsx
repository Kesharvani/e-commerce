import { useProduct } from "../../Contexts/ProductContext";
import Footer from "../../Components/Footer";
import ProductTile from "../../Components/ProductTile";

export const Cart = () => {
  const {
    state: { cart },
  } = useProduct();
  return (
    <div>
      <div className="filter-productlist-container">
        <div className="product-list">
          {cart?.map((item) => {
            return <ProductTile item={item} key={item.id} isInCart />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};
