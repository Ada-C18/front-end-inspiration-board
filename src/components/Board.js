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
