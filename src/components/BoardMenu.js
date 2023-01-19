import "./BoardMenu.css";
import BoardMenuItem from "./BoardMenuItem";

const BoardMenu = (props) => {
  // map through data to create an array of BoardMenuItems
  // return that as an unordered list without bullets
  // ** add a color prop for alternating colors on menu ?

  console.log(props);

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

// BoardMenu.propTypes = {}

export default BoardMenu;
