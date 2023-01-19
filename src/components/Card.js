import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ cardId, message, likes_count, updateLikes, deleteCard }) => {
  // console.log("cardId", cardId);
  function addLikes() {
    updateLikes(cardId, likes_count + 1);
  }

  return (
    <div className="card">
      <p>{message}</p>
      <p className="likesCount">{likes_count} 💖</p>
      <button
        className="likeButton"
        onClick={() => {
          addLikes();
        }}
      >
        Like!
      </button>

      <button className="deleteButton" onClick={() => deleteCard(cardId)}>
        Delete Card
      </button>
    </div>
  );
};

export default Card;

Card.propTypes = {
  cardId: PropTypes.number.isRequired,
  updateLikes: PropTypes.func.isRequired,
};
