import React from "react";

const boardList = ({ boardList, loadBoard }) => {
  const boardComponents = [];
  for (const board of boardList) {
    boardComponents.push(
      <li key={board.id} onClick={() => loadBoard(board.id)}>
        🌸 {board.id}: {board.title} - {board.owner}
      </li>
    );
  }

  return (
    <div>
      <h3>Board List Component</h3>
      <ul>{boardComponents}</ul>
    </div>
  );
};

export default boardList;
