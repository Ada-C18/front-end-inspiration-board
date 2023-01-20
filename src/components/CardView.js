import Likes from "./Likes";

import "./CardView.css";

const CardView = (props) => {
  const deleteCard = () => {
    props.onDeleteCard(props.id, props.boardId);
  };

  return (
    <div className={`single-card ${props.shadowClass} ${props.cardColor}`}>
      <p id="card-message"> {props.message} </p>
      <div>
        <Likes />
        <button
          className="like-and-delete-buttons"
          onClick={() => deleteCard()}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CardView;
