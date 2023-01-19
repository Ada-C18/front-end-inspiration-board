import PropTypes from "prop-types";

function Board(props) {
  const boardId = props.id;
  const boardTitle = props.title;
  const boardOwner = props.owner;
  const boardCards = props.cards;
  const selected = props.selected;
  const boardSelector = props.boardSelector;

  const onBoardSelect = () => {
    const selectedBoard = {
      id: boardId,
      title: boardTitle,
      owner: boardOwner,
      cards: boardCards,
      selected: true,
    };
    boardSelector(selectedBoard);
  };

  return <li onClick={onBoardSelect}>{boardTitle} </li>;
}

Board.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  owner: PropTypes.string,
  cards: PropTypes.array,
  selected: PropTypes.bool,
  boardSelector: PropTypes.func,
};

export default Board;
