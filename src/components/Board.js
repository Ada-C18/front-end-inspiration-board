import PropTypes from "prop-types";
import { HiOutlineSparkles } from 'react-icons/hi';

const Board = ({ board, onBoardSelect }) => {
  return <li className="board" onClick={()=> onBoardSelect(board.id)}><HiOutlineSparkles /> {board.title} <HiOutlineSparkles /></li>;
};

Board.propTypes = {
  board: PropTypes.object.isRequired,
  onBoardSelect: PropTypes.func.isRequired,
};

export default Board;
