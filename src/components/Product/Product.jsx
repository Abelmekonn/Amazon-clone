import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import classes from './Product.module.css';
import Loader from '../Loader/Loader';
import { DataContext } from '../DataProvider/DataProvider';
import { Type } from '../../Utility/action.type';

function Product() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setisLoading] = useState(false);

    useEffect(() => {
        setisLoading(true);
        axios
            .get("https://fakestoreapi.com/products")
            .then((res) => {
                if (Array.isArray(res.data)) {
                    setProducts(res.data);
                    setisLoading(false);
                } else {
                    setError("Invalid response: Expected an array");
                }
            })
            .catch((err) => {
                setError(err.message);
                setisLoading(false);
            });
    }, []);

    const [state, dispatch] = useContext(DataContext);

    const addToCart = (product) => {
        dispatch({
            type: Type.ADD_TO_BASKET,
            item: product,
        });
    };

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <div className={classes.landing_product}>
                    {products.map((product) => (
                        <div key={product.id} className={classes.product}>
                            <Link to={`products/${product.id}`} className={classes.anchor}>
                                <img src={product.image} alt="product" />
                            </Link>
                            <h3>{product.title}</h3>
                            <div className={classes.review}>
                                <span style={{ color: 'gold' }}>{product.rating.rate}</span>
                                <span style={{ paddingLeft: "5px" }}>{product.rating.count}</span>
                            </div>
                            <p>${product.price}</p>
                            <button className={classes.button} onClick={() => addToCart(product)}>Add to cart</button>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

export default Product;
