import PropTypes from "prop-types";

const Board = ({ board, onBoardSelect }) => {
  // const handleClick = () => {
  //   onBoardSelect(board.id);
  // };

  return <li onClick={()=> onBoardSelect(board.id)}>{board.title}</li>;
};

Board.propTypes = {
  board: PropTypes.object,
  onBoardSelect: PropTypes.func,
};

export default Board;
