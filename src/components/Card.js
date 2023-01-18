import "./Card.css";
import PropTypes from "prop-types";
import axios from "axios";

import { useState } from "react";

const CardURL = "https://inspiration-board-api-t6.herokuapp.com/cards";
const Card = (props) => {
  console.log(props);
  const [likesCount, setLikesCount] = useState(props.likes);

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
        alert("Unable to like the card.");
      });
  };

  return (
    <div className="card">
      <p>{props.message}</p>
      {likesCount} 💕
      <button type="button" onClick={updateLikes}>
        +1
      </button>
      <button type="button" onClick={() => props.onDeleteCard(props.id)}>
        Delete
      </button>
    </div>
  );
};
Card.propTypes = {
  message: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Card;
