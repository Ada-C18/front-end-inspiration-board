import "./Board.css";

const Board = ({ id, title, owner, cards, onSelectBoard, currentBoardId }) => {
  const selectedBoard =
    id === currentBoardId ? "selected-board" : "unselected-board";

  return (
    <li
      onClick={() => onSelectBoard({ id, title, owner, cards })}
      className={selectedBoard}
    >
      {title}
    </li>
  );
};

export default Board;
