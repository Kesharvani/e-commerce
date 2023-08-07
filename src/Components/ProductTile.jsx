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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const ProductTile = ({ item, isInCart, isInWishlist, isInIndividualPage }) => {
  const navigate = useNavigate();
  const { loginToken } = useAuth();
  const {
    dispatch,
    state: { wishlist, cart },
  } = useProduct();

  return (
    <div className={item.in_stock ? "card" : "card card-disable"}>
      <Link to={`/individual/${item._id}`}>
        <div
          style={{ backgroundImage: `url(${item.thumbnail})` }}
          className="image-container"
        ></div>
        {/* <img src={item.thumbnail} alt={`productImage${item.title}`} /> */}
      </Link>
      <h3 id="title">{item.title}</h3>
      <div className="category-price">
        <p>{item.category}</p>
        <p>Price:&#8377;{item.price}</p>
      </div>
      {isInIndividualPage && <p>Rating:{item?.rating}</p>}
      {isInCart ? (
        <button
          onClick={() => removeFromCart(item, loginToken, dispatch, toast)}
          className="btn-cart"
        >
          Remove from cart
        </button>
      ) : cart?.find((data) => data._id === item._id) ? (
        <button onClick={() => navigate("/cart")} className="btn-cart">
          Go to cart
        </button>
      ) : (
        <button
          onClick={() => addToCart(item, loginToken, dispatch, toast)}
          className="btn-cart"
        >
          Add to cart
        </button>
      )}
      {isInWishlist || wishlist?.find((data) => data._id === item._id) ? (
        <FontAwesomeIcon
          icon={faHeart}
          onClick={() => removeFromWishlist(item, loginToken, dispatch, toast)}
          className="fill-icon-wishlist"
        />
      ) : (
        <FontAwesomeIcon
          icon={faHeart}
          onClick={() => addToWishlist(loginToken, item, dispatch, toast)}
          className="icon-wishlist"
        />
      )}
    </div>
  );
};
export default ProductTile;
