import { useNavigate } from "react-router-dom";
import "./BoardMenuItem.css";

const BoardMenuItem = (props) => {

  const navigate = useNavigate();
  const getBoardCards = props.getBoardCards;

  const goToSingleBoardView = (boardId=props.id) => {
    getBoardCards(boardId);
    return navigate(`/boards/${props.id}`) 
  };

  return (
    <li>
      <button className={`menu-item ${props.class}`} onClick={() => goToSingleBoardView()}>
        {props.title}&nbsp;
        <span id="cardCount">
          ({props.cards} {props.cards === 1 ? "card" : "cards"})
        </span>
      </button>
    </li>
  );
};

export default BoardMenuItem;
