import React, { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";
// import "./App.css";

// import BoardForm from "./components/BoardForm";
// import BoardList from "./components/BoardList";

const CardList = (props) => {
  const renderCard = function (cardObj) {
    return (
      <Card
        message={cardObj.message}
        likes={cardObj.likes}
        key={cardObj.id}
      ></Card>
    );
  };

  return (
    <div>
      <h2>"Pick me Up"</h2>
      {props.cardListData.map(renderCard)}
    </div>
  );
};

export default CardList;
// CardList.propTypes = {
//   message: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       board: PropTypes.string.isRequired,
//       timeStamp: PropTypes.string.isRequired,
//       completed: PropTypes.bool.isRequired,
//     })
//   ),
