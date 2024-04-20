// Cart.jsx
import React, { useContext } from 'react';
import LayOut from '../../components/LayOut/LayOut';
import { DataContext } from '../../components/DataProvider/DataProvider';
import ProductCard from '../../components/Product/ProductCard';
import { Link } from 'react-router-dom';
import classes from './cart.module.css'
import { Type } from '../../Utility/action.type';
import CurrencyFormat from '../../components/ConcurencyFormat/ConcurencyFormat';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount
  }, 0)
  const increment=(item)=>{
    dispatch({
      type:Type.ADD_TO_BASKET,
      item
    })
  }
  const decrement = (item) => { // Change the parameter to itemId
    dispatch({
      type: Type.Remove_FROM_BASKET,
      item // Pass itemId as the payload
    });
  };
  
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
            basket?.map((item, i) => (
              <section key={i} className={classes.cart_product}>
                <ProductCard
                  renderDesc={true}
                  flex={true}
                  renderAdd={true}
                  product={item}
                  cartCard={true}
                />
                <div className={classes.btn_container}>
                  <button className={classes.btn} onClick={() => increment(item)}><KeyboardArrowUpIcon /></button>
                  <span>{item.amount}</span>
                  <button className={classes.btn} onClick={() => decrement(item)}><KeyboardArrowDownIcon/></button>
                </div>
              </section>
            ))
          )}
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
