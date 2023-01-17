import React from "react";
import "./Card.css";
// import PropTypes from 'prop-types';

const Card = ({ id, message, likeCount }) => {
    return (
        <div className="card__div">
            <span>{message}</span>
            {/* <span>{likeCount}</span> */}
        </div>
    );
    };

// Card.propTypes = {
//     message: PropTypes.string.isRequired,
// };

export default Card;
