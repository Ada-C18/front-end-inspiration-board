import React from "react";
import PropTypes from "prop-types";
import "./BoardList.css";
import Board from "./Board";

const BoardList = (props) => {
  return (
    <div className="App">
      <h2>Boards</h2>
      <ul>
        <Board title="Test Board"></Board>
        <li> Board 2 </li>
        <li> Board 3 </li>
      </ul>
    </div>
  );
};

BoardList.propTypes = {
  boards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      owner: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
export default BoardList;
