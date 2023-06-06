import "./Loader.css";
import loader from "../../Assets/loader.svg";
export const Loader = () => {
  return (
    <div className="loader">
      <img src={loader} alt="Loader" />
    </div>
  );
};
