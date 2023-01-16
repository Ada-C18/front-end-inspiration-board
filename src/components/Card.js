import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = (props) => {
  return (
    <div>
      <h2>
        This is the Card Component.Why is this components h2 header showing but
        not the others? It is absolutely called in the Cardlist, which is called
        in the Board, which is called in the Boardlist????
      </h2>
      <p>{props.message}</p>
      <button
        className='add_like'
        onClick={() => props.onDeleteCard(props.buttonId)}
      >
        🌟
      </button>
      <p></p>
      <button
        className='delete_card'
        onClick={() => props.onLikesCount(props.buttonId)}
      >
        delete card
      </button>
    </div>
  );
};

Card.propTypes = {
  CardId: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  onLikesCount: PropTypes.func.isRequired,
  onDeleteCard: PropTypes.func.isRequired,
};

export default Card;
