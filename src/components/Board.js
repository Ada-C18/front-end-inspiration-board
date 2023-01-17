<<<<<<< HEAD
const Board = ( {boardData} ) => {
  // console.log("boardData", boardData);
  return (
    <div className="selectedBoard">
      <h2>Selected Board: {boardData[0].title}</h2>
  </div>
  );
};

// Board.propTypes = {
//   id: PropTypes.number.isRequired,
//   title: PropTypes.string.isRequired,
//   owner: PropTypes.string.isRequired
// };

export default Board;
=======
const Board = (props) => {
  return (<div onClick={() => props.onBoardSelect(props.board)}>{props.board.title}</div>);
};

export default Board;
>>>>>>> f8dee8fb3d8d9b4f6e433ce9ae6065dbfcab132e
