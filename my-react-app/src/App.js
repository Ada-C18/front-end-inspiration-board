import "./App.css";

// import BikeList from "./components/BikeList.js";
// import axios from "axios";
import NewBoard from "./components/NewBoard";
import BoardList from "./components/BoardList";
import { useState } from "react";

function App() {
  // const addBoard = (newBoardInfo) => {
  //   axios.post(URL, newBoardInfo)
  //   .then((response)=>{
  //     //fetchAllBikes();  //<- This helper function will make a .get() call to fetch all bikes and update the state variable to display them
  //     const newBoards = [...bikesList];
  //     const newBikeJSON={
  //       ...newBikeInfo,
  //       "id": response.data.id
  //     }
  //     newBikes.push(newBikeJSON);
  //     setBikesList(newBikes); //this method does not require a .get request; we are pushing the bike data to the bikes list and using the setter to trigger a rerender.
  //   })
  //   .catch((error)=>{
  //     console.log(error);
  //   });
  // }

  const InitialList = [
    {
      id: 1,
      title: "titletest",
      name: "nametest",
      selected: false,
    },
    {
      id: 2,
      title: "titletest2",
      name: "nametest2",
      selected: false,
    },
  ];
  const [boardList, setBoardList] = useState(InitialList);

  const selectBoard = (boardId) => {
    const newBoardList = [];
    for (const board of boardList) {
      if (board.id === boardId) {
        const newBoard = {
          ...board,
          selected: true,
        };
        newBoardList.push(newBoard);
      } else {
        newBoardList.push(board);
      }
    }
    setBoardList(newBoardList);
  };

  const unselectBoard = (boardId) => {
    const newBoardList = [];
    for (const board of boardList) {
      if (board.id === boardId) {
        const newBoard = {
          ...board,
          selected: false,
        };
        newBoardList.push(newBoard);
      } else {
        newBoardList.push(board);
      }
    }
    setBoardList(newBoardList);
  };
  const selectedBoard = [];
  const displaySelectedBoard = (boardId) => {
    for (const board of boardList) {
      if (board.selected === true) {
        selectedBoard.push(board.title, board.name);
      }
    }
  };

  return (
    <div className="App">
      <h1 className="App-header"> Mindful Moments</h1>
      <h2>BOARDS</h2>
      <main>
        <BoardList
          boardList={boardList}
          selectBoard={selectBoard}
          unselectBoard={unselectBoard} /* entries={Board}*/
        />
      </main>
      <h2>SELECTED BOARDS</h2>
      <p>
        {selectedBoard[0]} - {selectedBoard[1]}
      </p>
      <h2>CREATE NEW BOARD</h2>
      <NewBoard></NewBoard>
      <h2>CARDS FOR "selected board"</h2>
      {/* <NewCardForm></NewCardForm> */}
      <h2>CREATE NEW CARD</h2>
      {/* <main>
        <CardsList entries={singleCard} />
      </main> */}
    </div>
  );
}

export default App;
