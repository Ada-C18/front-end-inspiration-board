import "./App.css";
import NewBoardForm from "./components/NewBoardForm";
import NewCardForm from "./components/NewCardForm";
import Board from "./components/Board";
import Card from "./components/Card";
import CardList from "./components/CardList";
import { useState } from "react";
const URL = process.env[' REACT_APP_BACKEND_URL'];

// const App = () => {
//   const [boardData, setBoardData] = useState([]);
//   const [cardData, setCardData] = useState([]);
//   useEffect(() => {   
//     axios
//       .get(URL)
//       .then((response)=>{
//         const newBoards = response.data.map((board)=> {
//           return{
//             id: board.id,
//             title: board.title,
//             owner: board.owner
//           };
//         });
//         setBoardData(newBoards);
//     })
//     .catch((error)=> {
//       console.log(error);
//     });
//     },[]);

//     const addBoard = (board) => {
//       axios
//         .post(URL, boardData)
//         .then((response) => {
//           const newBoards = [...boardData];
//           newBoards.push({ id: response.data.id, title:'', ...board});
//           setBoardData(newBoards);
//         })
//         .catch((error)=> console.log (error));

//     };
//     useEffect(() => {   
//       axios
//         .get(URL)
//         .then((response)=>{
//           const newCards = response.data.cards.map((card)=> {
//             return{
//               id: card.id,
//               message: card.message
//             };
//           });
//           setCardData(newCards);
//       })
//       .catch((error)=> {
//         console.log(error);
//       });
//       },[]);

//       const addCard = (card) => {
//         axios
//           .post(URL, cardData)
//           .then((response) => {
//             const newCards = [...cardData];
//             newCards.push({ id: response.data.id, message:'', ...card});
//             setBoardData(newCards);
//           })
//           .catch((error)=> console.log (error));
//       };

//       const deletCard = (id) => {
//         axios 
//           .delete(`${URL}/${id}`)
//           .then(()=> {
//             const newCards = cardData.filter((card)=> card.id !==id);
//             setCardData(newCards);
//           })
//           .catch((error)=> {
//             console.log(error);
//           });
//       };

const boardsData = [
  {
    id: 1,
    title: "hello world",
    owner: "123",
    boardClicked: false,
    cards: [
      { id: 1, message: "Today's best card" },
      {
        id: 2,
        message: " Having a good time",
      },
    ],
  },
  {
    id: 2,
    title: "hello east coast",
    owner: "456",
    cards: [
      {
        id: 3,
        message: "Friday vibes",
      },
    ],
  },
];

function App() {
  const [boardData, setBoardData] = useState(boardsData);
  const [cardData, setCardData] = useState(boardData.cards);

  const displayCards = boardData.map((board) => {
    return board.cards.message;
  });

  const updateBoardData = (updatedBoard) => {
    const boards = boardData.map((board) => {
      if (board.id === updatedBoard.id) {
        return updatedBoard;
      } else {
        return board;
      }
    });
    setBoardData(boards);
  };
  const updateCardData = (updatedCard) => {
    const cards = cardData.map((card) => {
      if (card.id === updatedCard.id) {
        return updatedCard;
      } else {
        return card;
      }
    });
    setCardData(cards);
  };

  const [selectedBoard, setSelectedBoard] = useState({
    title: "",
    owner: "",
    id: null,
  });

  const handleBoardClicked = (id) => {
    const findId = boardData.map((board) => {
      if (id === board.id) {
        setSelectedBoard(board);
        setCardData(board.cards);
      }

      // filter the cards based on id parameter
      //another piece of state for selected cards
    });
  };

  const [showForm, setShowForm] = useState(true);

  const deleteCard = (id) => {
    const newCards = cardData.filter((card) => card.id !== id);
    setCardData(newCards);
    console.log("i am deletCard");
  };

  return (
    <section>
      <header className="header">INSPIRATION BOARD</header>
      <div className="control_panel">
        <div className="boards_container">
          <Board boards={boardData} onBoardClicked={handleBoardClicked} />
        </div>
        <div>
          <h1> Selected Board</h1>
          {/* <p>{selectedBoard.title} {selectedBoard.owner}</p> */}
          <p>
            {selectedBoard.id
              ? `${selectedBoard.title}  ${selectedBoard.owner}`
              : "Please select a Board from the Board List!"}
          </p>
        </div>
        <div>
          <h1> Create A New Board </h1>
          {showForm && <NewBoardForm onUpdateBoardData={updateBoardData} />}
          <button type="button" onClick={() => setShowForm(!showForm)}>
            {" "}
            {showForm === true ? "Hide New Board Form" : "Show New Board Form"}
          </button>
        </div>
      </div>
      <br></br>

      <div className="corkboard">
        {selectedBoard.id && (
          <div className="boardtitle">Cards for {selectedBoard.title}</div>
        )}
        {selectedBoard.id && (
          <div className="board_container">
            {displayCards}
            <CardList cards={cardData} onDeleteCard={deleteCard}></CardList>

            <div className="new_card">
              <h3> Create a New Card</h3>
              <NewCardForm onUpdateCardData={updateCardData} />
            </div>
          </div>
        )}
      </div>
      {/* <footer>
        <p> Click here to delete all boards and cards</p>
      </footer> */}
    </section>
  );
}
export default App;
