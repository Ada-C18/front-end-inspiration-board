import "./CardList.css";
import Card from "./Card";
import PropTypes from 'prop-types';
import axios from "axios";

const CardList = (props) => {
  const cards = props.cards;
  return (
    <div className="card_container">
      {cards.map((card, id) => (
        <Card
          id={card.id}
          likes={card.likes}
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
CardList.propTypes ={
  id: PropTypes.number,
  message: PropTypes.string,
  onDeleteCard: PropTypes.func.isRequired
};
export default CardList;
