import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './CardList.css';

const CurrentBoard = function (props) {
  console.log(props.currentBoardState);
  // find the board object matching state OR
  // use the first board in list
  const currentBoardObj =
    props.boardListData.find(
      (boardObj) => boardObj.board_id === props.currentBoardState
    ) || props.boardListData[0];

  return (
    <div>
      <h2>Current Board</h2>
      <h3>
        {currentBoardObj.name} - {currentBoardObj.owner}
      </h3>
    </div>
  );
};

CurrentBoard.propTypes = {
  currentBoardState: PropTypes.number.isRequired,
  boardListData: PropTypes.array.isRequired,
};

export default CurrentBoard;
