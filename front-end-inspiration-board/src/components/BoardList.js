import PropTypes from "prop-types";
import Board from "./Board";

function BoardList(props) {
  const boardComponents = [];

  for (const board of props.boardsList) {
    boardComponents.push(
      <Board
        key={board.id}
        id={board.id}
        title={board.title}
        owner={board.owner}
        cards={board.cards}
      />
    );
  }

  return <ol className="boardList">{boardComponents}</ol>;
}

BoardList.propTypes = {
  boardsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      owner: PropTypes.string,
    })
  ),
};

export default BoardList;
