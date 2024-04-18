import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Product.module.css';

function ProductCard({ product,flex }) {
    // Check if the product object and its rating property are defined
    if (!product || !product.rating) {
        return null; // Render nothing if product or rating is undefined
    }

    const rate = product.rating.rate;
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

    return (
        <div className={`${classes.product} ${flex?classes.product_flex:""}`}>
            <Link to={`products/${product.id}`} className={classes.anchor}>
                <img src={product.image} alt="product" />
            </Link>
            <h3>{product.title}</h3>
            <div className={classes.review}>
                {renderStars()}
                <span style={{paddingLeft:"5px"}}>{product.rating.count}</span>
            </div>
            <p>${product.price}</p>
            <button className={classes.button}>Add to cart</button>
        </div>
    );
}

export default ProductCard;
