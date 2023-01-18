import { useEffect, useState } from "react";
import "./App.css";
import Board from "./components/Board.js";
import { FaRegTrashAlt } from 'react-icons/fa';
import { BsToggleOn, BsToggleOff } from 'react-icons/bs';
import CardList from "./components/CardList.js";
import NewBoardForm from "./components/NewBoardForm";
import NewCardForm from "./components/NewCardForm";
import axios from "axios";

function App() {
  const [boardsList, setBoardsList] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState({
    title: "",
    owner: "",
    id: null,
  });

  const [selectedBoardLabel, setSelectedBoardLabel] = useState(
    "Select a Board from the Board List!"
  );
  const [isBoardFormVisible, setBoardFormVisible] = useState(true);
  const toggleBoardForm = () => {
    setBoardFormVisible(!isBoardFormVisible);
  };

  const cardsListVisible = selectedBoard.id ? (
    <CardList board={selectedBoard}></CardList>
  ) : (
    ""
  );

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/boards`)
      .then((response) => {
        const boardsListCopy = response.data.map((board) => {
          return {
            ...board,
          };
        });
        setBoardsList(boardsListCopy);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onBoardSelect = (boardId) => {
    for (const board of boardsList) {
      if (board.id === boardId) {
        const boardTitle = board.title;
        const boardOwner = board.owner;
        const selectedBoardInfo = `${boardTitle} - ${boardOwner}`;
        setSelectedBoardLabel(selectedBoardInfo);
        setSelectedBoard(board);
      }
    }
  };

  const deleteBoard = (boardId) => {
    axios.delete(`${process.env.REACT_APP_BACKEND_URL}/boards/${boardId}`)
    .then(() => {
      const newBoardList = [];
      for (const board of boardsList) {
        if (board.id !== boardId) {
          newBoardList.push(board);
        }
      }
      setBoardsList(newBoardList);
      axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/boards`)
      .then((response) => {
        console.log(response.data);
        setSelectedBoard(response.data)
      })
      .catch( (error) => {
        console.log(error);
      });
    })
    .catch((error) => {
      console.log(error);
    });
  };
  
  const boardsComponent = boardsList.map((board) => { 
    return (
      <div key={board.id}>
        <Board board={board} onBoardSelect={onBoardSelect}></Board>
        <span className="board-trash" onClick={()=>{deleteBoard(board.id)}}><FaRegTrashAlt/></span>
      </div>
    );
  });

  const addBoard = (newBoardInfo) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/boards`, newBoardInfo)
      .then((response) => {
        const newBoards = [...boardsList];
        const newBoardJSON = {
          ...newBoardInfo,
          id: response.data.board.id,
        };
        newBoards.push(newBoardJSON);
        setBoardsList(newBoards);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addCard = (newCardInfo, boardId) => {
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/boards/${boardId}/cards`,
        newCardInfo
      )
      .then((response) => {
        axios
          .get(`${process.env.REACT_APP_BACKEND_URL}/boards/${boardId}/cards`)
          .then((response) => {
            console.log(response.data);
            setSelectedBoard(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const newCardFormVisible = selectedBoard.id ? (
    <NewCardForm
      boardId={selectedBoard.id}
      createNewCardForm={addCard}
    ></NewCardForm>
  ) : (
    ""
  );

  return (
    <div className="container">
      <header>
        <section>
          <h1 id="inspo-title">Inspiration Board</h1>
          <p>{selectedBoardLabel}</p>
        </section>
        <section>{newCardFormVisible}</section>
      </header>
      <aside>
        <section className="newBoard">
          <h1>Create A New Board</h1>
          {isBoardFormVisible ? (
            <NewBoardForm createNewBoardForm={addBoard}></NewBoardForm>
          ) : (
            ""
          )}
          <span onClick={toggleBoardForm}>
            {isBoardFormVisible ? <BsToggleOn /> : <BsToggleOff />}
          </span>
        </section>
        <section className="boards">
          <h1>Boards</h1>
          <ul>{boardsComponent}</ul>
        </section>
      </aside>
      <main>{cardsListVisible}</main>
    </div>
  );
}

export default App;
