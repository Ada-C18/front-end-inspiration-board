import PropTypes from "prop-types";
import "./CardComponent.css";

const Card = ({ id, message, likes, deleteCard, likeCard }) => {
  return (
    <div className="card">
      <h4>{message}</h4>
      <span>{likes}💕</span>
      <button
        onClick={() => {
          likeCard(id);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          deleteCard(id);
        }}
      >
        DELETE
      </button>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  likes: PropTypes.number,
  deleteCard: PropTypes.func.isRequired,
  likeCard: PropTypes.func.isRequired,
};

export default Card;
