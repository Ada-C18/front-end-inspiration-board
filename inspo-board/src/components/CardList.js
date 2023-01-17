import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

const CardList = ({ cards }) => {
  console.log(cards);
  return (
    <div>
      {cards.map((card) => {
        return (
          <Card
            key={card.card_id}
            cardId={card.card_id}
            message={card.message}
          />
        );
      })}
    </div>
  );
};

CardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      card_id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
    })
  ),
};

export default CardList;
