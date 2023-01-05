import PropTypes from "prop-types";

function Board(props) {
  const boardId = props.id;
  const boardTitle = props.title;
  const boardOwner = props.owner;
  const selectBoard = props.selectBoard;

  function onSelectBoard() {
    selectBoard(boardTitle, boardOwner, boardId);
  }

  return <li onClick={onSelectBoard}>{boardTitle}</li>;
}

Board.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  selectBoard: PropTypes.func.isRequired,
};

export default Board;
