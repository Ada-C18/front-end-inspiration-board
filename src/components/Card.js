import { useState } from "react";
const Card = (props) => {
  return (
    <div>
      <p>
        {props.message}
        {props.likesCount} 💕
      </p>
      <button type="button" onClick={props.updateLikes}>
        +1
      </button>
      <button type="button" onClick={() => props.onDeleteCard(props.id)}>
        Delete
      </button>
    </div>
  );
};
// const [isClicked, setisClicked] = useState(false);

// moving state cardlist
// set each card to state
// remove map from card
// only moving 1 card

export default Card;
