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
          boardID={card.boardId}
          message={card.message}
          likes={card.likes}
          // delete card
          // like card
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
    likes: PropTypes.number.isRequired
  })),
  // delete card
  // like card
}

export default CardList