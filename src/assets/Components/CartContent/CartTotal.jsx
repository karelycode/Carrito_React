import { useContext } from "react"; 
import { dataContext } from "../Context/DataContext";

const CartTotal = () => {
    const {cart} = useContext(dataContext);
    const total = cart.reduce((acc, current) => acc + current.price * current.quanty, 0);
    if(total !== 0){
        return (
            <div className="cartTotal">
                <h3>Total a pagar: ${total}</h3>
            </div>
        )
    }else{
        return (
            <div className="cartTotal">
                <h3>No hay nada en el carrito</h3>
            </div>
        )
    }
}

export default CartTotal
