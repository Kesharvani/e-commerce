import Footer from "../../Components/Footer.jsx";
import Category from "../../Components/Category.jsx";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../../Contexts/ProductContext.jsx";
const Home = () => {
  const { state } = useProduct();
  const navigate = useNavigate();
  if (state.searchTerm !== "") {
    navigate("/landing");
  }
  return (
    <>
      <div>
        <Category />
        <Footer />
      </div>
    </>
  );
};
export default Home;
