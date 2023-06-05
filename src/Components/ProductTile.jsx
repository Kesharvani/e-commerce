import "./ProductTile.css";
import { addToCart, removeFromCart } from "../Services/cart/cartServices";
import {
  addToWishlist,
  removeFromWishlist,
} from "../Services/wishlist/wishlistServices";
import { useAuth } from "../Contexts/AuthContext";
import { useProduct } from "../Contexts/ProductContext";

const ProductTile = ({ item, isInCart, isInWishlist }) => {
  const { loginToken } = useAuth();
  const {
    dispatch,
    state: { wishlist, cart },
  } = useProduct();

  return (
    <div className="card">
      <img src={item.thumbnail} alt={`productImage${item.title}`} />
      <h3>{item.title}</h3>
      <p>{item.category}</p>
      <p>{item.price}</p>
      <p>{item?.rating}</p>
      {isInCart ? (
        <button onClick={() => removeFromCart(item, loginToken, dispatch)}>
          Remove from cart
        </button>
      ) : (
        <button
          onClick={() => addToCart(item, loginToken, dispatch)}
          disabled={cart?.find((data) => data._id === item._id)}
        >
          Add to cart
        </button>
      )}
      {isInWishlist ? (
        <button onClick={() => removeFromWishlist(item, loginToken, dispatch)}>
          Remove from wishlist
        </button>
      ) : (
        <button
          onClick={() => addToWishlist(loginToken, item, dispatch)}
          disabled={wishlist?.find((data) => data._id === item._id)}
        >
          Add to Wishlist
        </button>
      )}
    </div>
  );
};
export default ProductTile;
