import { useState } from "react";
const Card = (props) => {
  const [likesCount, setLikesCount] = useState(0);

  Liat;

  const updateLikes = () => {
    setLikesCount(likesCount + 1);
  };

  const displayCards = props.cards.map((card) => {
    return <p key={card.id}>{card.message} </p>;
  });

  return (
    <div>
      {displayCards}
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

export default Card;
