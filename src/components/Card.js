import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  const updateLikes = () => {
    const updatedCard = {
      card_id: props.cardId,
      board_id: props.boardId,
      message: props.message,
      likes_count: props.likes_count + 1,
    };
    props.updateCardsData(updatedCard);
  };

  const deleteACard = () => {
    const cardId = props.cardId;
    props.deleteCard(cardId);
  };

  return (
    <section>
      <p>{props.message}</p>
      <p>{props.likes_count} ❤️‍🔥</p>
      <button onClick={updateLikes}>+1 Like</button>
      <button onClick={deleteACard}>Delete</button>
    </section>
  );
};

Card.propTypes = {
  cardId: PropTypes.number,
  boardId: PropTypes.number,
  message: PropTypes.string,
  likes_count: PropTypes.number,
  updateCardsData: PropTypes.func,
  deleteCard: PropTypes.func,
};

export default Card;
