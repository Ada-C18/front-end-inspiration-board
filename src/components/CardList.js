import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './CardList.css';

const CardList = (props) => {
  const cards = (props) => {
    return props.cards.map((card) => {
      return (
        <Card
          key={card.cardId}
          cardId={card.cardId}
          boardId={card.boardId}
          message={card.message}
          likesCount={card.likesCount}
          onDeleteCard={props.onDeleteCard}
          onLikesCount={props.onLikesCount}
        />
      );
    });
  };
  return (
    <div>
      <h2>Card List</h2>
      <section className='CardList'>{cards(props)}</section>
    </div>
  );
};

// CardList.propTypes = {
//   cards: PropTypes.arrayOf(
//     PropTypes.shape({
//       cardId: PropTypes.number.isRequired,
//       boardId: PropTypes.number.isRequired,
//       message: PropTypes.string.isRequired,
//       likesCount: PropTypes.number.isRequired
//     })
//   ).isRequired,
//   onLikesCount: PropTypes.func.isRequired,
//   onDeleteCard: PropTypes.func.isRequired,
// };
// export default CardList;


// import React from 'react';
// import PropTypes from 'prop-types';
// import Card from './Card';
// import './CardList.css';
// import { useState } from 'react';

// const CardList = (props) => {
//   const [sortBy, setSortBy] = useState('likes');
//   const handleSortChange = (event) => {
//     setSortBy(event.target.value);
//   };
//   // function to sort the cards based on the selected option
//   const sortedCards = cards.slice().sort((a, b) => {
//     if (sortBy === 'likes') {
//       return a.likesCount - b.likesCount;
//     } else if (sortBy === 'cardId') {
//       return a.cardId - b.cardId;
//     } else if (sortBy === 'alphabetically') {
//       if (a.message < b.message) return -1;
//       if (a.message > b.message) return 1;
//       return 0;
//     }
//     return 0;
//   });
//   const cards = (props) => {
//     return sortedCards.map((card) => {
//       return (
//         <Card
//           key={card.cardId}
//           cardId={card.cardId}
//           boardId={card.boardId}
//           message={card.message}
//           likesCount={card.likesCount}
//           onDeleteCard={props.onDeleteCard}
//           onLikesCount={props.onLikesCount}
//         />
//       );
//     });
//   };
//   return (
//     <div>
//       <h2>Card List</h2>
//       <label>Sort by:</label>
//       <select value={sortBy} onChange={handleSortChange}>
//         <option value='likes'>Likes</option>
//         <option value='cardId'>Card Id</option>
//         <option value='alphabetically'>Alphabetically</option>
//       </select>
//       <section className='CardList'>{cards(props)}</section>
//     </div>
//   );
// };

// CardList.propTypes = {
//   cards: PropTypes.arrayOf(
//     PropTypes.shape({
//       cardId: PropTypes.number.isRequired,
//       boardId: PropTypes.number.isRequired,
//       message: PropTypes.string.isRequired,
//       likesCount: PropTypes.number.isRequired,
//     })
//   ).isRequired,
//   onLikesCount: PropTypes.func.isRequired,
//   onDeleteCard: PropTypes.func.isRequired,
// };
// export default CardList;
