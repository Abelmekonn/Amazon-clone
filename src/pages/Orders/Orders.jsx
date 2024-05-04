import React, { useState, useContext, useEffect } from 'react';
import LayOut from "../../components/LayOut/LayOut";
import { db } from '../../Utility/fireBase';
import classes from './Order.module.css';
import { DataContext } from '../../components/DataProvider/DataProvider';
import ProductCard from "../../components/Product/ProductCard";

function Orders() {
  const [{ user }, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users").doc(user.uid).collection("orders").orderBy("created", "desc").onSnapshot((snapshot) => {
        const ordersData = snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data()
        }));
        setOrders(ordersData);
      });
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.order_container}>
          <h2>Your orders</h2>
          {orders?.length ==0 && <div style={{padding="20px"}}>you don't have orders yet.</div>}
          {/* Render orders here */}
          {orders.map((eachOrder) => (
            <div key={eachOrder.id}>
              <hr />
              <p>Order Id: {eachOrder.id}</p>
              {/* Render ProductCard for each item in the order */}
              {eachOrder.data.basket.map((order) => (
                <ProductCard 
                key={order.id} 
                product={order} 
                flex={true}
                renderAdd={true}
                />
              ))}
            </div>
          ))}
        </div>
      </section>
    </LayOut>
  );
}

export default Orders;
