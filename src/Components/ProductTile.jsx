import "./ProductTile.css";
const ProductTile = ({ item }) => {
  return (
    <div className="card">
      <img src={item.thumbnail} alt={`productImage${item.title}`} />
      <h3>{item.title}</h3>
      <p>{item.category}</p>
    </div>
  );
};
export default ProductTile;
