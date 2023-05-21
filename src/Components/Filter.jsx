import "./Filter.css";
const Filter = () => {
  return (
    <div className="filter-container">
      <div className="label-btn-container">
        <strong>Filter</strong>
        <button>Clear</button>
      </div>
      <div className="">
        <strong>Price</strong>
        <label htmlFor="">
          <input type="radio" value="high-to-low" />
          High to Low
        </label>
        <label htmlFor="">
          {" "}
          <input type="radio" value="low-to-high" />
          Low to high
        </label>
      </div>
      <div>
        <strong>Price Range</strong>
      </div>
      <div>
        <strong>Categories</strong>
      </div>
      <div>
        <strong>Rating</strong>
      </div>
    </div>
  );
};
export default Filter;
