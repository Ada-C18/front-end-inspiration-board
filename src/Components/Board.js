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
        // const cards = [...cardList];
        // cards.push(response.data.card);
        // setCardList(cards);
        getCardList();
        // console.log("Response is:", response);
      })
      .catch((err) => {
        console.log("Error:", err);
        alert("Unable to create new card");
      });
  };

  const [sortCardsBy, setSortCardsBy] = useState({method: "id", direction: "asc"});
  const changeSortMethod = (method, direction) => {
    setSortCardsBy({method, direction});
  }

  const sortSelector = props.currentBoard ? (
      <SortSelector sortedBy={sortCardsBy} changeSortedBy={changeSortMethod}>
      </SortSelector>
    ) : "";

  const getCardList = () => {
    if (props.currentBoard)
      axios
        .get(`${BACKEND_URL}/boards/${props.currentBoard}/cards`)
        .then((result) => {
          setCardList(result.data);
        });
    else setCardList([]);
  };

  useEffect(getCardList, [props.currentBoard]);

  const [cardFormVisible, setCardFormVisible] = useState(false);
  const toggleCardFormVisible = () => setCardFormVisible(!cardFormVisible);

  const cards = cardList.map((card) => {
    return (
      <Card key={card.id} message={card.message} likes={card.likes}></Card>
    );
  });


  const cardForm = props.currentBoard ? (
    <CardForm
      visible={cardFormVisible}
      toggleVisible={toggleCardFormVisible}
      addNewCard={addNewCard}
    ></CardForm>
  ) : (
    ""
  );

  // if (props.currentBoardName != null) {
  //   const boardName = props.currentBoardName.toUpperCase();
  // }

  const likeOneCard = (id) => {
    console.log(id)
    axios.put(`${BACKEND_URL}/cards/${id}`).then((result) => {

   
      getCardList();
   
    }).catch((error) => {
      console.log('Error:', error);
      alert('Couldn\'t +1 the card.');
    });};

    const deleteCard= (id) => {
        axios.delete(`${BACKEND_URL}/cards/${id}`).then((response) => {
       
          getCardList();
       
        }).catch((error) => {
          console.log('Error:', error);
          alert('Couldn\'t delete the card.');
        });
      };

    const cardsData = cardList.map((card) => {
        return (
          <Card key={card.id} id={card.id} message={card.message} likes={card.likes}likeOneCard={likeOneCard} deleteCard={deleteCard}></Card>
        );
      });

  return (
    <section id="board">
      <h2 className="board-name">{props.currentBoardName}</h2>
      {sortSelector}
      {/* <h2 className="board-name">{boardName}</h2> */}
      <div className="card-list">
        {/* {cards} */}
        {cardsData}
        {cardForm}
      </div>
    </section>
  );
};

export default Board;
