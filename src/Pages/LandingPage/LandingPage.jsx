import "./LandingPage.css";
import Filter from "../../Components/Filter";
import Footer from "../../Components/Footer";
import ProductTile from "../../Components/ProductTile";
import { useProduct } from "../../Contexts/ProductContext";
import { ACTION_TYPE } from "../../Utils";
import { Loader } from "../../Components/Loader/Loader";
const LandingPage = () => {
  const { state, isLoading } = useProduct();
  // price sort
  const priceFilter = state.product.sort((a, b) =>
    state.price === ACTION_TYPE.LOW_TO_HIGH
      ? a.price - b.price
      : b.price - a.price
  );
  // price range
  const priceRangeFilter = priceFilter.filter(
    (item) => item?.price <= state.priceRange
  );

  //Rating
  const ratingFilter = priceRangeFilter.filter(
    (item) => Number(item?.rating) >= Number(state.rating)
  );

  //categories

  const categoryFilter =
    state.categories.length > 0
      ? ratingFilter.filter((item) =>
          state.categories.some((category) => item["category"] === category)
        )
      : ratingFilter;

  // Search
  const searchFilter =
    state.searchTerm !== ""
      ? categoryFilter.filter((item) =>
          item.title.toUpperCase().includes(state.searchTerm.toUpperCase())
        )
      : categoryFilter;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div className="filter-productlist-container">
            <Filter />
            <div className="product-list">
              {searchFilter.map((item) => {
                return <ProductTile item={item} key={item.id} />;
              })}
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};
export default LandingPage;
