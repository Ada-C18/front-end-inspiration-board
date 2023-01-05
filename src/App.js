import "./App.css";
import { useState } from "react";
import BoardInfo from "./components/BoardInfo";
import axios from "axios";

function App() {
  const cardList = [
    {
      id: 1,
      title: "Great day",
      message: "Have an awesome today",
      owner: "Jhon Smith",
    },

    {
      id: 2,
      title: "Nice",
      message: "Enjoy your day",
      owner: "Mary P",
    },

    {
      id: 3,
      title: "Courage",
      message: "You can do it",
      owner: "Nike",
    },

    {
      id: 4,
      title: "Blue Day",
      message: "Laugh is a great medicine",
      owner: "Emma Smith",
    },
  ];
  const [BoardList, setBoardList] = useState([]);

  const URL = "http://127.0.0.1:5000";

  const getAllBoards = () => {
    axios
      .get(`${URL}/boards`)
      .then((response) => {
        const boardsAPIResponseCopy = response.data;
        console.log(response);
        setBoardList(boardsAPIResponseCopy);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const firstCopy = cardList.map((card) => {
    return { ...card };
  });

  const [entries, setEntries] = useState(firstCopy);

  const deleteCard = (id) => {
    console.log("delete Card");
    const newCardList = [];
    for (const card of entries) {
      if (card.id !== id) {
        newCardList.push(card);
      }
    }
    setEntries(newCardList);
  };

  return (
    <div className="App">
      <h1> Inspiration Board </h1>

      <h2> Create a New Board</h2>
      {getAllBoards()}
      <BoardInfo entries={entries} deleteCard={deleteCard} />
    </div>
  );
}

export default App;
