import PropTypes from "prop-types";

import "./Board.css";

function Board(props) {
  const boardId = props.id;
  const boardTitle = props.title;
  const boardName = props.name;
  const selectBoard = props.selectBoard;
  const unselectBoard = props.unselectBoard;

  const toggleSelected = (boardId) => {
    if (props.selected === false) {
      selectBoard(boardId);
    } else {
      unselectBoard(boardId);
    }
  };

  return (
    <div>
      {/* <h2 className="board__name">{boardTitle}</h2> */}
      <ol>
        {/* <li>ID: {boardId}</li> */}
        <li onClick={() => toggleSelected(boardId)}>{boardTitle}</li>
        {/* <li>Name: {boardName}</li> */}
      </ol>
    </div>
  );
}

Board.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  selectBoard: PropTypes.func.isRequired,
  unselectBoard: PropTypes.func.isRequired,
};
export default Board;
