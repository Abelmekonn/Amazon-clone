import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import classes from './Product.module.css';
import { DataContext } from '../DataProvider/DataProvider';
import {Type} from '../../Utility/action.type'

function ProductCard({ product,flex,renderDesc,renderAdd }) {
    const {image,title,id,rating,price,description}=product;
    if (!product || !rating) {
        return null; 
    }

    const rate = rating.rate;
    const fullStars = Math.floor(rate);
    const hasHalfStar = rate - fullStars >= 0.5;
    const remainingStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < fullStars; i++) {
            stars.push(<span key={i} style={{color: 'gold'}}>&#9733;</span>);
        }
        if (hasHalfStar) {
            stars.push(<span key="half" style={{color: 'gold'}}>&#9733;</span>);
        }
        for (let i = 0; i < remainingStars; i++) {
            stars.push(<span key={i + fullStars + 1}>&#9734;</span>);
        }
        return stars;
    };
    const [state,dispatch]= useContext(DataContext);
    const addToCart=()=>{
        dispatch({
            type: Type.ADD_TO_BASKET,
            item:{image,title,id,rating,price,description}
        })
    }

    return (
        <div className={`${classes.product} ${flex?classes.product_flexed:""}`}>
            <Link to={`products/${id}`} className={classes.anchor}>
                <img src={image} alt="product" />
            </Link>
            <div>
                <h3>{title}</h3>
                {renderDesc && <p>{description}</p>}
                <div className={classes.review}>
                    {renderStars()}
                    <span style={{paddingLeft:"5px"}}>{rating.count}</span>
                </div>
                <p>${price}</p>
                {!renderAdd && <button className={classes.button} onClick={addToCart}>Add To Cart</button>}
                
            </div>
        </div>
    );
}

export default ProductCard;
