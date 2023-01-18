import React from 'react';

const Board = (props) => {
    console.log(props)
    return (
        <div onClick={() => props.onBoardSelect(props.board)}>
            {props.board.title}
        </div>
    );
};

export default Board;