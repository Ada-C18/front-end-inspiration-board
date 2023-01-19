import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import CardForm from "./CardForm";
import SortSelector from "./SortSelector.js";
import "./Board.css";

const BACKEND_URL = `${process.env.REACT_APP_BACKEND_URL}`;

const Board = (props) => {
  const [cardList, setCardList] = useState([]);
  const addNewCard = (message) => {
    axios
      .post(`${BACKEND_URL}/boards/${props.currentBoard}/cards`, { message })
      .then((response) => {
        getCardList();
      })
      .catch((err) => {
        console.log("Error:", err);
        alert("Unable to create new card");
      });
  };

  const [sortCardsBy, setSortCardsBy] = useState({
    method: "id",
    direction: "asc",
  });
  const changeSortMethod = (method, direction) => {
    setSortCardsBy({ method, direction });
  };

  const sortSelector = props.currentBoard ? (
    <SortSelector
      sortedBy={sortCardsBy}
      changeSortedBy={changeSortMethod}
    ></SortSelector>
  ) : (
    ""
  );

  const getCardList = () => {
    if (props.currentBoard)
      axios
        .get(`${BACKEND_URL}/boards/${props.currentBoard}/cards`)
        .then((result) => {
          const cards = result.data;

          // Set the comparison direction
          const compare = (a, b) => {
            switch (sortCardsBy.direction) {
              case "asc":
                return a - b;
              case "desc":
                return b - a;
              default:
                throw "invalid sort direction";
            }
          };

          cards.sort((c1, c2) => {
            // Sort by specified property.
            switch (sortCardsBy.method) {
              case "message":
                // Case insensitive sort.
                return compare(
                  c1.message.toLowerCase(),
                  c2.message.toLowerCase()
                );
              default:
                return compare(c1[sortCardsBy.method], c2[sortCardsBy.method]);
            }
          });

          setCardList(cards);
        });
    else setCardList([]);
  };

  useEffect(getCardList, [props.currentBoard, sortCardsBy]);
  useEffect(() => {
    // Reset the board controls when changing the board.
    setSortCardsBy({ method: "id", direction: "asc" });
    setCardFormVisible(false);
  }, [props.currentBoard]);

  const [cardFormVisible, setCardFormVisible] = useState(false);
  const toggleCardFormVisible = () => setCardFormVisible(!cardFormVisible);

  const cardForm = props.currentBoard ? (
    <CardForm
      visible={cardFormVisible}
      toggleVisible={toggleCardFormVisible}
      addNewCard={addNewCard}
    ></CardForm>
  ) : (
    ""
  );

  const likeOneCard = (id) => {
    axios
      .put(`${BACKEND_URL}/cards/${id}`)
      .then((result) => {
        getCardList();
      })
      .catch((error) => {
        console.log("Error:", error);
        alert("Couldn't +1 the card.");
      });
  };

  const deleteCard = (id) => {
    axios
      .delete(`${BACKEND_URL}/cards/${id}`)
      .then((response) => {
        getCardList();
      })
      .catch((error) => {
        console.log("Error:", error);
        alert("Couldn't delete the card.");
      });
  };

  const cardsData = cardList.map((card) => {
    return (
      <Card
        key={card.id}
        id={card.id}
        message={card.message}
        likes={card.likes}
        likeOneCard={likeOneCard}
        deleteCard={deleteCard}
      ></Card>
    );
  });

  return (
    <section id="board">
      <h2 className="board-name">{props.currentBoardName}</h2>
      {sortSelector}
      <div className="card-list">
        {cardsData}
        {cardForm}
      </div>
    </section>
  );
};

export default Board;
