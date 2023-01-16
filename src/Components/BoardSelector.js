const BoardSelector = (props) => {
  let options = props.listOfBoards.map((board) => {
    return <option key={board.id} value={board.id}>{board.name}</option>;
  });

  const onSelectBoard = e => {
    props.updateCurrentBoard(e.target.value);
  }

  return (
      <select name="boardSelector" onChange={onSelectBoard}>
        <option value="">Select Board:</option>
        {options}
      </select>
  );
};

export default BoardSelector;
