import React from "react";
import PropTypes from "prop-types";

const Card = ({ id, message }) => {
  return (
    <div>
      <li key={id}>{message}</li>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  cards: PropTypes.func.isRequired,
};

export default Card;
