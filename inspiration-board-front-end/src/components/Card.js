import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div>
      message : {props.message} likes: {props.likes}{" "}
    </div>
  );
};

Card.propTypes = {
  card_id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  board_id: PropTypes.number.isRequired,
};

export default Card;
