import React from "react";
import { FaTrash } from "react-icons/fa";

const Order = (props) => {
  return (
    <div className="item">
      <div>
        <img src={props.item.image}></img>
      </div>
      <div className="item-info">
        <h2 className="title-item">{props.item.title}</h2>
        <h2 className="price-item">{props.item.price}$</h2>
        <FaTrash
          className="delete-icon"
          onClick={() => props.deleteOrder(props.item.id)}
        />
      </div>
    </div>
  );
};
export default Order;
