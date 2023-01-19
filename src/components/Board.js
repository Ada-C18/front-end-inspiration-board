import "../styles/Board.css";
import PropTypes from "prop-types";

const Board = ({
  id,
  title,
  owner,
  getOneBoard,
  getBoardName,
  deleteBoard,
}) => {
  return (
    <div className="titles">
      <li onClick={() => getOneBoard(id)}>
        {" "}
        {title} <button onClick={() => deleteBoard(id)}>x</button>
      </li>
    </div>
  );
};

Board.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  getOneBoard: PropTypes.func.isRequired,
};

export default Board;
