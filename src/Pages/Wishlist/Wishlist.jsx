import { useProduct } from "../../Contexts/ProductContext";
import Footer from "../../Components/Footer";
import ProductTile from "../../Components/ProductTile";

export const Wishlist = () => {
  const {
    state: { wishlist },
  } = useProduct();
  return (
    <div>
      <div className="filter-productlist-container">
        <div className="product-list">
          {wishlist?.map((item) => {
            return <ProductTile item={item} key={item.id} isInWishlist />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};
