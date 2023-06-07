import "./Checkout.css";
import { useProduct } from "../../Contexts/ProductContext";
import ProductTile from "../../Components/ProductTile";
import { CartPrice } from "../../Components/CartPrice/CartPrice";
import { toast } from "react-hot-toast";
export const Checkout = () => {
  const { state ,addAddress} = useProduct();
  return (
    <>
      <div className="confirm-order">
        {state.cart.length > 0 && (
          <button
            style={{
              color: "white",
              padding: "1rem",
              fontWeight: "bold",
              marginBottom: "2rem",
            }}
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
        {addAddress.map((item) => {
          return (
            <>
              <label htmlFor="address"></label>
              <input type="radio" name="address" />

              <div>
                <h3>Name:{item.name}</h3>
                <p>Street:{item?.street}</p>
                <p>City:{item.city}</p>
                <p>State:{item?.state}</p>
                <p>Country:{item.country}</p>
                <p>Zipcode:{item.zipCode}</p>
                <p>Mobile:{item?.mobile}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
