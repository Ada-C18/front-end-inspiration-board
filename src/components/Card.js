import PropTypes from "prop-types";
import React from "react";
import "./Card.css";

const card = ({ cardId, message, deleteCard, likesCount, addLike }) => {
  const onDeleteClick = () => {
    deleteCard(cardId);
  };

  const onLikeClick = () => {
    addLike(cardId);
  };

  return (
    <div className="card">
      <h3 className="message">{message}</h3>
      <p className="likes">{likesCount} ♥s</p>
      <button className="card-button" onClick={onLikeClick}>
        +♡
      </button>
      <button className="card-button" onClick={onDeleteClick}>
        Delete
      </button>
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
