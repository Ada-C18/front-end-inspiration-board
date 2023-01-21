import React from "react";
import PropTypes from "prop-types";

const Card = ({ id, message, deleteCard, selectedBoard }) => {
  const removeCard = () => {
    console.log(`👾${id}`);
    deleteCard(id);
  };

  return (
    <div>
      <li key={id} id={id}>
        {message}
      </li>
      <button onClick={removeCard} id={id}>
        Delete Card
      </button>
    </div>
  );
};

// Card.propTypes = {
//   id: PropTypes.number.isRequired,
//   message: PropTypes.string.isRequired,
// };

export default Card;
