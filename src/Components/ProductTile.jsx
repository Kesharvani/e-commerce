import "./ProductTile.css";
import { addToCart, removeFromCart } from "../Services/cart/cartServices";
import {
  addToWishlist,
  removeFromWishlist,
} from "../Services/wishlist/wishlistServices";
import toast from "react-hot-toast";
import { useAuth } from "../Contexts/AuthContext";
import { useProduct } from "../Contexts/ProductContext";
import { useNavigate, Link } from "react-router-dom";
const ProductTile = ({ item, isInCart, isInWishlist, isInIndividualPage }) => {
  const navigate = useNavigate();
  const { loginToken } = useAuth();
  const {
    dispatch,
    state: { wishlist, cart },
  } = useProduct();

  return (
    <div className="card">
      <Link to={`/individual/${item._id}`}>
        <img src={item.thumbnail} alt={`productImage${item.title}`} />
      </Link>
      <h3 id="title">{item.title}</h3>
      <p>{item.category}</p>
      <p>Price:{item.price}</p>
      {isInIndividualPage && <p>Rating:{item?.rating}</p>}
      {isInCart ? (
        <button
          onClick={() => removeFromCart(item, loginToken, dispatch, toast)}
        >
          Remove from cart
        </button>
      ) : cart?.find((data) => data._id === item._id) ? (
        <button onClick={() => navigate("/cart")}>Go to cart</button>
      ) : (
        <button onClick={() => addToCart(item, loginToken, dispatch, toast)}>
          Add to cart
        </button>
      )}
      {isInWishlist || wishlist?.find((data) => data._id === item._id) ? (
        <button
          onClick={() => removeFromWishlist(item, loginToken, dispatch, toast)}
        >
          Remove from wishlist
        </button>
      ) : (
        <button
          onClick={() => addToWishlist(loginToken, item, dispatch, toast)}
        >
          Add to Wishlist
        </button>
      )}
    </div>
  );
};
export default ProductTile;
