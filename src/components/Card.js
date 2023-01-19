import './Card.css'
import { useState } from 'react';
import PropTypes from 'prop-types';

// need to connect/be able to update like-count and delete card. There might be
//  needs default value 
// Ryan

// const Card = () => {
//     return(
//         <div className='card'></div>
//     )
// }
// export default Card 
// axios.post('https://rykaliva.herokuapp.com/boards{card_id}/')

const Card = (props) => {

    return (
        <div className=''>
            <p>{props.message}</p>
            <button>{props.likes_count} 💕</button>
            <button>delete</button>

        </div>
    )
}

Card.propTypes = {
    card_id: PropTypes.number,
    message: PropTypes.string,
    likes_count: PropTypes.number,
    onUpdate: PropTypes.func
};

export default Card 

// const onLikeButtonClick = () => {
//     const updatedCard = {
//         card_id: props.card_id,
//         message: props.message,
//         likes_count: props.likes_count
//     };
//     props.onUpdate(updatedCard)
// };

// const likesCount = 0

// return(
//     <div className='card'>
//         {/* <p>
//         <button
//         className="like"
//         onClick={onLikeButtonClick}
//         >{likeColor}</button>
//         </p> */}
//     </div>
//     )
