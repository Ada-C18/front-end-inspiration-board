import "./App.css";
import CreateBoard from "./components/CreateBoard";
import React, { useState, useEffect } from "react";
import CreateCard from "./components/CreateCard";
import BoardsList from "./components/BoardsList";
import Board from "./components/Board";
import axios from "axios";

function App() {
  const [BoardData, setBoardData] = useState([]);
  const [CardsData, setCardsData] = useState([]);
  const [Options, setOptions] = useState([]);

  const addBoardData = (newBoard) => {
    axios
      .post(
        "https://blin-inspiration-board-backend.herokuapp.com/boards",
        newBoard
      )
      .then((response) => {
        addSelectData();
        //   const newBoardList = [...BoardData];

        //   newBoardList.push({
        //     title: newBoard.title,
        //     owner: newBoard.owner,
        //     id: newBoard.id,
        //   });

        //   setBoardData(newBoardList);
      })
      .catch((error) => {
        console.log("New board not stored in back-end.", error);
      });
  };

  const addSelectData = (newOption) => {
    axios
      .get("https://blin-inspiration-board-backend.herokuapp.com/boards")
      .then((response) => {
        // console.log("axios get request @App.js:");
        // console.log(response.data);

        setOptions(response.data);

        //   const optionsList = [...Options];

        //   optionsList.push({
        //     value: newOption.value,
        //     label: newOption.label,
        //     bgColor: "#e4eaea", // background color of each title in select
        //     color: "#696969", // text color of each title in select
        //   });

        // setOptions(optionsList);
      })
      .catch((error) => {
        console.log("Could not store board in back-end.", error);
      });
  };

  useEffect(() => addSelectData, [Options.length]);

  const addCardsData = (newCard) => {
    // const newCardsList = [...CardsData];
    // newCardsList.push({
    //   boardId: newCard.boardId,
    //   text: newCard.title,
    //   likesCount: newCard.likesCount,
    // });
    // setCardsData(newCardsList);

      axios
        .post(
          "https://blin-inspiration-board-backend.herokuapp.com/boards/1/cards",
          newCard
        )
        .then((response) => {
          addSelectData();
        })
        .catch((error) => {
          console.log("Could not store card in back-end.", error);
        });
  };

  const getBoardCards = (boardCards) => {
    axios
      .get("https://blin-inspiration-board-backend.herokuapp.com/boards/1/cards")
      .then((response) => {
        console.log("axios get request @App.js:");
        console.log(response.data);

        setCardsData(response.data);

        //   const optionsList = [...Options];

        //   optionsList.push({
        //     value: newOption.value,
        //     label: newOption.label,
        //     bgColor: "#e4eaea", // background color of each title in select
        //     color: "#696969", // text color of each title in select
        //   });

        // setOptions(optionsList);
      })
      .catch((error) => {
        console.log("Could get cards data from back-end.", error);
      });
  };

  useEffect(() => addSelectData, [CardsData.length]);

  /* ADD API CALL ON EVENT HANDLER:
    - When board is selected,  pull all cards associated to that board.
  */

  return (
    <div className="App">
      <header className="App-header">
      <div>
        <CreateBoard className='form' id='create-board' addBoard={addBoardData}></CreateBoard>
        <BoardsList className='select-menu' id ='boards-list' selectData={addSelectData} availableData={Options} />
        <CreateCard className='form' id='create-card' addCard={addCardsData}></CreateCard>
      </div>
      </header>
      <body>
        <Board />
      </body>

      {/* <footer className = "App-footer"> By Lee, Nashwa, Brooke, and Ihovanna</footer> */}
    </div>
  );
}

export default App;
