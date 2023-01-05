import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const CardList = (props) => {
  const cards = props.return(
    <div>
      <h2>Card List</h2>
      <section className='CardList'>{cards}</section>
    </div>
  );
};



// CardList.propTypes = {
//   cards: PropTypes.arrayOf(
//     PropTypes.shape({
//       cardId: PropTypes.number.isRequired,
//       message: PropTypes.string.isRequired,
//       likesCount: PropTypes.number.isRequired
    
//     }),
//     onAddLike: propTypes.func.isRequired,
//     onDeleteCard: PropTypes.func.isRequired,
//   )
// }
// export default CardList; 

// card_id = db.Column(db.Integer, primary_key=True)
// message = db.Column(db.String)
// board = db.relationship("Board", back_populates="cards", lazy=True)

// board_id = db.Column(db.Integer, db.ForeignKey('board.board_id'), nullable=True)
// likes_count = db.Column(db.Integer, default=0)