import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

const CardList = ({ cards, deleteCard, addLike }) => {
  console.log(cards);
  return (
    <div>
      {cards.map((card) => {
        return (
          <Card
            key={card.card_id}
            cardId={card.card_id}
            message={card.message}
            deleteCard={deleteCard}
            likesCount={card.likes_count}
            addLike={addLike}
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
      likes_count: PropTypes.number.isRequired,
    })
  ),
  deleteCard: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
};

export default CardList;
