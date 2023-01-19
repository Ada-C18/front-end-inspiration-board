import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ cardId, message, deleteCard }) => {
  return (
    <div className="card">
      <li>{message}</li>
      <button>Delete</button>
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
