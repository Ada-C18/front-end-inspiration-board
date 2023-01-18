import "./BoardSelector.css";

const BoardSelector = (props) => {
  let options = props.listOfBoards.map((board) => {
    return (
      <option key={board.id} value={board.id}>
        "{board.name}"
      </option>
    );
  });

  const onSelectBoard = (e) => {
    props.updateCurrentBoard(e.target.value);
  };

  return (
    <div className="select">
      <select id="board-select" name="boardSelector" onChange={onSelectBoard}>
        <option value="">Boards</option>
        {options}
      </select>
    </div>
  );
};

export default BoardSelector;
