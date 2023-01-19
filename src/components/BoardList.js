import PropTypes from "prop-types";
import "./BoardList.css";

const BoardList = ({ boards, loadBoardOnClick }) => {
  const getBoardsComponents = (boards) => {
    return boards.map((board) => (
      <li key={board.boardId} onClick={() => loadBoardOnClick(board)}>
        📍{board.title}
      </li>
    ));
  };
  return (
    <div className="board-list">
      <ul className="boards-list-no-bullet">{getBoardsComponents(boards)}</ul>
    </div>
  );
};

BoardList.propTypes = {
  boards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
    })
  ).isRequired,
  loadBoardOnClick: PropTypes.func.isRequired,
};

export default BoardList;
