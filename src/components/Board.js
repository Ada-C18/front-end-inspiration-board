import PropTypes from "prop-types";
import React, { useState } from "react";
import "./Board.css";

const Board = (props) => {
  // const id = props.id;
  // const title = props.title;
  // const [selectedBoard, setSelectedBoard] = useState(null);
  // const dataClickHandler = (e) => {
  //   console.log("clickHandle called");
  //   const newSelectedBoard = {
  //     ...selectedBoard,
  //     [e.target.name]: e.target.value,
  //   };
  //   // console.log(e.target.name);
  //   console.log(e);
  //   setSelectedBoard(newSelectedBoard);
  // };
  //   return (
  //     <li className="boards_items">
  //       {/* {id}. {title} */}
  //       {/* {id} */}
  //     </li>
  //   );
};

Board.propTypes = {
  //   id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  //   owner: PropTypes.string.isRequired,
};

export default Board;
