import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const CardList = (props) => {
  
  const cards = (props) => {
    return props.cards.map((card) => {
      return (
        <Card
          key={card.cardId}
          cardId={card.cardId}
          message={card.message}
          likeCount={card.likeCount}
          likeButton={card.likeButton}
          deleteButton={card.deleteButton}
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
      likesButton: PropTypes.func.isRequired,
      deleteButton: PropTypes.func.isRequired,
    }).isRequired
  ).isRequired,
};
export default CardList;
