import CartElements from "./CartElements"
import CartTotal from "./CartTotal"; 
import { useContext } from "react"; 
import { dataContext } from "../Context/DataContext";
import Navbar from "../Navbar/Navbar";

const CartContent = () => {
  const {cart} = useContext(dataContext);
  //Condicional para cuando no haya productos en el carrito no funciona, investigar como hacerlo
  return (
    <>  
      <Navbar />
      <CartElements />
      <CartTotal />
    </>
  )
  
};

export default CartContent
