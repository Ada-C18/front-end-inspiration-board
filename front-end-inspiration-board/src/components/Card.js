import "./Card.css";
// import PropTypes from "prop-types";

function Card(props) {
  const cardId = props.id;
  const cardMessage = props.message;
  const Cardlikes_count = props.likes_count;
  const increaseLikes = props.increaseLikes;
  const deleteCard = props.deleteCard;

  const handleIncreaseLikes = () => {
    const newLikes = Cardlikes_count + 1;
    increaseLikes(cardId, newLikes);
  };

  const handleCardDelete = () => {
    deleteCard(cardId);
  };

  return (
    <div className="card">
      <h5>{cardMessage}</h5>
      <>
        <div id="likes_count">{Cardlikes_count} 💖</div>
        <div id="increase" onClick={handleIncreaseLikes}>
          +1
        </div>
        <div id="delete" onClick={handleCardDelete}>
          Delete Card
        </div>
      </>
    </div>
  );
}

export default Card;
