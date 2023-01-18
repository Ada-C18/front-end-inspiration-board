import "./Card.css";
import PropTypes from 'prop-types';
import axios from "axios";

import { useState } from "react";

const CardURL = "http://localhost:5000/cards";
const Card = (props) => {
  console.log(props)
  const [likesCount, setLikesCount] = useState(props.likes);
  // const updateLikes = () => {
  //   setLikesCount(likesCount + 1);
  // };
  const updateLikes = () => {
    updateLikesCall();
  };
  
  const updateLikesCall = () => {
    axios
      .patch(`${CardURL}/${props.id}`)
      .then(() => {
      
        setLikesCount(likesCount + 1);
      })
      .catch((error) => {
        console.log(error);
        // alert(“Unable to like the card.“);
      });
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
  id: PropTypes.number

}

export default Card;
