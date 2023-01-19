import "./Card.css";

const Card = ({ id, message, likesCount, likeCard, deleteCardData }) => {
  return (
    <div className="card">
      <p className="card-message">{message}</p>
      <ul className="card-actions">
        <li>{likesCount}🫀</li>
        <li className="card-click" onClick={() => likeCard(id)}>+1</li>
        <li className="card-click" onClick={() => deleteCardData(id)}>
          Delete
        </li>
      </ul>
    </div>
  );
};

export default Card;
