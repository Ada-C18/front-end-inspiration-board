
const Dropdown = ({ boardData, getBoardId, getBoardTitle } ) => {
  // console.log(boardData, "boardData");
  const onChangeBoard = (event) => {
    const board_title = event.target.value
    getBoardTitle(board_title);
    for (let board of boardData) {
      if (board.title === board_title) {
      getBoardId(board.board_id)
      }
    }
  }



  return (
    <div>
      <select onChange={onChangeBoard}>
      <option value="">--Choose an option--</option>
        {boardData.map((opts) => (
          <option key={opts.board_id}>{opts.title}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
