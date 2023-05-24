import "./Category.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { categoryService } from "../Services/category/categoryService";

const Category = () => {
  const [category, setCategory] = useState([]);
  const getCategoryData = async () => {
    try {
      const {
        data: { categories },
        status,
      } = await categoryService();
      if (status === 200) {
        setCategory(categories);
      }
    } catch (error) {
      console.error("error in category:", error);
    }
  };
  useEffect(() => {
    getCategoryData();
  }, []);
  return (
    <div className="category-container">
      {category &&
        category?.map((item) => {
          return (
            <section className="category-card" key={item._id}>
              <Link to="/landing">
                <img src={item?.imageUrl} alt="foodImage" />
              </Link>
              <strong>{item.categoryName.toUpperCase()}</strong>
            </section>
          );
        })}
    </div>
  );
};
export default Category;
