const BoardSelector = (props) => {
  const boardNames = props.listOfBoards.map((board) => {
    return <div>{board.boardName}</div>;
  });

  return <article>{boardNames}</article>;
};

export default BoardSelector;
