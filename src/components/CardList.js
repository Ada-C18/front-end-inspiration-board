import "./CardList.css";
import Card from "./Card";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const CardList = (props) => {
  const cards = props.cards;

  return (
    <div>
      <button onClick={props.onAlphabeticalSort}> Sort Alphabetically </button>
      <button onClick={props.onLikesSort}> Sort by Likes </button>
      <button onClick={props.onIdSort}> Sort by ID </button>
      <div className="card_container">
        {cards.map((card, id) => (
          <Card
            id={card.id}
            likes={card.likes}
            message={card.message}
            key={id}
            onDeleteCard={props.onDeleteCard}
          />
        ))}
      </div>
    </div>
  );
};

CardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
    })
  ),
  onDeleteCard: PropTypes.func.isRequired,
};
export default CardList;
