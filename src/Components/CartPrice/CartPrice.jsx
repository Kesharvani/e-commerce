import { useProduct } from "../../Contexts/ProductContext";
export const CartPrice = () => {
  const { state } = useProduct();
  const totalPriceOfProductsInCart = state.cart.reduce(
    (acc, curr) => curr.price * curr.qty + acc,
    0
  );
  return (
    <div style={{margin:'1.5rem'}}>
      <p>Total Price:&#8377;{totalPriceOfProductsInCart}</p>
      <p>Shipping and Delivery is free!!</p>
    </div>
  );
};
