import PropTypes from "prop-types";
import "./Card.css";

function Card(props) {
  const id = props.id;
  const message = props.message;
  const deleteCard = props.deleteCard;
  // const boardId = props.boardId;
  const handleDelete = () => deleteCard(id);
  // return <div className="card">{message}</div>;
  return (
    <div>
      <li className="card">{message}</li>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

Card.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Card;
