<<<<<<< HEAD
import React from 'react';
=======
import React from "react";
import PropTypes from "prop-types";
import NewBoardForm from "./NewBoardForm";

// const Board = (props) => {
//     const boardComponents = props.entries.map((board) => {
//         return (
//             <div>
//                 <NewBoardForm
//                     title={board.title}
//                 ></NewBoardForm>
//             </div>
//         );
//     })

//     return (
//         <div onClick={() => props.onBoardSelect(props.board)}>
//             {boardComponents}
//         </div>
//     );
// };

// Board.propTypes = {
//     entries: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         board: PropTypes.string.isRequired,
//     })),
//     onBoardSelect: PropTypes.func.isRequired
// };
>>>>>>> 9c4b77691a1ac2340941acbe6930077e1ca7db20

const Board = (props) => {
  console.log(props);
  return (
    <div onClick={() => props.onBoardSelect(props.board)}>
      <li>
        <span>{props.board.title}</span>
      </li>
    </div>
  );
};

export default Board;
