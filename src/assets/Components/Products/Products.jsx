import { useContext } from "react"; 
import { dataContext } from "../Context/DataContext";
import "./Products.css";

const Products = () => {
    const {data, addToCart} = useContext(dataContext);
    
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
