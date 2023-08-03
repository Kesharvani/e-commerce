import { useProduct } from "../../Contexts/ProductContext";
import Footer from "../../Components/Footer";
import ProductTile from "../../Components/ProductTile";
import "./Cart.css";
import {
  clearCart,
  updateQuantityFromCart,
} from "../../Services/cart/cartServices";
import { useAuth } from "../../Contexts/AuthContext";
import { ACTION_TYPE } from "../../Utils";
import { CartPrice } from "../../Components/CartPrice/CartPrice";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const navigate = useNavigate();
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
            onClick={() => clearCart(cart, loginToken, dispatch)}
          >
            Clear Cart
          </button>
        )}
        <div className="product-list">
          {cart?.map((item) => {
            return (
              <div key={item._id}>
                <ProductTile item={item} key={item._id} isInCart />
                <div className="inc-desc-container">
                  <button
                    className="btn"
                    onClick={() =>
                      updateQuantityFromCart(
                        item._id,
                        loginToken,
                        dispatch,
                        ACTION_TYPE.INCREASE_QTY
                      )
                    }
                    disabled={item.qty === 10}
                  >
                    +
                  </button>
                  <p>QTY:{item.qty}</p>
                  <button
                    className="btn"
                    onClick={() =>
                      updateQuantityFromCart(
                        item._id,
                        loginToken,
                        dispatch,
                        "DECREASE_QTY"
                      )
                    }
                    disabled={item.qty <= 1}
                  >
                    -
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {cart.length > 0 && (
          <div>
            <CartPrice />
            <button
              style={{ color: "white", padding: "1rem" }}
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};
export default Cart;
