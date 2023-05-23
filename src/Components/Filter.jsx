import "./Filter.css";
import { useState } from "react";
const Filter = () => {
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
          <button id="clr-btn">Clear</button>
        </div>
        <div className="price">
          <strong>Price</strong>
          <label htmlFor="">
            <input type="radio" value="high-to-low" />
            High to Low
          </label>
          <label htmlFor="">
            <input type="radio" value="low-to-high" />
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
          />
          <datalist id="markers">
            <option value="0"></option>
            <option value="25"></option>
            <option value="50"></option>
            <option value="75"></option>
            <option value="100"></option>
          </datalist>
        </div>
        <div className="categories">
          <strong>Categories</strong>
          <label htmlFor="">
            <input type="checkbox" />
            Books
          </label>
          <label htmlFor="">
            <input type="checkbox" />
            Fashion
          </label>
          <label htmlFor="">
            <input type="checkbox" />
            Groceries
          </label>
        </div>
        <div className="rating">
          <strong>Rating</strong>
          <label htmlFor="">
            <input type="radio" />1 Star & above
          </label>
          <label htmlFor="">
            <input type="radio" />2 Stars & above
          </label>
          <label htmlFor="">
            <input type="radio" />3 Stars & above
          </label>
          <label htmlFor="">
            <input type="radio" />4 Stars & above
          </label>
        </div>
      </div>
    </div>
  );
};
export default Filter;
