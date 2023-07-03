

import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import './style.css'
const Products = () =>{
    const [products, setProducts] = useState([]);

    useEffect (() =>{
        const getproduct = async () => {
            try{
                const response = await fetch ('https://dummyjson.com/products?limit=8');
                const data = await response.json();
                setProducts(data.products);
            }
            catch (error){
                console.error(error);
            }
        };

        getproduct();
        
    },[]);

    const AddProduct = (product)=> {
        console.log('New product:', product);
    };

    return(
        <div id="products">
            {/* <Link to = "/newproduct" className = "productbtn" > New Product</Link> */}
            <div className="newproducts">
                {products.map((item) =>(
                    <Link to={`/product/${item.id}`} key={item.id} className="product-link">
                    <div className="details">
                      <img src={item.thumbnail} alt={item.title} className="img"/>
                      <h2>{item.title}</h2>
                      <p>{item.price}</p>
                      <p>{item.discountPercentage}</p>
                    </div>
                  </Link>
                ))}
            </div>
        </div>
    );

}

export default Products






