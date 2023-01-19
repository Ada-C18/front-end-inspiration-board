import "../styles/Card.css";
import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
// import './Card.css';

const Card = ({ id, message, likes, deleteCard, countLikesTotal }) => {
  const [likeCount, setLikeCount] = useState(likes);
  const updateLikes = () => {
    setLikeCount(likeCount + 1);
  };

  return (
    <div>
      <p className="card-item__message"> "{message}"</p>
      <ul className="card-item__controls">
        <p
          className="like-button"
          onClick={() => {
            countLikesTotal(id);
            updateLikes();
          }}
        >
          <p>{likeCount} 💕</p>
        </p>
        <p
          className="delete"
          onClick={() => {
            deleteCard(id);
          }}
        >
          <p>Delete</p>
        </p>
      </ul>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  likes: PropTypes.number,
  deleteCard: PropTypes.func.isRequired,
  countLikesTotal: PropTypes.func.isRequired,
};

export default Card;
