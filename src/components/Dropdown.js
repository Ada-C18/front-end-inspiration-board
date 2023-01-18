// shows new boards as they come up. Be able to create a new option when a new board is created
// ideally tackling this 1/18/2023 together


const Dropdown = ({ boardData }) => {
  // console.log(boardData, "boardData");
  const onChangeBoard = (event) => {
    const board_title = event.target.value
    const board_id = event.target.selectedIndex
    console.log(board_title)
    console.log(board_id)    
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
