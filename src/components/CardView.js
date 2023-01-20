import Likes from "./Likes";

import "./CardView.css";

const CardView = (props) => {
  const deleteCard = () => {
    props.onDeleteCard(props.id, props.boardId);
  };

  const hackerTheme = props.cardColor === "hacker" ? "hacker-like-delete" : "";

  return (
    <div className={`single-card ${props.shadowClass} ${props.cardColor}`}>
      <p id="card-message"> {props.message} </p>
      <div>
        <Likes
          color={hackerTheme}
          handlePlusOne={props.onLikeCard}
          likes={props.likes}
          cardId={props.id}
          boardId={props.boardId}
        />
        <button
          className={`like-and-delete-buttons ${hackerTheme}`}
          onClick={() => deleteCard()}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CardView;
