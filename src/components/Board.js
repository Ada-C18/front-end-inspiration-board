import PropTypes from 'prop-types';

const Board = ( {board, onBoardSelect} ) => {

  return(
    <li onClick={onBoardSelect}>
      {board.title}
    </li>
  );
};

Board.propTypes = {
  board: PropTypes.object,
  onBoardSelect: PropTypes.func,
};

export default Board;