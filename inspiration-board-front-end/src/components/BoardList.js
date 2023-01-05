import React from "react";
import PropTypes from "prop-types";
import "./BoardList.css";

const BoardList = (props) => {
  return (
    <div className="App">
      <h2>Boards</h2>
      <ul>
        <li> Board 1 </li>
        <li> Board 2 </li>
        <li> Board 3 </li>
      </ul>
    </div>
  );
};

BoardList.propTypes = {};

export default BoardList;
