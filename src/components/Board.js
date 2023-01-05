import { useState } from "react";

const Board = (props) => {
    return(<div onClick = {() => props.onBoardClicked(props.board)}>{props.board.title}</div>)
    // const onBoardClick = () => {
    //     const updatedBoard = {
    //         board: props.board,
    //         title: props.board.title
    //     }
    //     props.onBoardClicked(updatedBoard);
    // };


    // return<div> {onBoardClick}</div>
};

export default Board;
