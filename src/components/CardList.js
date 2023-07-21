import React from 'react';
import Card from './Card';
import './CardList.css';
import PropTypes from 'prop-types';

const CardList = (props) => {
    const CardLists = props.cardData.map((post) => {
      return (
        <Card
              id={post.id}
              key={post.id}
              message={post.message}
              likes_count={post.likes_count}
              incrementCounter={props.incrementCounter}
              deleteCard={props.deleteCard}
        />
    );
  });
    
  return (
    <section>
      {props.cardData.length !== 0 ? (
        <div>
          <h2 className='cards_header'>Cards for {props.selectedBoard.title}</h2>
          <div className='sort_options'>
            <select value='' onChange={props.onSortSelection}>
              <option value=''>Sort by:</option>
              <option value='id'>ID</option>
              <option value='likes'>Likes</option>
              <option value='alphabetically'>Alphabetical (A to Z)</option>
          </select>
          </div> 
        </div>
      ) : null}
      <div className='cards_container'>{CardLists} </div>
    </section>
  );
};

CardList.propTypes = {
  cardData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      message: PropTypes.string,
      likes_count: PropTypes.number
    })
  ).isRequired,
  incrementCounter: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired,
  onSortSelection: PropTypes.func.isRequired,
  selectedBoard: PropTypes.object.isRequired
};

export default CardList;