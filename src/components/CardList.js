import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './CardList.css';

const CardList = (props) => {
  
  // const handleSortChange = (event) => {
  //   props.onSortedCards(event.target.value);
  // };
 
  const cards = (props) => {
    return props.cards.map((card) => {
      return (
        <Card
          key={card.cardId}
          cardId={card.cardId}
          boardId={card.boardId}
          message={card.message}
          likesCount={card.likesCount}
          onDeleteCard={props.onDeleteCard}
          onLikesCount={props.onLikesCount}
        />
      );
    });
  };
  return (
    <div>
      <h2>Card List</h2>
      <label>Sort by:</label>
      <select value={props.sortCards} onChange={(e) => props.onSortedCards(e.target.value)}>
        <option value='likes'>Likes</option>
        <option value='cardId'>Card Id</option>
        <option value='alphabetically'>Alphabetically</option>
      </select>
      <section className='CardList'>{cards(props)}</section>
    </div>
  );
};

CardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      cardId: PropTypes.number.isRequired,
      boardId: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      likesCount: PropTypes.number.isRequired,

    })
  ).isRequired,
  sortCards: PropTypes.string.isRequired,
  onLikesCount: PropTypes.func.isRequired,
  onDeleteCard: PropTypes.func.isRequired,
  onSortedCards: PropTypes.func.isRequired,
  

};
export default CardList;
