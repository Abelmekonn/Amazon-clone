import React from 'react'
import Carouselfun from '../../components/Carousel/Carousel'
import Category from '../../components/Category/Category'
import LayOut from '../../components/LayOut/LayOut'
import Product from '../../components/Product/Product'
function Landing() {
    return (
        <div>
            <LayOut>
                <Carouselfun />
                <Category />
                <Product />
            </LayOut>
            
        </div>
    )
}

export default Landing
