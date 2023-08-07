import "./Wishlist.css";
import { useProduct } from "../../Contexts/ProductContext";
import Footer from "../../Components/Footer";
import ProductTile from "../../Components/ProductTile";

const Wishlist = () => {
  const {
    state: { wishlist },
  } = useProduct();
  return (
    <div>
      {wishlist.length > 0 ? (
        <div className="product-list">
          {wishlist?.map((item) => {
            return <ProductTile item={item} key={item.id} isInWishlist />;
          })}
        </div>
      ) : (
        <h2 className="fallback-wishlist">
          Seems!! you have't added items to wishlist
        </h2>
      )}
      <Footer />
    </div>
  );
};
export default Wishlist;
