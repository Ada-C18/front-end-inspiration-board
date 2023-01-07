
import "./App.css";
import { useState,  useEffect  } from "react";
import CardList from "./components/CardList";
import axios from "axios";
import BoardList from './components/BoardList'
import FormNewBoard from "./components/FormNewBoard";
import Board from "./components/Board";


function App() {
  const [boardList, setBoardList] = useState([]);

  const URL = "http://127.0.0.1:5000";

  const getAllBoards = () => {
    axios
      .get(`${URL}/boards`)
      .then((response) => {
        console.log(response);
        const boardsAPIResponseCopy = response.data.map((board) => {
          return{
            'id': board.id,
            'title': board.title,
            'owner' : board.owner
          }})
          setBoardList(boardsAPIResponseCopy);
      })
      .catch((err) => {
        console.log(err);
      });
  };
    useEffect(getAllBoards,[]);

    // const URL_post = "http://127.0.0.1:5000/boards";
    const addBoard = (newBoardInfo) => {
      axios.post( `${URL}/boards`, newBoardInfo)
      .then((response) => {
        const newBoard = [...boardList];
        const newBoardJson = {
          ...newBoardInfo,
          "id" : response.data.id
        }
        newBoard.push(newBoardJson);
        setBoardList(newBoard);
      })
      .catch((error) => {
        console.log(error);
      });
    }


  const [cardList, setCardList] = useState([]);

  const getOneBoard = (boardId) => {
    axios
      .get(`${URL}/boards/${boardId}`)
      .then((response) => {
          console.log(response)
          const newCardList = response.data
          setCardList(newCardList)
          })
      .catch((err) => {
        console.log(err);
      });
  };

  // no necesita el useffect para card
    // useEffect(getOneBoard,[]);


// updates backend with new card,

// const addCard = (newCardInfo) => {
//   axios.post( `${URL}/cards`, newCardInfo)
//   .then((response) => {
//     const newCards = [...cardList];
//     const newCardJson = response.data
//     newCards.push(newCardJson);
//     setCardList(newCards);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// }

// create delete card item function from backend, and update cardsList state
// const deleteCard = (cardId) => {
//   axios
//     .delete(`${URL}/${cardId}`)
//     .then(() => {
//       const updatedCards = [];
//       for (const card of cardList) {
//         if (card.id !== cardId) {
//           updatedCards.push(card);
//         }
//       }
//       setCardList(updatedCards);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// create plus one card function
//
// const countLikesTotal = (cardId) => {
//   axios
//     .put(`${URL}/${cardId}`)
//     .then(() => {
//       const updatedCards = [];
//       for (const card of cardList) {
//         if (card.id === cardId) {
//           card.likes_count += 1;
//         updatedCards.push(card);
//         }
//       }
//       setCardList(updatedCards);
//     });
//
//   return likeData.reduce((total, message) => {
//     return message.liked ? total + 1 : total;
//   }, 0);
// };


// 
  return (
    <div className="App">
        <h1> Inspiration Board </h1>
        <h2> Create a New Board</h2>

          <BoardList
              boardList={boardList}
              getOneBoard = {getOneBoard} 
              // addCard ={addCard}
              />
          <br />
          <FormNewBoard 
              addBoardCallbackFunc={addBoard} />

          <CardList  
                cardList={cardList} 
                // deleteCard={deleteCard}
                // countLikesTotal={countLikesTotal} 
                />
          
    </div>
  );
}

export default App;
