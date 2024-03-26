import CartElements from "./CartElements"
import CartTotal from "./CartTotal"; 
import { useContext } from "react"; 
import { dataContext } from "../Context/DataContext";

const CartContent = () => {
  const {cart} = useContext(dataContext);

  return cart.lengt > 0 ?(
    <>  
      <CartElements />
      <CartTotal />
    </>
  ):(
    <h2>No hay productos en el carrito</h2>
  );
  
};

export default CartContent
