const Board = (props) => {
  // use anonymous function for onClick because it will return
  // props.selectBoard and set that function as the event handler.
  // this is syntax for lifting state and passing event handler App to Board
  return <div onClick={() => props.selectBoard(props.board)}>{props.board.title}</div>;
};

export default Board;

