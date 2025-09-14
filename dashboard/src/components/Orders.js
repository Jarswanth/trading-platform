import React from "react";
import { Link } from "react-router-dom";
import {useState,useEffect} from "react";
import axios from "axios";

const Orders = () => {

  const [orders,setOrders]=useState([]);

  useEffect(()=>{
    axios.get("http://localhost:8080/allOrders").then((result)=>{
      setOrders(result.data);
      

    });
  },[]);
  return (
    <div className="orders">
      {orders.length===0 && (
      <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
      )}
      <div>
          <h3 className="title">Orders ({orders.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Name</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>

          {orders.map((stock, index) => {
            

            return (
              <tr key={index}>
                
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                
                <td>{stock.price.toFixed(2)}</td>
                <td>{stock.mode}</td>
              </tr>
            );
          })}
        </table>
      </div>
      </div>
    </div>

  );
};


export default Orders;