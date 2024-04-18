import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Product.module.css';

function ProductCard({ product }) {
    const rate = product.rating.rate;
    const fullStars = Math.floor(rate);
    const hasHalfStar = rate - fullStars >= 0.5;
    const remainingStars = 4 - fullStars - (hasHalfStar ? 1 : 0);

    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < fullStars; i++) {
            stars.push(<span key={i}>&#9733;</span>);
        }
        if (hasHalfStar) {
            stars.push(<span key="half">&#9733;&#189;</span>);
        }
        for (let i = 0; i < remainingStars; i++) {
            stars.push(<span key={i + fullStars + 1}>&#9734;</span>);
        }
        return stars;
    };

    return (
        <div className={classes.product}>
            <Link to="#" className={classes.anchor}>
                <img src={product.image} alt="product" />
                <h3>{product.title}</h3>
                <div>
                    {renderStars()}
                    <span>{product.rating.count}</span>
                </div>
            </Link>
        </div>
    );
}

export default ProductCard;
