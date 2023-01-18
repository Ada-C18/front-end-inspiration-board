import React from "react";
import PropTypes from 'prop-types';

const Card = (props) => {
  return(
    <section>
      <p>{props.message}</p>
      <p>{`${props.likesCount} <3`}</p>
      <button
        onClick = {() => props.handleLikeCard(props.cardId)}
      >
        Like Card
      </button>
      <button
        onClick={() => props.handleDeleteCard(props.cardId)}
      >
        Delete Card
      </button>
    </section>
  )
}

Card.propTypes = {
  message: PropTypes.string.isRequired,
  cardId: PropTypes.number.isRequired,
  boardId: PropTypes.number.isRequired,
  likesCount: PropTypes.number.isRequired,
  handleDeleteCard: PropTypes.func.isRequired,
  handleLikeCard: PropTypes.func.isRequired
}

export default Card