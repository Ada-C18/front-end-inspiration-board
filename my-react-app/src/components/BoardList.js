//fix numbering on display of board list (keeps displaying the number 1 for every board)
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
        name={board.owner}
        selected={board.selected}
        selectBoard={props.selectBoard}
        unselectBoard={props.unselectBoard}
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
  selectBoard: PropTypes.func.isRequired,
  unselectBoard: PropTypes.func.isRequired,
};

export default BoardList;
