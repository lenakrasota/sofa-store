import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { furnitures } from "./constants/furnitures";
import Item from "./components/Item";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

function App() {
  const [orders, setOrders] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const [selectOrder, setSelectOrder] = useState({});

  const onClose = () => {
    setShowModal(false);
    setSelectOrder({});
  };

  const handleSelect = (item) => {
    setSelectOrder(item);
    setShowModal(true);
  };

  const [category, setCategory] = useState("all");
  const chooseCatedory = (category) => {
    setCategory(category);
  };

  const addOrder = (order) => {
    const isSelected = orders.find((item) => item.id === order.id);
    if (isSelected) return;

    setOrders([...orders, order]);
  };

  const deleteOrder = (id) => {
    const newOrders = orders.filter((order) => order.id !== id);
    setOrders(newOrders);
  };

  const listFurniture = furnitures
    .filter((el) => el.category === category || category === "all")
    .map((item) => (
      <Item
        key={item.id}
        item={item}
        addOrder={addOrder}
        handleSelect={handleSelect}
      />
    ));

  return (
    <div className="wrapper">
      <Header orders={orders} deleteOrder={deleteOrder} />
      <div className="wrapper-list">
        <Categories chooseCatedories={chooseCatedory} category={category} />
        <div className="list">{listFurniture}</div>
      </div>
      <ShowFullItem
        showModal={showModal}
        item={selectOrder}
        addOrder={addOrder}
        onClose={onClose}
      />
      <Footer />
    </div>
  );
}

export default App;
