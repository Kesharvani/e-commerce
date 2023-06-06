import ProductTile from "../../Components/ProductTile";
import Footer from "../../Components/Footer.jsx";
import { useParams } from "react-router-dom";
import { useProduct } from "../../Contexts/ProductContext";
export const IndividualPage = () => {
  const {state:{product}}=useProduct()
  const {_id}=useParams();
  const individualItem=product.find(item=>item._id===_id)
  return (
    <div>
      <ProductTile item={individualItem} isInIndividualPage></ProductTile>
      <Footer></Footer>
    </div>
  );
};
