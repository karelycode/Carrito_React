import { useContext } from "react"; 
import { dataContext } from "../Context/DataContext";

import "./CartContent.css";

import CartItemCounter from "./CartItemCounter";

const CartElements = () => {
  const {cart, setCart} = useContext(dataContext);

    const deleteProduct = (id) => {
        const foundId = cart.find((item) => item.id === id);
        const newCart = cart.filter((item) => {
            return item !== foundId;
        });

        setCart(newCart);
    };

    return cart.map((product) => {
        return (
            <div className="cartContent" key={product.id}>
                <img src={product.image} alt="img-product-cart"/>
                <h3 className="name">{product.name}</h3>
                <CartItemCounter product={product} />
                <h4 className="price">${product.price * product.quanty}</h4>
                <h3 className="cart-delete-button" onClick={()=>deleteProduct(product.id)}>✖️</h3>
            </div>
        );
    });
}

export default CartElements
