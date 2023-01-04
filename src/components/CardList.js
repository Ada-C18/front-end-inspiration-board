import React from "react";
import PropTypes from 'prop-types';

import Card from "./Card";

const CardList = (props) => {
  return (
    <>
      <h2>Cards for board name </h2>
      <ul>
        {props.cardData.map((card) => (
          <Card 
            className="cards-list"
            id={card.id} 
            likesCount={card.likesCount} 
            message={card.message} 
            onDeleteCard={props.onDeleteCard} 
            onLikeCard={props.onLikeCard} 
            />
        ))}
      </ul>
    </>
  );
};

CardList.propTypes = {
  cardData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    likesCount: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
  })),
  onDeleteCard: PropTypes.func.isRequired,
  onLikeCard: PropTypes.func.isRequired,
};

export default CardList;