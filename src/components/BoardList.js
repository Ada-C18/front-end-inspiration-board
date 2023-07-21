import React from 'react';
import './BoardList.css';
import PropTypes from 'prop-types';

const BoardList = (props) => {
  return (
    <section>
      <h2 className='board_title'>Boards</h2>
      <div className='board_container'>
        <ol>
          {props.boardData.map((board) => (
            <li onClick={(e) => props.onBoardSelect(board.id)}>{board.title}</li>
          ))}
        </ol>
      </div>
    </section>
  );
};

BoardList.propTypes = {
  boardData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      owner: PropTypes.string,
    })
  ).isRequired,
  onBoardSelect: PropTypes.func.isRequired
};

export default BoardList;
