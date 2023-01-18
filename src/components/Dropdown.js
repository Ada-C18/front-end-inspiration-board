// shows new boards as they come up. Be able to create a new option when a new board is created
// ideally tackling this 1/18/2023 together

const Dropdown = ({ boardData }) => {
  console.log(boardData, "boardData");
  return (
    <div>
      <select>
        {boardData.map((opts, i) => (
          <option key={i}>{opts.title}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
