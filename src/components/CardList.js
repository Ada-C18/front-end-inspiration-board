import React from "react";
import PropTypes from 'prop-types';
import Card from './Card';

const CardList = (props) => {
  return(
    <section>
      {props.cardData.map((card) => (
        <Card 
          key={card.cardId}
          cardId={card.cardId}
          boardId={card.boardId}
          message={card.message}
          likesCount={card.likesCount}
          handleLikeCard={props.handleLikeCard}
          handleDeleteCard={props.handleDeleteCard}
    />
      ))}
    </section>
  )
}

CardList.propTypes = {
  cardData: PropTypes.arrayOf(PropTypes.shape({
    cardId: PropTypes.number.isRequired,
    boardId: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    likesCount: PropTypes.number.isRequired
  })),
  handleDeleteCard: PropTypes.func.isRequired,
  handleLikeCard: PropTypes.func.isRequired
}

export default CardList