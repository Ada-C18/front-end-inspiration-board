import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ id, message, likesCount }) => {
  return (
    <div>
      <p>{message}</p>
      <p>{likesCount}</p>
      <p>💕</p>
      <button>Delete Card</button>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  likesCount: PropTypes.number.isRequired,
};

export default Card;
