import React from "react";
import PropTypes from "prop-types";

import "./Card.css";

const Card = (props) => {
  return (
    <li className="card-container">
      <div className="card-message">{props.message}</div>
      <div class="likes">
        <span>{props.likes_count} ❤️ </span>
        <span
          className="arrow"
          onClick={() => {
            props.increaseLikesCount(props.card);
          }}
        >
          ↑{" "}
        </span>
        <div
          className="delete"
          onClick={() => {
            props.deleteCard(props.card);
          }}
        >
          Delete Card
        </div>
      </div>
    </li>
  );
};

Card.propTypes = {
  message: PropTypes.string,
};

export default Card;
