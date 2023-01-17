import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

const Card = (props) => {
  return (
    <li className="Card-Info">
      <h2 className="Message-Info"> {props.message} </h2>
      <p className="Likes-Info"> Likes: {props.likes} ❤️ </p>
    </li>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Card;
