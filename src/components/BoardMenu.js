import "./BoardMenu.css";
import BoardMenuItem from "./BoardMenuItem";

const BoardMenu = (props) => {
  // map through data to create an array of BoardMenuItems
  // return that as an unordered list without bullets
  // ** add a color prop for alternating colors on menu ?

  // console.log(props);

  const getBoardMenuItemList = () => {
    return props.data.map((board, index) => {
      return (
        <BoardMenuItem
          key={board.id}
          id={board.id}
          title={board.board_title}
          owner={board.board_owner}
          cards={board.card_id.length}
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
