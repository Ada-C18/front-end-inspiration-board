import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

const Card = (props) => {
  return (
    <li className="Card-Info">
      <h2 className="Message-Info"> {props.message} </h2>
      <p className="Likes-Info"> Likes: {props.likes}</p>
      <button
        onClick={() => {
          props.onLikeCard(props);
        }}
      >
        ❤️
      </button>
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
