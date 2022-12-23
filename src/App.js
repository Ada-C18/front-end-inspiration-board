import "./App.css";

import Board from "./components/Board";
import BoardsList from "./components/BoardsList";
import NewBoardForm from "./components/NewBoardForm";

// 1. Create component files
// 2. Set up components in App
// 3. Display list of Boards
// 4. Form

const boardsData = [
  {
    board_id: 1,
    title: "Do things!",
    owner: "Milena",
  },
  {
    board_id: 2,
    title: "You can do it!",
    owner: "Laura",
  },
];

function App() {
  return (
    <div className="App">
      {/* <Board /> */}
      <BoardsList boardsList={boardsData} />
      {/* <NewBoardForm /> */}
    </div>
  );
}

export default App;
