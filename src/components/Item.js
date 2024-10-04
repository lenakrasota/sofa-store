import React from "react";

const Item = (props) => {
  return (
    <div className="item">
      <div onClick={() => props.handleSelect(props.item)}>
        <img src={props.item.image}></img>
      </div>
      <div className="item-info">
        <h2 className="title-item">{props.item.title}</h2>
        <h2 className="price-item">{props.item.price}$</h2>
        <div className="item-add" onClick={() => props.addOrder(props.item)}>
          +
        </div>
      </div>
    </div>
  );
};
export default Item;
