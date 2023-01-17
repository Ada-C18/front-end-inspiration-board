import PropTypes from "prop-types";
import React from "react";

const card = ({ cardId, message }) => {
  return (
    <div>
      <h3>{message}</h3>
    </div>
  );
};

card.propTypes = {
  cardId: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
};

export default card;
