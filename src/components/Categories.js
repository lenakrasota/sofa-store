import React, { useState } from "react";

const Categories = (props) => {
  const listCategories = [
    {
      key: "all",
      name: "all",
    },
    {
      key: "chairs",
      name: "chairs",
    },
    {
      key: "sofa",
      name: "sofa",
    },

    {
      key: "table",
      name: "table",
    },
    {
      key: "wallLight",
      name: "wallLight",
    },
    {
      key: "mirror",
      name: "mirror",
    },
  ];
  return (
    <div className="categories">
      {listCategories.map((el) => (
        <div
          className={`${el.key === props.category ? "active" : ""}`}
          key={el.key}
          onClick={() => props.chooseCatedories(el.key)}
        >
          {el.name}
        </div>
      ))}
    </div>
  );
};
export default Categories;
