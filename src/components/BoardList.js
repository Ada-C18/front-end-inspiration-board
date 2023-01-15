import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './BoardList.css';

const BoardList = function (props) {
  const renderOption = function (boardObj) {
    return (
      <option key={boardObj.board_id.toString()} value={boardObj.board_id}>
        {boardObj.name}
      </option>
    );
  };

  const handleSelect = function (event) {
    // console.log('In handleSelect');
    props.handleBoardSelect(event.target.value);
  };

  return (
    <div id="boardList">
      <h2>Boards</h2>
      <select
        id="boardSelect"
        name="Country"
        multiple
        size="5"
        onChange={handleSelect}
      >
        {props.boardListData.map(renderOption)}
      </select>
    </div>
  );
};

BoardList.propTypes = {
  handleBoardSelect: PropTypes.func.isRequired,
  boardListData: PropTypes.array.isRequired,
};

export default BoardList;
