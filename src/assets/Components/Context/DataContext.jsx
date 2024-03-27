import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() =>{
        axios("data.json").then((response) => {
            setData(response.data);
        });
    },[])

    const addToCart = (product) => {
        const productExist = cart.find((item) => item.id === product.id);
        if(productExist){
            setCart(cart.map((item) => item.id === product.id ? {...product, quanty: productExist.quanty + 1} : item));
        
        }else{
            setCart([...cart, product]);
        }
        
    };

    return(
        <dataContext.Provider value={{data, cart, setCart, addToCart}}>
            {children}
        </dataContext.Provider>
    )
};

export default DataProvider