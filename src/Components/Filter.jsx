import "./Filter.css";
const Filter = () => {
  return (
    <div className="filter-container">
      <div className="label-btn-container">
        <strong>Filter</strong>
        <button>Clear</button>
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
        <label for="temp">Price Range</label>
        <input type="range" id="temp" name="temp" list="markers" />
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
          Clothes
        </label>
        <label htmlFor="">
          <input type="checkbox" />
          Food
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
  );
};
export default Filter;
