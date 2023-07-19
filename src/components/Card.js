import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';


const Card = (props) => {

    const handleClick = () => {
        props.incrementCounter(props.id);
    };

    return (
        <div className="post-it">
        <h2 className="card-message">{props.message}</h2>
        <section>
            <p>{props.likes_count} 💕</p>
            <button onClick={handleClick}>+1</button>
        </section>
        </div>
    );
};

Card.propTypes = {
    card_id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    likes_count: PropTypes.number.isRequired,
};

export default Card;
