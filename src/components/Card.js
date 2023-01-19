import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ cardId, message, deleteCard }) => {
  console.log("card component", cardId);
  return (
    <div className="card">
      <li>{message}</li>
      <button onClick={() => deleteCard(cardId)}>Delete</button>
      {/* likes button here */}
    </div>
  );
};

Card.propTypes = {
  cardId: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  // likesCount: PropTypes.number.isRequired,
  deleteCard: PropTypes.func.isRequired,
};

export default Card;
