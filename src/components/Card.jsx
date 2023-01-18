import React from "react";
<<<<<<< HEAD

const Card = (props) => {

    return (
    <div className='single-card'>
        {props.card.message}
        <ul className='card__controls'>
            <li>{props.card.likes_count}</li>
            <li><p onClick={() => props.onLikeClick(props.card)}>+💖</p></li>
            <li><p className='card__delete' onClick={() => props.deleteCardItem(props.card)}>Delete Card</p></li>
        </ul>
    </div>
    );
=======
import PropTypes from "prop-types";
import NewCardForm from "./NewCardForm";

const Card = (props) => {
  const cardMessage = props.entries.map((card, index) => {
    return (
      <p>
        <NewCardForm message={card.message}></NewCardForm>
      </p>
    );
  });

  const cardLikes = props.entries.map((card, index) => {
    return (
      <p>
        <NewCardForm likes={card.likes}></NewCardForm>
      </p>
    );
  });

  return (
    <div>
      {cardMessage}
      <ul>
        <li>{cardLikes}</li>
        <li>
          <p onClick={() => props.onLikeClick(props.card)}>+💖</p>
        </li>
        <li>
          <p
            className="card__delete"
            onClick={() => props.deleteCardItem(props.card)}
          >
            Delete Card
          </p>
        </li>
      </ul>
    </div>
  );
};

Card.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
    })
  ),
  onLikeClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
>>>>>>> 9c4b77691a1ac2340941acbe6930077e1ca7db20
};

export default Card;
