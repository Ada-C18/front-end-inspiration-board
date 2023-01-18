import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./CardList.css";
import NewCardForm from "./NewCardForm";

const CardList = (props) => {
  const board_id = props.selectedBoardId;
  const URL = `https://powerful-mesa-70650.herokuapp.com/boards/${board_id}/cards`;
  const [cardData, setCardData] = useState([{}]);
  console.log(board_id);
  console.log(`card data, ${cardData}`);

  const getAllCards = useCallback(() => {
    if (props.selectedBoardId === 0) {
      setCardData([]);
    } else {
      return axios
        .get(URL)
        .then((response) => {
          const sortedData = [...response.data].sort((a, b) => a.id - b.id);
          setCardData((prev) => sortedData);
        })
        .catch((error) => {
          console.log(
            "Anything that isn't status code 2XX is an error:",
            error.response.status
          );
          console.log(
            "The data from response with an error:",
            error.response.data
          );
        });
    }
  }, [URL, props.selectedBoardId]);

  useEffect(() => {
    getAllCards();
  }, [board_id, getAllCards]);

  const addCard = (newCard) => {
    axios
      .post(URL, newCard)
      .then((response) => {
        const newCardList = [...cardData];
        newCardList.push(response.data["card created"]);
        setCardData(newCardList);
      })
      .catch((error) => {
        console.log("Error:", error);
        alert("Couldn't create new card. Select a board and try again!");
      });
  };

  const deleteCard = (id) => {
    axios
      .delete(`${URL}/${id}`)
      .then((response) => {
        const newCardData = cardData.filter((oldCards) => {
          return oldCards.id !== id;
        });
        setCardData(newCardData);
      })
      .catch((error) => {
        alert("Couldn't delete this card. Try again!");
      });
  };

  const likeCard = (card) => {
    axios
      .put(`${URL}/${card.card_id}/liked`)
      .then((response) => {
        getAllCards();
      })
      .catch((error) => {
        alert("Couldn't like this card!");
      });
  };

  const cards = cardData.map((card) => {
    return (
      <Card
        key={card.id}
        card_id={card.id}
        message={card.message}
        likes={card.likes}
        onDeleteCard={deleteCard}
        onLikeCard={likeCard}
      />
    );
  });

  let boardArea = (
    <div className="whole-area">
      <ul className="cards">{cards}</ul>
      <NewCardForm className="NewBoardForm" addCardCallBack={addCard} />
      <button
        className="Delete-Board-Button"
        onClick={() => {
          props.onDeleteBoard(board_id);
        }}
      >
        Delete Selected Board
      </button>
    </div>
  );
  if (board_id === 0) {
    boardArea = <div></div>;
  }

  return boardArea;
};

CardList.propTypes = {
  selectedBoardId: PropTypes.number.isRequired,
  onDeleteBoard: PropTypes.func.isRequired,
};
export default CardList;
