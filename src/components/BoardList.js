import Board from "./Board";
import "./BoardList.css";

const BoardList = ({ boardsData, onSelectBoard, currentBoard }) => {
  return (
    <>
      <h2 className="board-list-heading">All Boards</h2>
      <ul className="board-list">
        {boardsData.map(({ id, title, owner, cards }) => (
          <Board
            key={id}
            id={id}
            title={title}
            onSelectBoard={onSelectBoard}
            owner={owner}
            cards={cards}
            currentBoardId={currentBoard.id}
          />
        ))}
      </ul>
    </>
  );
};

export default BoardList;
