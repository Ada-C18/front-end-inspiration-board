import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

const CardList = ({ cards, deleteCard }) => {
  const getCardListJSX = (cards) => {
    return cards.map((card) => {
      return (
        <Card
          key={card.id}
          id={card.id}
          message={card.message}
          likesCount={card.likesCount}
          deleteCard={deleteCard}
        />
      );
    });
  };
  return <ul className="cards__list no-bullet">{getCardListJSX(cards)}</ul>;
};

CardList.prototypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      message: PropTypes.string.isRequired,
      likesCount: PropTypes.number.isRequired,
    })
  ).isRequired,
  deleteCard: PropTypes.func.isRequired,
};

export default CardList;
