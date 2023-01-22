import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import BoardContainer from "./components/BoardContainer";
import CardContainer from "./components/CardContainer";
import Header from "./components/Header";
import NewBoardForm from "./components/NewBoardForm";
import NewCardForm from "./components/NewCardForm";

// const url = "https://group-4-inspo-board.herokuapp.com"
const url = "http://localhost:5000"


// helper function for boards API request
const getAllBoardsApi = () => {
  return axios
    .get(`${url}/board`)
    .then((response) => {
      const newBoards = response.data.map((board) => {
        return {
          id: board.board_id,
          title: board.title,
          owner: board.owner,
        };
      });

      return newBoards;
    })
    .catch((error) => {
      console.log(error);
    });
};

// helper function for cards API request
const getAllCardsApi = (id) => {
  return axios
    .get(`${url}/board/${id}/cards`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

// helper function for delete card API request
const deleteCardApi = (boardId, cardId) => {
  return axios.delete(`${url}/board/${boardId}/cards/${cardId}`)
  .then(response => {
    console.log(response);
    console.log(`Card ${cardId} from Board ${boardId} deleted`);
  })
  .catch(error => {
    console.log(error);
  })
};

// helper function for patch API request
const patchCardApi = (boardId, cardId) => {
  return axios.patch(`${url}/board/${boardId}/cards/${cardId}`)
  .then(response => {
    console.log(response)
    console.log(`Card ${cardId} from Board ${boardId} patched`);
    return response.data;
  })
  .catch(error => {
    console.log(error);
  })};

function App() {
  // state
  const[isBoardFormVisible,setIsBoardFormVisible] = useState(true);
  const [boards, setBoards] = useState([]);
  const [cards, setCards] = useState([]);
  const [boardFormMessage, setBoardFormMessage] = useState("");
  const [cardFormMessage, setCardFormMessage] = useState("");
  const [currentBoard, setCurrentBoard] = useState({title: "No board selected",});
  const [boardSelected, setBoardSelected] = useState(false);

  // toggle button
  const toggleNewBoardForm = () =>{setIsBoardFormVisible(!isBoardFormVisible)}
 
  // get all boards using API helper
  const getAllBoards = () => {
    return getAllBoardsApi().then((boards) => setBoards(boards));
  };

  // get all boards when App renders
  useEffect(() => {
    getAllBoards();
  }, [currentBoard]);

  //Delete board 
  const deleteBoard =()=>{

        try {
            const res = axios.delete(`${url}/board/${currentBoard.id}`)
            console.log(res,"got the data back from api ")
            setCurrentBoard({title: "No board selected",})
            
            
        } catch (error) {
            console.log(error)
        }
       

    }
  // get all cards using API helper
  const getAllCards = (id) => {
    console.log(`currentBoard.id: ${currentBoard.id}`)
    getAllCardsApi(id).then((cards) => {
      const allCards = [];
      for (let card of cards) {
        allCards.push({
          id: card.card_id,
          message: card.message,
          likeCount: card.likes_count,
        });
      }
      setCards(allCards);
    });
  };

  // display current board callback for selected Board
  const displayCurrentBoard = (id) => {
    for (let board of boards) {
      if (id === board.id) {
        console.log(board,"display current board")
        setCurrentBoard(board);
        getAllCards(id);
        setBoardSelected(true);
        setBoardFormMessage("");
        setCardFormMessage("");
      }
    }
  };

  // add new board callback for new board form
  const addBoard = (boardData) => {
    if (!boardData.title || !boardData.owner) {
      setBoardFormMessage("Please enter a title or owner.");
    } else {
      axios
      .post(`${url}/board`, boardData)
      .then((response) => {

        const newBoards = [...boards];

        newBoards.push({
          title: response.data.title,
          owner: response.data.owner,
          ...boardData,
        });

        setBoards(newBoards);
        setBoardFormMessage("You made a new board!");
      })
      .catch((error) => {
        console.log(error);
        setBoardFormMessage("Input is invalid.");
      });
    }
  };

  // add new card callback for new card form
  const addCard = (cardData) => {
    console.log(`currentBoard.id: ${currentBoard.id}`)
    axios
      .post(`${url}/board/${currentBoard.id}/cards`, cardData)
      .then((response) => {

        const newCards = [...cards];

        newCards.push({
          message: response.data.message,
          likeCount: response.data.likes_count,
          ...cardData,
        });

        setCards(newCards);
        setCardFormMessage("You made a new card!");
      })
      .catch((error) => {
        console.log(error);
        // add conditional to display custom message for empty message or exceeded character limit
        setCardFormMessage("Input invalid");
      });
  };

  // delete card from board
  const deleteCard = (cardId) => {
    deleteCardApi(currentBoard.id, cardId)
    .then(response => {
      setCards(cards => cards.filter(card => {
        return card.id !== cardId;
      }))
    })
  };

  // increase like count for card
  // add function to increase likes on card
  const incrementLikeCount = (id) => {
    patchCardApi(currentBoard.id, id)
    .then(newLikeCount =>{
      setCards(cards => cards.map(card => {
        if (card.id === id) {
          return {
              id: id,
              message: card.message, 
              likeCount: newLikeCount,
              ...cards};
        } else {
          return card;
        }
      }));
      });
    }

  return (
    <div className="App">
      <Header />
      {isBoardFormVisible ? <NewBoardForm addBoardCallback={addBoard} afterSubmitMessage={boardFormMessage}></NewBoardForm>: ''}
      <span onClick={toggleNewBoardForm} className='new-board-form__toggle-btn'>{isBoardFormVisible ? 'Hide New Board Form' : 'Show New Board Form'}</span>
      {/* <NewBoardForm addBoardCallback={addBoard} afterSubmitMessage={boardFormMessage} toggleHide={toggleHide} isVisible={isVisible}/> */}
      <BoardContainer
        boards={boards}
        onDisplayCurrentBoard={displayCurrentBoard}
      />
      <NewCardForm addCardCallback={addCard} afterSubmitMessage={cardFormMessage} boardSelected={boardSelected}/>
      <CardContainer deleteBoard={deleteBoard} currentBoard={currentBoard} cards={cards} onDeleteCard={deleteCard} incrementLikeCount={incrementLikeCount}/>
    </div>
  );
  };

export default App;
