import "./Checkout.css";
import { useProduct } from "../../Contexts/ProductContext";
import ProductTile from "../../Components/ProductTile";
import { UserAddress } from "../UserAddress/UserAddress";
import { CartPrice } from "../../Components/CartPrice/CartPrice";
import { toast } from "react-hot-toast";
export const Checkout = () => {
  const { state } = useProduct();
  return (
    <>
      <div className="confirm-order">
        {state.cart.length > 0 && (
          <button
            style={{ color: "white", padding: "1rem", fontWeight: "bold",marginBottom:"2rem" }}
            onClick={() =>
              toast.success("Congratulation!! Order Placed Successfully")
            }
          >
            Confirm Order
          </button>
        )}
      </div>
      <div className="checkout-container">
        {state.cart.length > 0 &&
          state.cart.map((item) => {
            return (
              <div key={item._id}>
                <ProductTile item={item} />
              </div>
            );
          })}
        <CartPrice />
      </div>
      <hr />
      <div className="address-container-checkout">
        <h2>Choose Address Here</h2>
        <input type="radio" />
        <UserAddress />
      </div>
    </>
  );
};
