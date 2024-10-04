import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";

const showOrders = (props) => {
  let summa = 0;
  props.orders.forEach(
    (element) => (summa += Number.parseFloat(element.price))
  );
  return (
    <div>
      {props.orders.map((order) => (
        <Order deleteOrder={props.deleteOrder} key={order.id} item={order} />
      ))}
      <p className="summa">Sum:{summa.toFixed(2)}$</p>
    </div>
  );
};
const showNohing = () => {
  return (
    <div className="empty">
      <h2>There are no products</h2>
    </div>
  );
};

const Header = (props) => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div className="header">
        <span className="logo">HOUSE STAFF</span>
        <ul className="nav">
          <li>About us</li>
          <li>Contacts</li>
          <li>Cabinet</li>
        </ul>
        <FaShoppingCart
          onClick={() => setCartOpen(!cartOpen)}
          className={`shop-cart-button ${cartOpen && "active"}`}
        />
        {cartOpen && (
          <div className="shop-cart">
            {props.orders.length > 0 ? showOrders(props) : showNohing()}
          </div>
        )}
      </div>
      <div className="presentaion"></div>
    </header>
  );
};
export default Header;
