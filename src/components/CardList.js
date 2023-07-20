import React from 'react';
import Card from './Card';

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
    
    return <div className='Cards_container'>{CardLists} </div>;
};

export default CardList;