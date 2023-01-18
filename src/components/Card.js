import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div>
      <section>
        <p>{props.message}</p>
        <ul>
          <li>
            <p>{props.likesCount} ❤️</p>
          </li>
          <li>
            <button onClick={(event) => props.plusOneLike(props.id)}>
              +❤️
            </button>
          </li>
        </ul>
        <section>
          <button onClick={(event) => props.deleteCard(props.id)}>
            Delete Card
          </button>
        </section>
      </section>
    </div>
  );
};

// const Card = (props) => {
//   return (
//     <div className='card'>
//       <section>
//         <p className='card-message'>{props.card.message}</p>
//         <ul className='card-controls'>
//           <li><p>{props.card.likesCount} ❤️</p></li>
//           <li><p onClick={() => props.plusOneCardItem(props.card)}>+1</p></li>
//           <li><p className='card-delete' onClick={() => props.deleteCard(props.card)}>Delete</p></li>
//         </ul>
//       </section>
//   </div>);
// };

Card.propTypes = {
  message: PropTypes.string,
  likesCount: PropTypes.number
};

export default Card;
