import PropTypes from "prop-types";
import { HiOutlineSparkles } from 'react-icons/hi';

const Board = ({ board, onBoardSelect }) => {
  // const handleClick = () => {
  //   onBoardSelect(board.id);
  // };

  return <li className="board" onClick={()=> onBoardSelect(board.id)}><HiOutlineSparkles /> {board.title} <HiOutlineSparkles /></li>;
};

Board.propTypes = {
  board: PropTypes.object,
  onBoardSelect: PropTypes.func,
};

export default Board;
