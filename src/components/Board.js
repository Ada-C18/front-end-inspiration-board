import PropTypes from "prop-types";
import "./Board.css";

const Board = (props) => {
  const displayBoards = props.boards.map((board) => {
    return (
      <ol>
        <li> {board.title} </li>
      </ol>
    );
  });

  return <div> {displayBoards} </div>;
};

Board.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
};

export default Board;
