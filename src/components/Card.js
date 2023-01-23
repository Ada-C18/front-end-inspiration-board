import "./Card.css";
import { useState } from "react";
// import PropTypes from "prop-types";

const Card = (props) => {

  const deleteButton = 'x  ';

  const cardText = 'Text'

  let [likesCount, setLikesCount] = useState(0);
  
  const likesButton = () => {
    likesCount = likesCount + 1;
    setLikesCount(likesCount);
  };

  return(
    <div className='card'>
      <button className='delete-button'>
        <small >{deleteButton}</small>
      </button>
      <p className='card-text'>{cardText}</p>
      <p className='likes-count'>
      <button className='like-button' onClick={likesButton}>
        <svg className='hand-heart' xmlns="http://www.w3.org/2000/svg" height="30" width="30">
          <path d="M16.15 12.55Q14.975 11.5 13.913 10.5 12.85 9.5 12.05 8.55t-1.275-1.838Q10.3 5.825 10.3 5q0-1.3.875-2.175Q12.05 1.95 13.35 1.95q.75 0 1.488.412T16.15 3.475q.575-.7 1.313-1.113Q18.2 1.95 18.95 1.95q1.3 0 2.175.875Q22 3.7 22 5q0 .825-.475 1.713T20.25 8.55Q19.45 9.5 18.388 10.5T16.15 12.55Zm0-2.075q1.65-1.5 3-2.975t1.35-2.5q0-.675-.437-1.112T18.95 3.45q-.425 0-.837.2-.413.2-.837.75l-1.125 1.375-1.125-1.375q-.425-.55-.838-.75-.412-.2-.838-.2-.675 0-1.113.438T11.8 5q0 1.025 1.35 2.5t3 2.975Zm-2 11.975-7.775-2.225v1.425H1V11.8h7.725l6.375 2.4q.675.25 1.138.813 .462.563 .462 1.612h2.85q1.05 0 1.75.75T22 19.4v.65ZM2.5 20.15h2.35V13.3H2.5Zm11.55.75 6.4-1.95q-.15-.475-.375-.65-.225-.175-.525-.175H14.375q-.75 0-1.387-.1t-1.213-.275l-2.025-.625.55-1.45 1.825.6q.625.2 1.188.275 .563.075 1.787.075 0-.3-.113-.587-.113-.287-.387-.412L8.475 13.3h-2.1v5.35ZM4.85 16.725Zm10.25-.1Zm-10.25.1Zm1.525 0ZM16.15 6.95Z"/>
        </svg>
      </button>{likesCount}</p>
    </div>
  )
};

//Resize .svg resource: https://aydos.com/svgedit/

export default Card;
// Card.propTypes = {
//   allCards: PropTypes.array.isRequired
// };
