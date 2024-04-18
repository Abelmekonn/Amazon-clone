import React from 'react';
import  { Link } from 'react-dom'
import classes from './Category.module.css';

function CategoryCard({ data }) {
    return (
        <div className={classes.category}>
            <Link to={`category/${data.name}`} className={classes.anchor}>
                <span>
                    <h2>{data.title}</h2>
                </span>

                {data.list ? (
                    <div className={classes.CategoryCard_list}>
                        {data.list.map((item, index) => (
                            <div key={index} className={classes.list}>
                                <img src={item.img} alt={item.name} />
                                <p>{item.name}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <img className={classes.single} src={data.img} alt={data.title} />
                )
                }
                <p>shop now</p>
            </Link>
        </div>
    );
}

export default CategoryCard;
