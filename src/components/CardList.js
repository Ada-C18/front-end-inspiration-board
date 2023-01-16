import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './CardList.css'

const CardList = (props) => {
  
  const cards = (props) => {
    return props.cards.map((card) => {
      return (
        <Card
          key={card.cardId}
          cardId={card.cardId}
          message={card.message}
          handleCardDelete={card.handleCardDelete} 
          handleLikesCount={card.handleLikesCount}
        />
      );
    });
  };
return(
  <div>
    <h2>Card List</h2>
    <section className='CardList'>{cards(props)}</section>
  </div>);
};

CardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      cardId: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      likesCount: PropTypes.number.isRequired,
      handleLikesCount: PropTypes.func.isRequired,
      handleCardDelete: PropTypes.func.isRequired,
    }).isRequired
  ).isRequired,
};
export default CardList;
