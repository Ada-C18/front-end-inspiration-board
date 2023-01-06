import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

const CardList = (props) => {
  console.log(props.cards);
  const card = props.cards.map((card) => {
    return (
      <li key={card.card_id}>
        <Card></Card>
      </li>
    );
  });
  return (
    <div>
      <h1>Cards for {props.board}</h1>
      <section>{card}</section>
    </div>
  );
};

CardList.propTypes = {
  board: PropTypes.string,
  cards: PropTypes.array,
};

export default CardList;
