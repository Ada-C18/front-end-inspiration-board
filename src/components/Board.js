import React, { useState } from "react";
import PropTypes from "prop-types";
import Card from "./Card";

const Board = (props) => {

  return(
    <div className='board'>
      <h1> BOARD TITLE</h1>
      <Card />
    </div>
  )
};

export default Board;