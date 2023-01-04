import PropTypes from "prop-types";

import Board from "./Board";

function BoardList(props) {
  const boardComponents = [];
  const boardList = props.boardList;

  for (const board of boardList) {
    boardComponents.push(
      <Board
        key={board.id}
        id={board.id}
        title={board.title}
        name={board.name}
      />
    );
  }

  return <div>{boardComponents}</div>;
}

BoardList.propTypes = {
  boardList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default BoardList;
