import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ cardId, message, likes_count, updateLikes, deleteCard }) => {
  // console.log("cardId", cardId);
  function addLikes() {
    updateLikes(cardId, likes_count + 1);
  }

  return (
    <div className="Card">
      <p>{message}</p>
      <p>{likes_count}</p>
      <button
        onClick={() => {
          addLikes();
        }}
      >
        Like!
      </button>
      {/* <ul>
        <li>{message}</li>
        <li>{likes_count}</li>
        <button
          onClick={() => {
            addLikes();
          }}
        >
          Like!
        </button>


      </ul> */}

      <button onClick={() => deleteCard(cardId)}>Delete Card</button>

     


    </div>
  );
};

export default Card;

Card.propTypes = {
  cardId: PropTypes.number.isRequired,
  updateLikes: PropTypes.func.isRequired,
};
