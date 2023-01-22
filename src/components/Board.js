const Board = (props) => {
  return (
    <div onClick={() => props.selectBoard(props.board)}>
      {props.board.title}
    </div>
  );
};

export default Board;
