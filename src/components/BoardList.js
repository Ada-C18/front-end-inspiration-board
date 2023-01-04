import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const CardList = (props) => {
  const cards = props.return(
    <div>
      <h2>Card List</h2>
      <section className='CardList'>{cards}</section>
    </div>
  );
};

<Card
  key={card.id}
  id={card.id}
  message={card.message}
  // liked={card.liked}
  addHeart={props.addHeart}
/>;

CardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired
      liked: PropTypes.number.isRequired
    
    })
    addLike
    deleteCard: PropTypes.func.isRequired
  )
}
export default CardList;
