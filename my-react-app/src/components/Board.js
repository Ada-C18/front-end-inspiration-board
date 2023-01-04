import PropTypes from "prop-types";

import "./Board.css";

function Board(props) {
  const boardId = props.id;
  const boardTitle = props.title;
  const boardName = props.name;

  return (
    <div>
      <h2 className="board__name">{boardName}</h2>
      <ul>
        <li>ID: {boardId}</li>
        <li>Title: {boardTitle}</li>
        <li>Name: {boardName}</li>
        <li></li>
      </ul>
    </div>
  );
}

Board.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default Board;
