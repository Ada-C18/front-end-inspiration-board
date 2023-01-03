import PropTypes from "prop-types";

function Board(props) {
  const boardId = props.id;
  const boardTitle = props.title;
  const boardOwner = props.owner;
  const selectBoard = props.selectBoard;

  function onSelectBoard() {
    selectBoard(boardTitle, boardOwner);
  }

  return <li onClick={onSelectBoard}>{boardTitle}</li>;
}

export default Board;
