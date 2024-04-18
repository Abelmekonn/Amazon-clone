import React from 'react';
import { CategoryInfo } from './CategoryData';
import CategoryCard from './CategoryCard';
import { ClassNames } from '@emotion/react';
import classes from './Category.module.css';


function Category() {
    return (
        <section className={classes.Category_container}>
            {CategoryInfo.map((info, index) => (
                <CategoryCard key={index} data={info} />
            ))}
        </section>
    );
}

export default Category;
