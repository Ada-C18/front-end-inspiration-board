import React from "react";
import "./Card.css";
import PropTypes from "prop-types";

const Card = (props) => {
  const onLikeButtonClick = () => {
    console.log(props.card_id);
    props.likeCard(props.card_id);
  };

  const onDeleteButtonClick = () => {
    console.log(props.card_id);
    props.deleteCard(props.card_id);
  };

  return (
    <div className="card-entry">
      <p className="card-entry-message">{props.message}</p>
      <section className="cards_buttons">
        <p> {props.likes_count} 💕 </p>
        <button
          className="like_button"
          type="button"
          onClick={onLikeButtonClick}
        >
          +1
        </button>

        <button
          className="delete_button"
          type="button"
          onClick={onDeleteButtonClick}
        >
          Delete
        </button>
      </section>
    </div>
  );
};

Card.propTypes = {
  card_id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  likes_count: PropTypes.number.isRequired,
  likeCard: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired,
};

export default Card;
