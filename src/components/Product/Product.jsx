import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import { ProductUrl } from '../../Api/endPoints';
import classes from './Product.module.css';
import Loader from '../Loader/Loader';
function Product() {
    const {image,title,id,rating,price,description}=product;
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setisLoading] = useState(false)

    useEffect(() => {
        setisLoading(true)
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                if (Array.isArray(res.data)) {
                    setProducts(res.data);
                    setisLoading(false)

                } else {
                    setError("Invalid response: Expected an array");
                }
            })
            .catch((err) => {
                setError(err.message);
                setisLoading(false)

            });
    }, []);



    return (
        <>
        {
            isLoading?(<Loader />):(
                <div className={classes.landing_product}>
                {products.map((product) => (
                    <div key={id} className={classes.product}>
                        <Link to={`products/${id}`} className={classes.anchor}>
                            <img src={image} alt="product" />
                        </Link>
                        <h3>{title}</h3>
                        <div className={classes.review}>
                            <span style={{ color: 'gold' }}>{rating.rate}</span>
                            <span style={{ paddingLeft: "5px" }}>{rating.count}</span>
                        </div>
                        <p>${price}</p>
                        <button className={classes.button}>Add to cart</button>
                    </div>
                ))}
            </div>
            )
        }
            
        </>
    );
}

export default Product;
