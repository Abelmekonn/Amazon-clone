// Cart.jsx
import React, { useContext } from 'react';
import LayOut from '../../components/LayOut/LayOut';
import { DataContext } from '../../components/DataProvider/DataProvider';
import ProductCard from '../../components/Product/ProductCard';
import { Link } from 'react-router-dom';
import classes from './cart.module.css'
import CurrencyFormat from '../../components/ConcurencyFormat/ConcurencyFormat';

function Cart() {
  const [{ basket,user },dispatch] = useContext(DataContext);
  const total=basket.reduce((amount,item)=>{
    return item.price * item.amount + amount
  },0)
  console.log(total)
  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.cart_container}>
          <h2>Hello</h2>
          <h3>Your shopping basket</h3>
          <hr />
          {basket?.length === 0 ? (
              <p>Oops! No items in your cart</p>
            ) : (
              basket?.map((item,i) => (
                <ProductCard
                  key={i} // Use a unique identifier from the product object
                  renderDesc={true}
                  flex={true}
                  renderAdd={true}
                  product={item}
                  cartCard={true}
                />
                
              ))
            )
          }
        </div>
        <div>
          {basket?.length !== 0 && (
            <div className={classes.subtotal}>
              <div>
                <p>Subtotal ({basket?.length} items) </p>
                
                <CurrencyFormat amount={total} />
              </div>
              <span>
                <input type="checkbox" />
                <small>This order contains a gift</small>
              </span>
              <Link to="/payment">Continue to checkout</Link>
            </div>
          )}
        </div>
      </section>
    </LayOut>
  );
}

export default Cart;
