import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ id, message, likesCount, deleteCard }) => {
  return (
    <div className="card">
      <p>{message}</p>
      <p>{likesCount} 💕</p>
      <button className="button-card" onClick={() => deleteCard(id)}>
        Delete Card
      </button>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  likesCount: PropTypes.number.isRequired,
  deleteCard: PropTypes.func.isRequired,
};

export default Card;
