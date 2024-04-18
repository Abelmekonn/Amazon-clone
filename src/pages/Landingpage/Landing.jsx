import React from 'react'
import Carouselfun from '../../components/Carousel/Carousel'
import Category from '../../components/Category/Category'
import LayOut from '../../components/LayOut/LayOut'
function Landing() {
    return (
        <div>
            <LayOut>
                <Carouselfun />
                <Category />
            </LayOut>
            
        </div>
    )
}

export default Landing
