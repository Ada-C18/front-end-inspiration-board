import { Link } from "react-router-dom";
import "./BoardMenuItem.css";

const BoardMenuItem = (props) => {
  //Also need to figure out how to calculate # of likes
  // Question from Katherine: Aren't we actually showing the number of cards here,
  // not the number of likes?

  return (
    <li>
      <Link to={`/boards/${props.id}`}>
        <button className={`menu-item ${props.class}`}>
          {props.title}&nbsp;
          <span id="cardCount">
            ({props.cards} {props.cards === 1 ? "card" : "cards"})
          </span>
          <span> &mdash; {props.owner}</span>
        </button>
      </Link>
    </li>
  );
};

export default BoardMenuItem;
