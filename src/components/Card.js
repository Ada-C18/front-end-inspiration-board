import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = (props) => {

    const handleClick = () => {
        props.incrementCounter(props.id);
    };

    const handleDelete = () => {
        props.deleteCard(props.id);
    };

    return (
        <div className="post-it">
        <h2 className="card-message">{props.message}</h2>
        <section>
          <div className='buttons_container'>
            <div className='likes_container'>
              <p className='likes-count'>{props.likes_count} 💕</p>
              <button className='like-button' onClick={handleClick}>+1</button>
            </div>
              {/* <p className='likes-count'>{props.likes_count} 💕</p>
              <button className='like-button' onClick={handleClick}>+1</button> */}
            <button className='delete-button' onClick={handleDelete}>Delete</button>
          </div>
        </section>
        </div>
    );
};

Card.propTypes = {
    card_id: PropTypes.number,
    message: PropTypes.string.isRequired,
    likes_count: PropTypes.number.isRequired,
};

export default Card;
