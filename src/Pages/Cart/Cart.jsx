import { useProduct } from "../../Contexts/ProductContext";
import Footer from "../../Components/Footer";
import ProductTile from "../../Components/ProductTile";
import "./Cart.css";
import { clearCart } from "../../Services/cart/cartServices";
import { useAuth } from "../../Contexts/AuthContext";

export const Cart = () => {
  const {
    dispatch,
    state: { cart },
  } = useProduct();
  const { loginToken } = useAuth();
  return (
    <div>
      <div className="cart-productlist-container">
        {cart.length > 0 && (
          <button
            className="clr-btn"
            onClick={() => clearCart(cart, loginToken,dispatch)}
          >
            Clear Cart
          </button>
        )}
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
