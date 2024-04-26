import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landingpage/Landing'
import Auth from './pages/Auth/Auth'
import Payment from './pages/Payment/Payment'
import Orders from './pages/Orders/Orders'
import Cart from './pages/Cart/Cart'
import Results from './pages/Results/Results'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51P9BEz2LYJnYFChtNYhTLEyvlKYttMuPncgtJNCaNcYNxwZeN5VmCLfUPaEOW67mA4laS7kufJNFNIzt5uKf0fpa00Wu9QaQzA');
function Routing() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/auth' element={<Auth />} />
                <Route path='/payment' element={
                <Elements stripe={stripePromise}>
                    <Payment/>
                </Elements>
                } />
                <Route path='/order' element={<Orders />} />
                <Route path='/category/:categoryName' element={<Results />} />
                <Route path='/Products/:productId' element={<ProductDetails />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </Router>
    )
}

export default Routing
