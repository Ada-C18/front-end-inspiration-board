import PropTypes from "prop-types";
import React from "react";

const card = ({ cardId, message, deleteCard, likesCount, addLike }) => {
  const onDeleteClick = () => {
    deleteCard(cardId);
  };

  const onLikeClick = () => {
    addLike(cardId);
  };

  return (
    <div>
      <h3>{message}</h3>
      <p>{likesCount}</p>
      <button onClick={onLikeClick}>Like</button>
      <button onClick={onDeleteClick}>Delete Card</button>
    </div>
  );
};

card.propTypes = {
  cardId: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  deleteCard: PropTypes.func.isRequired,
  likesCount: PropTypes.number.isRequired,
  addLike: PropTypes.func.isRequired,
};

export default card;
