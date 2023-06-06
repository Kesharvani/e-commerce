import "./Filter.css";
import { useState } from "react";
import { useProduct } from "../Contexts/ProductContext";
import { ACTION_TYPE } from "../Utils";
const Filter = () => {
  const { dispatch, state } = useProduct();
  const [toggleFilter, setToggleFilter] = useState(false);
  return (
    <div>
      <button
        onClick={() => setToggleFilter(!toggleFilter)}
        className="filter-hamburger"
      >
        {toggleFilter ? "CloseButton" : "Hamburger"}
      </button>
      <div
        className={
          toggleFilter ? "filter-container" : "filter-container-display"
        }
      >
        <div className="label-btn-container">
          <strong>Filter</strong>
          <button
            id="clr-btn"
            onClick={() => dispatch({ type: ACTION_TYPE.CLEAR_FILTER })}
          >
            Clear
          </button>
        </div>
        <div className="price">
          <strong>Price</strong>
          <label htmlFor="">
            <input
              type="radio"
              value="HIGH_TO_LOW"
              name="price"
              checked={state.price === "HIGH_TO_LOW"}
              onChange={(e) =>
                dispatch({
                  type: ACTION_TYPE.HIGH_TO_LOW,
                  payload: e.target.value,
                })
              }
            />
            High to Low
          </label>
          <label htmlFor="">
            <input
              type="radio"
              value="LOW_TO_HIGH"
              name="price"
              checked={state.price === "LOW_TO_HIGH"}
              onChange={(e) =>
                dispatch({
                  type: ACTION_TYPE.LOW_TO_HIGH,
                  payload: e.target.value,
                })
              }
            />
            Low to high
          </label>
        </div>
        <div className="price-range">
          <label htmlFor="price-range">Price Range</label>
          <input
            type="range"
            id="price-range"
            name="price-range"
            list="markers"
            max="1000"
            defaultValue={1000}
            onChange={(e) =>
              dispatch({
                type: ACTION_TYPE.PRICE_RANGE,
                payload: e.target.value,
              })
            }
          />
          <datalist id="markers">
            <option value="0"></option>
            <option value="250"></option>
            <option value="500"></option>
            <option value="750"></option>
            <option value="1000"></option>
          </datalist>
        </div>
        <div className="categories">
          <strong>Categories</strong>
          <label htmlFor="">
            <input
              type="checkbox"
              value="book"
              checked={state.categories.includes("book")}
              onChange={(e) =>
                dispatch({
                  type: ACTION_TYPE.CATEGORY,
                  payload: e.target.value,
                })
              }
            />
            Books
          </label>
          <label htmlFor="">
            <input
              type="checkbox"
              value="fashion"
              checked={state.categories.includes("fashion")}
              onChange={(e) =>
                dispatch({
                  type: ACTION_TYPE.CATEGORY,
                  payload: e.target.value,
                })
              }
            />
            Fashion
          </label>
          <label htmlFor="">
            <input
              type="checkbox"
              value="home-appliances"
              checked={state.categories.includes("home-appliances")}
              onChange={(e) =>
                dispatch({
                  type: ACTION_TYPE.CATEGORY,
                  payload: e.target.value,
                })
              }
            />
            Home-Appliences
          </label>
          <label htmlFor="">
            <input
              type="checkbox"
              value="groceries"
              checked={state.categories.includes("groceries")}
              onChange={(e) =>
                dispatch({
                  type: ACTION_TYPE.CATEGORY,
                  payload: e.target.value,
                })
              }
            />
            Groceries
          </label>
        </div>
        <div className="rating">
          <strong>Rating</strong>
          <label htmlFor="">
            <input
              type="radio"
              value="1"
              name="rating"
              checked={state.rating === "1"}
              onChange={(e) =>
                dispatch({
                  type: ACTION_TYPE.RATING,
                  payload: e.target.value,
                })
              }
            />
            1 Star & above
          </label>
          <label htmlFor="">
            <input
              type="radio"
              value="2"
              name="rating"
              checked={state.rating === "2"}
              onChange={(e) =>
                dispatch({
                  type: ACTION_TYPE.RATING,
                  payload: e.target.value,
                })
              }
            />
            2 Stars & above
          </label>
          <label htmlFor="">
            <input
              type="radio"
              value="3"
              name="rating"
              checked={state.rating === "3"}
              onChange={(e) =>
                dispatch({
                  type: ACTION_TYPE.RATING,
                  payload: e.target.value,
                })
              }
            />
            3 Stars & above
          </label>
          <label htmlFor="">
            <input
              type="radio"
              value="4"
              name="rating"
              checked={state.rating === "4"}
              onChange={(e) =>
                dispatch({
                  type: ACTION_TYPE.RATING,
                  payload: e.target.value,
                })
              }
            />
            4 Stars & above
          </label>
        </div>
      </div>
    </div>
  );
};
export default Filter;
