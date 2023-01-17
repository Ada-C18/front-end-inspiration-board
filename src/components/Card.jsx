import React from "react";
import PropTypes from 'prop-types';
import NewCardForm from './NewCardForm'

const Card = (props) => {
  const cardMessage = props.entries.map((card, index) => {
      return (
          <p className='card__message'>
              <NewCardForm
                  message={card.message}
              ></NewCardForm>
          </p>
      );
  });

  const cardLikes = props.entries.map((card, index) => {
      return (
          <p>
              <NewCardForm
                  likes={card.likes}
              ></NewCardForm>
          </p>
      );
  });


  return (
  <div className='single-card'>
      {cardMessage}
      <ul className='card__controls'>
          <li>{cardLikes}</li>
          <li><p onClick={() => props.onLikeClick(props.card)}>+💖</p></li>
          <li><p className='card__delete' onClick={() => props.deleteCardItem(props.card)}>Delete Card</p></li>
      </ul>
  </div>
  );
};

Card.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired
  })),
  onLikeClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default Card;