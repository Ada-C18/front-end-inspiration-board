import "./CardView.css";

const CardView = (props) => {
  const deleteCard = () => {
    props.onDeleteCard(props.id, props.boardId);
  };

  return (
    <div className={`single-card ${props.shadowClass} ${props.cardColor}`}>
      <p id="card-message"> {props.message} </p>
      <span id="num-likes"> {props.likes} ♥️ </span>
      <button className="like-and-delete-buttons"> +1 </button>
      <button className="like-and-delete-buttons" onClick={() => deleteCard()}>
        Delete
      </button>
    </div>
  );
};

export default CardView;
