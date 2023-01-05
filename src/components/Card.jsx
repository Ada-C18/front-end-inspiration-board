import React from "react";
import PropTypes from 'prop-types';
import NewCardForm from './NewCardForm'

const Card = (props) => {
  const cardComponents = props.entries.map((card, index) => {
    return (
      <li>
        <NewCardForm
          id={card.id}
          message={card.message}
          likes={card.likes}
        ></NewCardForm>
      </li>
    )
  })
}

Card.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired
  })),
  onLikeSelect: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default Card;