import { React, useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import BoardList from "./components/BoardList.js";

// const INITIAL_BOARDS = [
//   {
//     id: 1,
//     title: "Encouraging Notes",
//     owner: "June",
//   },
//   {
//     id: 2,
//     title: "Sage Advice",
//     owner: "Jasmine",
//   },
//   {
//     id: 3,
//     title: "Mindfulness Tips!",
//     owner: "Tapasya",
//   },
// ];

function App() {
  // console.log("hello world!");
  const [boardsList, setBoardsList] = useState([]);

  const URL = "http://localhost:5000/boards";
  const fetchAllBoards = () => {
    axios
      .get(URL)
      .then((res) => {
        //making a copy of the data to display to DOM
        const boardsAPIResCopy = res.data.map((board) => {
          return {
            id: board.id,
            title: board.title,
            owner: board.owner,
          };
        });
        setBoardsList(boardsAPIResCopy);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(fetchAllBoards, []);

  return (
    <div>
      <BoardList boardEntries={boardsList}></BoardList>
    </div>
  );
}

export default App;
