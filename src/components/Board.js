import React from "react";
import "./Board.css";
import Card from "./Card";
import PropTypes from "prop-types";

const Board = ({ title, owner, cards }) => {
  title = "Nina's Board";
  owner = "Nina";
  const cardComponents = [];
  for (const card of cards) {
    cardComponents.push(<Card id={card.id} message={card.message} />);
  }

  return (
    <div>
      <h2>
        {title} - {owner}
      </h2>
      <ul>{cardComponents}</ul>
    </div>
  );
};

Board.propTypes = {
  title: PropTypes.string,
  owner: PropTypes.string,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
    })
  ),
};

export default Board;
