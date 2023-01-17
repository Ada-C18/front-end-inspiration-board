import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './CardList.css';

const CardList = (props) => {
  const cards = (props) => {
    return props.cards.map((card) => {
      return (
        <Card
          key={card.cardId}
          cardId={card.cardId}
          message={card.message}
          onCardDelete={card.handleCardDelete}
          onLikesCount={card.handleLikesCount}
        />
      );
    });
  };
  return (
    <div>
      <h2>Card List</h2>
      <section className='CardList'>{cards(props)}</section>
    </div>
  );
};

CardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      cardId: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
    })
  ).isRequired,
  onLikesCount: PropTypes.func.isRequired,
  onDeleteCard: PropTypes.func.isRequired,
};
export default CardList;
