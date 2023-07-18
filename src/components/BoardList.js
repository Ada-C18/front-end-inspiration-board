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
            <li>{board.title}</li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default BoardList;
