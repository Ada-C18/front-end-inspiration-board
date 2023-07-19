import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';


const Card = (props) => {

    const handleClick = () => {
        props.tempStateHandlingFunction(props.id);
    };

    const SomeConditionalClass = props.sender === 'Estragon' ? 'chat-entry remote' : 'chat-entry local';

    return (
        <div className={SomeConditionalClass}>
        <h2 className="entry-name">{props.sender}</h2>
        <section className="entry-bubble">
            <p>{props.body}</p>
            <button className='like' onClick={handleClick}>
            {props.liked ? '❤️' : '🤍'}
            </button>
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
