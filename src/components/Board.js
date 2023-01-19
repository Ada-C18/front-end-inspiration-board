import PropTypes from "prop-types";
import "./Board.css";

const Board = ({ id, title, owner }) => {
  // const id = props.id;
  // const title = props.title;
  // const [selectedBoard, setSelectedBoard] = useState(null);
  // const dataClickHandler = (e) => {
  //   console.log("clickHandle called");
  //   const newSelectedBoard = {
  //     ...selectedBoard,
  //     [e.target.name]: e.target.value,
  //   };
  //   // console.log(e.target.name);
  //   console.log(e);
  //   setSelectedBoard(newSelectedBoard);
  // };
  let i = 0;
  return (
    <li key={i + 1}>
      {id}. {title}
    </li>
  );
};

Board.propTypes = {
  id: PropTypes.number.isRequired,
  key: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  //   owner: PropTypes.string.isRequired,
  loadBoardOnClick: PropTypes.func.isRequired,
};

export default Board;
