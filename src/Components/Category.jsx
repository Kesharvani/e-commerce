import "./Category.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useProduct } from "../Contexts/ProductContext";
import { categoryService } from "../Services/category/categoryService";
import { ACTION_TYPE } from "../Utils";
import { Loader } from "../Components/Loader/Loader";

const Category = () => {
  const { dispatch } = useProduct();
  const categoryHandler = (item) => {
    dispatch({ type: ACTION_TYPE.CLEAR_FILTER });
    dispatch({ type: ACTION_TYPE.CATEGORY, payload: item.categoryName });
  };
  const [category, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getCategoryData = async () => {
    setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getCategoryData();
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="category-container">
          {category &&
            category?.map((item) => {
              return (
                <section className="category-card" key={item._id}>
                  <Link to="/landing" onClick={() => categoryHandler(item)}>
                    <img src={item?.imageUrl} alt="foodImage" />
                  </Link>
                  <strong>{item?.categoryName.toUpperCase()}</strong>
                </section>
              );
            })}
        </div>
      )}
    </>
  );
};
export default Category;
