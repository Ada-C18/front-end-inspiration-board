import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

const Card = (props) => {
  return (
    <li className="Card-Info">
      <h2 className="Message-Info"> {props.message} </h2>
      <span className="Likes-Container">
        <p
          className="Likes-Info-heart"
          onClick={() => {
            props.onLikeCard(props);
          }}
        >
          🧡
        </p>
        <p className="Likes-Info"> Likes: {props.likes}</p>
      </span>
      <button
        onClick={() => {
          props.onDeleteCard(props.card_id);
        }}
        className="Delete-Card-Button"
      >
        Delete Card
      </button>
    </li>
  );
};

Card.propTypes = {
  card_id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  onDeleteCard: PropTypes.func.isRequired,
  onLikeCard: PropTypes.func.isRequired,
};

export default Card;
