// Cart.jsx
import React, { useContext } from 'react';
import LayOut from '../../components/LayOut/LayOut';
import { DataContext } from '../../components/DataProvider/DataProvider';
import ProductCard from '../../components/Product/ProductCard';
import { Link } from 'react-router-dom';

function Cart() {
  const [{ basket,user },dispatch] = useContext(DataContext);
  const total=basket.reduce((amount,item))
  return (
    <LayOut>
      <section>
        <div>
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
                  renderAdd={false}
                  product={item}
                />
                
              ))
            )
          }
        </div>
        <div>
          {basket?.length !== 0 && (
            <div>
              <div>
                <p>Subtotal ({basket?.length} items) </p>
                {/* <CurrencyFormat amount="total" /> */}
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
