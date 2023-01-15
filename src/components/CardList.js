import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import BoardForm from "./components/BoardForm";
import BoardList from "./components/BoardList";

export default function ItemList({ items, onItemClick }) {
  const handleClick = ({ target }) => {
    const item = target.value;
    onItemClick(item);
  };
  return (
    <div>
      {items.map((item, index) => (
        <button value={item} onClick={handleClick} key={index}>
          {item}
        </button>
      ))}
    </div>
  );
}

CardList.propTypes = {
  message: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      board: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ),
};
