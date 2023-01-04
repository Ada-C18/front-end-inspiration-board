import React from 'react';
import Card from './Card'
const CardList = (props.cards) => {
  const cards= props.
 return(<div>
    <h2>Card List</h2>
    <section className='CardList'>{cards}</section>
  </div>)
};

export default CardList;

<Cardlist
key={card.id}
id={card.id}
message={card.message}
// liked={card.liked}
addHeart={props.addHeart}
/>