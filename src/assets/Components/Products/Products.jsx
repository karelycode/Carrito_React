import { useContext } from "react"; 
import { dataContext } from "../Context/DataContext";
import "./Products.css";

const Products = () => {
    const {data, cart, setCart} = useContext(dataContext);
    
    const addToCart = (product) => {
        console.log(product);
        setCart([...cart, product]);
    };
    
    return data.map((product) => {
        return (
            <div className="card" key={product.id}>
                <img src={product.image} alt="img-product-card"/>
                <h3>{product.name}</h3>
                <h4>${product.price}</h4>
                <button onClick={()=> addToCart(product)}>Add to cart</button>
            </div>
        );
    });
}

export default Products
