import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './BoardForm.css';

const BoardList = function (props) {
  const renderOption = function (boardObj) {
    return (
      <option key={boardObj.id.toString()} value={boardObj.id}>
        {boardObj.name}
      </option>
    );
  };

  const handleSelect = function (event) {
    // console.log('In handleSelect');
    props.handleBoardSelect(event.target.value);
  };

  return (
    <div>
      <h2>Boards</h2>
      <select name="Country" multiple size="5" onChange={handleSelect}>
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
