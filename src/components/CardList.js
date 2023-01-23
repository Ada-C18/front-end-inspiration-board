import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const CardList = (props) => {
  return (
    props.cardData.map((card) => (
      <Card
        key={card.card_id}
        card_id={card.card_id}
        body={card.body}
        likes={card.likes}
        onlikedCard={props.onlikedCard}
        ondeleteCard={props.ondeleteCard}
        onboardClick={props.onboardClick}
        handleCardSubmit={props.handleCardSubmit}
      ></Card> 
    ))
  );
};

CardList.propTypes = {
  cardData: PropTypes.arrayOf(PropTypes.shape({
    likes: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
    card_id: PropTypes.number.isRequired,
  }))
}

export default CardList;