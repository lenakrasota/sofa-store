import React from "react";

const ShowFullItem = (props) => {
  if (!props.showModal) return null;
  console.log("item", props.item);
  return (
    <div className="full-item" onClick={props.onClose}>
      <div className="item-info" onClick={(e) => e.stopPropagation()}>
        <div className="img-modal">
          <img src={props.item.image}></img>
        </div>
        <h2 className="title-item">{props.item.title}</h2>
        <h2 className="price-item">{props.item.price}$</h2>
        <div className="item-add" onClick={() => props.addOrder(props.item)}>
          +
        </div>
      </div>
    </div>
  );
};
export default ShowFullItem;
