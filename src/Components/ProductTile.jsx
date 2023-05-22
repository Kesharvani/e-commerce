import "./ProductTile.css";
const ProductTile = ({ item }) => {
  return (
    <div className="card">
      <img src={item.image} alt="" />
      <h3>{item.title}</h3>
      <p>{item.type}</p>
    </div>
  );
};
export default ProductTile;
