import "./BoardMenuItem.css";

const BoardMenuItem = (props) => {
  //Also need to figure out how to calculate # of likes
  // Question from Katherine: Aren't we actually showing the number of cards here,
  // not the number of likes?

  return (
    <li>
      <button className={`menu-item ${props.class}`}>
        {props.title}&nbsp;
        <span id="cardCount">
          ({props.cards} {props.cards === 1 ? "card" : "cards"})
        </span>
      </button>
    </li>
  );
};

export default BoardMenuItem;
