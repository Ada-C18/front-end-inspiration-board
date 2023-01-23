import "./BoardMenu.css";
import BoardMenuItem from "./BoardMenuItem";

const BoardMenu = (props) => {
  const getBoardMenuItemList = (props) => {
    return props.data.map((board, index) => {
      return (
        <BoardMenuItem
          key={board.id}
          id={board.id}
          title={board.title}
          owner={board.owner}
          cards={board.num_cards}
          class={index % 2 === 1 ? "pink" : "white"}
          getBoardCards={props.getBoardCards}
        />
      );
    });
  };

  return (
    <div id="menu-list">
      <ul> {getBoardMenuItemList(props)} </ul>
    </div>
  );
};

export default BoardMenu;
