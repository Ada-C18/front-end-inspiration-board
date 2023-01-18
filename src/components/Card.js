import "./Card.css";
import PropTypes from 'prop-types';

import { useState } from "react";
const Card = (props) => {
  const [likesCount, setLikesCount] = useState(0);
  const updateLikes = () => {
    setLikesCount(likesCount + 1);
  };

  return (
    <div className="card">
      <p>{props.message}</p>
      {likesCount} 💕
      {/* {props.onLikesCount} 💕 */}
      <button type="button" onClick={updateLikes}>
        +1
      </button>
      {/* <button type="button" onClick={props.onUpdateLikes}>
            +1
        </button> */}
      {/* <button type="button" onClick={() => props.onDeleteCard(props.id)}> */}
      <button type="button" onClick={() => props.onDeleteCard(props.id)}>
        Delete
      </button>
    </div>
  );
};
Card.propTypes={
  message: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired

}

export default Card;
