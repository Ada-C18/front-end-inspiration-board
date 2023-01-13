import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './CurrentBoard.css';

const CurrentBoard = function (props) {
  const currentBoardObj = props.boardListData.find(
    (boardObj) => boardObj.board_id === props.currentBoardState
  );

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
