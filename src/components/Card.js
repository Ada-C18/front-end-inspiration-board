import React from "react";
import "./Card.css";
// import PropTypes from 'prop-types';

const Card = ({ id, message, likeCount }) => {
    return (
        <div className="card__div">
            <h3 className="card-message">{message}</h3>
            <h4 className="card-like-count"> + {likeCount}</h4>
            <button className="delete-card__button">Delete Card</button>
        </div>
    );
    };

// Card.propTypes = {
//     message: PropTypes.string.isRequired,
// };

export default Card;
