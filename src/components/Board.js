import { useState } from "react";

const Board = (props) => {
    // const onClick = () => {
    //     const updateBoard= {
    //     id:props.id,
    //     title:props.title,
    //     owner:props.owner
    // }
    // props.onDisplayBoard;
    // }
    return (
        <div>
            <ol>
            <li>{props.title}</li> 
            {/* < onClick= {onClick}></input> */}
            </ol>
        </div>
        )
}

export default Board;