import "./Category.css";
import { Link } from "react-router-dom";
const foodImage =
  "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const clothesImage =
  "https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const bookImage =
  "https://images.pexels.com/photos/7171398/pexels-photo-7171398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const Category = () => {
  return (
    <div className="category-container">
      <section className="category-card">
        <Link to="/landing">
          <img src={foodImage} alt="foodImage" />
        </Link>
        <strong>Food</strong>
      </section>
      <section className="category-card">
        <Link to="/landing">
          <img src={clothesImage} alt="foodImage" />
        </Link>
        <strong>Clothes</strong>
      </section>
      <section className="category-card">
        <Link to="/landing">
          <img src={bookImage} alt="foodImage" />
        </Link>
        <strong>Books</strong>
      </section>
    </div>
  );
};
export default Category;
