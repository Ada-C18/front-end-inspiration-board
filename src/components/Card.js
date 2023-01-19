import React from "react";
import "./Card.css";
import PropTypes from "prop-types";

const Card = (props) => {
  const id = props.id;
  const message = props.message;
  const like_count = props.like_count;
  const deleteCard = props.deleteCard;

  return (
    <div>
      <button onClick={() => deleteCard(id)}>x</button>
      <div>
        card id: {id}
        message: {message}
        like_count: {like_count}
      </div>
    </div>
  );
};

Card.propTypes = {
  //Fill with correct proptypes
  id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  like_count: PropTypes.number.isRequired,
  deleteCard: PropTypes.func.isRequired,
};

export default Card;
