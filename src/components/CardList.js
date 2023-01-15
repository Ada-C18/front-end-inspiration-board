import "./CardList.css";
import Card from "./Card";

const CardList = (props) => {
  const cards = props.cards;
  return (
    <div className="card_container">
      {cards.map((card, id) => (
        <Card
          id={card.id}
          message={card.message}
          key={id}
          // onUpdateLikes={updateLikes}
          // onLikesCount ={likesCount}
          onDeleteCard={props.onDeleteCard}
        />
      ))}
    </div>
  );
  // const displayCards = props.cards.map((card) => {
  //     return (
  //     <Card card={card.message}>
  //         <p> {likesCount} 💕 </p>
  //         onUpdateLikes={updateLikes}
  //         onDeleteCard={props.deleteCard}
  //     </Card>
  //     );
  // });

  // return <p> {displayCards}</p>;
};
export default CardList;
