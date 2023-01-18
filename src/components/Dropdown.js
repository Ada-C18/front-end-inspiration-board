
const Dropdown = ({ boardData, getBoardId, getBoardTitle } ) => {
  // console.log(boardData, "boardData");
  const onChangeBoard = (event) => {
    const board_title = event.target.value
    const board_id = event.target.selectedIndex
    getBoardId(board_id);
    getBoardTitle(board_title);
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
