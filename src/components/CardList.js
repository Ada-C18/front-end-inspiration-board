import Card from "./Card";
import { useState } from "react";

const CardList = (props) => {
  const [likesCount, setLikesCount] = useState(0);
  const updateLikes = () => {
    setLikesCount(likesCount + 1);
  };

  const displayCards = props.cards.map((card) => {
    return (
      <Card card={card.message}>
        <p> {likesCount} 💕 </p>
        onUpdateLikes={updateLikes}
        onDeleteCard={props.deleteCard}
      </Card>
    );
  });

  return <p> {displayCards}</p>;
};
export default CardList;
