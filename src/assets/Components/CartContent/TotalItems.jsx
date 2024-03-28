import { useContext } from "react"; 
import { dataContext } from "../Context/DataContext";

const TotalItems = () => {
    const {cart} = useContext(dataContext);
    const itemsQuantity = cart.reduce((acc, current) => acc + current.quanty, 0);
    return (
        <span className="cart-items-total">{itemsQuantity}</span>
    )
}

export default TotalItems
