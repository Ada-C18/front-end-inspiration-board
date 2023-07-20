import React from 'react';
import Card from './Card';
import './CardList.css';

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
          <h2 className='cards_header'>Cards</h2>
          <div className='sort_options'>
            <select value="" onChange={props.onSortSelection}>
              <option value="">Sort by:</option>
              <option value="id">id</option>
              <option value="likes">likes</option>
              <option value="alphabetically">alphabetically</option>
          </select>
          </div> 
        </div>
      ) : null}
      <div className='cards_container'>{CardLists} </div>
    </section>
  );
};

export default CardList;