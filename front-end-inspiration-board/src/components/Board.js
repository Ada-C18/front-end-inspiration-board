import PropTypes from "prop-types";

function Board(props) {
  const boardId = props.id;
  const boardTitle = props.title;
  const boardOwner = props.owner;
  const boardCards = props.cards;

  return <li>{boardTitle}</li>;
}

Board.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  owner: PropTypes.string,
  cards: PropTypes.array,
};

export default Board;
