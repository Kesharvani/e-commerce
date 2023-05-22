import Filter from "../Components/Filter";
import Footer from "../Components/Footer";
import ProductTile from "../Components/ProductTile";
import "./LandingPage.css";
const LandingPage = () => {
  const arr = [
    {
      image:
        "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: "food",
      title: "Sabse acha food",
    },
    {
      image:
        "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: "food",
      title: "Sabse acha food",
    },
    {
      image:
        "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: "food",
      title: "Sabse acha food",
    },
    {
      image:
        "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: "food",
      title: "Sabse acha food",
    },
    {
      image:
        "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: "food",
      title: "Sabse acha food",
    },
    {
      image:
        "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: "food",
      title: "Sabse acha food",
    },
  ];
  return (
    <div>
      <div className="filter-productlist-container">
        <Filter />
        <div className="product-list">
          {arr.map((item) => {
            return <ProductTile item={item} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default LandingPage;
