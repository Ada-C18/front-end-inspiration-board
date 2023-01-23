import "./Likes.css";

const Likes = (props) => {
  return (
    <>
      <span id="num-likes"> {props.likes} ♥️ </span>
      <button
        id="plusOne"
        className={`like-and-delete-buttons ${props.color}`}
        onClick={() => props.handlePlusOne(props.cardId, props.boardId)}
      >
        +1
      </button>
    </>
  );
};

export default Likes;
