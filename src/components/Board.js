import React from "react";
import "./Board.css";
import Card from "./Card";
import PropTypes from "prop-types";

const Board = ({ title, owner, cards }) => {
  title = "Nina's Board";
  owner = "Nina";
  const getCards = (cards) => {
    return cards.map((card) => {
      return <Card key={card.id} id={card.id} message={card.message} />;
    });
  };
  return (
    <div>
      <h2>
        {title} - {owner}
      </h2>
      <ul>{getCards(cards)}</ul>
    </div>
  );
};

Board.propTypes = {
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
    })
  ),
};

export default Board;
