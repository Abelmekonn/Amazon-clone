import React, { useContext, useState } from 'react'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import LayOut from '../../components/LayOut/LayOut'
import classes from "./Payment.module.css"
import ProductCard from '../../components/Product/ProductCard'
import { DataContext } from "../../components/DataProvider/DataProvider"
import CurrencyFormat from '../../components/ConcurencyFormat/ConcurencyFormat';
import {axiosInstance} from '../../Api/axios'

function Payment() {
    const [{ basket, user }, dispatch] = useContext(DataContext)
    const totalItem = basket?.reduce((amount, item) => {
        return amount + item.amount
    }, 0)

    const [cardError, setCardError] = useState("")
    const stripe = useStripe();
    const elements = useElements();
    const handelChange = (e) => {
        console.log(e)
        e.errors?.message ? setCardError(e?.errors?.message) : setCardError('')
    }
    const total = basket.reduce((amount, item) => {
        return item.price * item.amount + amount
    }, 0)
    const handlePayment = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axiosInstance({
                method: "POST",
                url: `/payment/create?total=${total * 100}`
            });
            const clientSecret = response.data?.clientSecret;
            // client side confirmation
            const confirmation = await stripe.confirmCardPayment(
                clientSecret,
                {
                    payment_method: {
                        card: elements.getElement(CardElement)
                    }
                }
            );
            // Handle the payment confirmation response here
        } catch (error) {
            // Handle errors here
        }
    }
    
    return (
        <LayOut>
            <div className={classes.payment_header}>
                Checkout ({totalItem}) items
            </div>
            <section className={classes.payment}>
                {/* Address */}
                <div className={classes.flex}>
                    <h3>Delivery Address</h3>
                    <div>
                        <div>{user.email}</div>
                        <div>1234 Main St</div>
                        <div>Apt 6B</div>
                    </div>
                </div>
                <hr />
                {/* product */}
                <div className={classes.flex}>
                    <h3>Review item and delivery</h3>
                    <div>
                        {
                            basket?.map((item) => <ProductCard product={item} flex={true} />)
                        }
                    </div>
                </div>
                <hr />
                {/* card form */}
                <div className={classes.flex}>
                    <h3>Payment method</h3>
                    <div className={classes.payment_card_container}>
                        <div className={classes.payment_details}>
                            <form action="" onSubmit={handlePayment}>
                                {cardError && (
                                    <small style={{ color: "red" }}>{cardError}</small>)}
                                <CardElement onChange={handelChange} />
                                {/* price */}
                                <div className={classes.payment_price}>
                                    <div style={{display:"flex",gap:"10px"}}>
                                        <p>total order |</p> <CurrencyFormat amount={total} />
                                    </div>
                                    <button type='submit'>Pay now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </LayOut>
    )
}

export default Payment
