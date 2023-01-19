import Board from "./Board";
import "../styles/BoardList.css";
import PropTypes from "prop-types";

const BoardList = ({ boardList, getOneBoard, boardId, deleteBoard }) => {
  const boardComponents = boardList.map((board) => {
    return (
      <div
        className={board.id === boardId ? "selectedBoard" : "None"}
        key={board.id}
      >
        <Board
          id={board.id}
          title={board.title}
          owner={board.owner}
          getOneBoard={getOneBoard}
          deleteBoard={deleteBoard}
        />
      </div>
    );
  });

  return <div>{boardComponents}</div>;
};

BoardList.propTypes = {
  boardList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
    })
  ),
  getOneBoard: PropTypes.func.isRequired,
  deleteBoard: PropTypes.func.isRequired,
};

export default BoardList;
