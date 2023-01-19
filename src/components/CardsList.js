import NewCardForm from "./NewCardForm";
import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

// Inside the get request, use the board_id to get
// list of cards associated with board_id.
// We are passing down CardList from App.js

// function to get cards by board_id
// passed in board_id thorugh props from App
function CardsList(props) {
  //  we are destructuring the returned array and assigning the first element
  // (the current state value) to the variable cards and the second element (the update function) to the variable setCards.
  //cards is a state variable that will hold the data of the cards retrieved from the GET request, while setCards is a function
  //that can be used to update the value of cards with the response data.
  //For example, the line setCards(response.data) updates the cards state variable with the data received from the GET request.
  //This allows you to keep track of the cards data in the component and use it to render the cards on the page.
  const [cards, setCards] = useState([]);

  // useEffect to make get request to have it run each time the
  // props.board.id changes. Then, it runs the callback function.
  // useEffect runs on the first render no matter what
  useEffect(() => {
    fetchCards(props.board.id);
  }, [props.board]);
  // You can put this in the dependency to
  // let react know that it needs to rerender when there is
  // change in the board
  // This means that whenever props.board, cards, or setCards change, the hook will re-run the GET request
  //and update the cards state variable with the new data.

  // Next set the response.data as a state inside of Cardslist, take that state
  // and loop over it to get all the cards. This will render/display them.

  const fetchCards = (boardId) => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/boards/${props.board.id}/cards`,
        {}
      )

      // is updating the cards state variable with the data received from the GET request by using the setCards function.
      //The response.data is the data returned by the server. This is where we are updating the cards state variable with the data that we received from the server.

      .then((response) => setCards(response.data))
      .catch((error) => {
        console.log(error);
        alert("Failed getting cards for this board :(");
      });
  };

  const handleDelete = (cardId) => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/cards/${cardId}`)
      .then(() => {
        // Remove the deleted card from the state
        setCards((prevCards) => prevCards.filter((card) => card.id !== cardId));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // setCards is passed a callback function that takes in the previous state,
  // prevCards, and returns a new array after applying the
  // Array.prototype.filter() method on it. The callback function passed to
  // filter() method is checking whether the id of an element in the
  // prevCards array is not equal to the cardId passed to the
  // handleDelete function. If the id of an element does not match the
  // cardId, that element will be included in the new array, otherwise it will be excluded.
  // The new array with the filtered elements is returned by the
  // callback function, and passed to setCards to update the cards state.

  const [likes, setLikes] = useState(0); // Initialize the likes count state

  const increaseLikes = (cardId) => {
    setLikes(likes + 1);
    axios
      .put(`${process.env.REACT_APP_BACKEND_URL}/cards/${cardId}/likes`, {
        likes_count: likes + 1,
      })
      .then((response) => {
        console.log(response.data);
        const newCards = cards.map((oldCard) => {
          return oldCard.id !== cardId
            ? oldCard
            : { ...oldCard, likes_count: oldCard.likes_count + 1 };
        });
        setCards(newCards);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // "prevCards" is the previous state before the new update. It's the state that is passed as an argument to the callback function of setCards hook. setCards hook is a state hook that is used to update the state and it takes a callback function as an argument.
  //This callback function takes the previous state as an argument and returns the updated state.
  //It's used by the component that calls this handleDelete function. It's not defined within this function, it is a state variable that is passed to the function as an argument, most likely when the component that calls this function is defined.

  // Errors: We had a const cards and it was colliding with the state variable cards.
  // We also weren't passing in correct params to axios body.
  // Also, we just needed response.data, not response.data.cardsData

  const postNewCard = (message) => {
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/boards/${props.board.id}/cards`,
        {
          message: message,
          likes_count: 0,
          board_id: props.board.id,
        }
      )
      .then((response) => {
        const cardsData = [...cards];
        cardsData.push(response.data);
        setCards(cardsData);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  if (props.board.id !== null) {
    return (
      <div className="cardsContainer">
        {cards.length > 0 ? (
          cards.map((card) => (
            <div key={card.id}>
              <div>
                <div className="cardMessageContainer">
                  <p className="cardMessage"> {card.message}</p>
                  <button
                    className="deleteButton"
                    onClick={() => handleDelete(card.id)}
                  >
                    Delete
                  </button>
                  <button onClick={() => increaseLikes(card.id)}>Like</button>
                  <p>Likes: {card.likes_count}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No cards found for this board.</p>
        )}
        <section>
          <h2>Create New Card</h2>
          <NewCardForm postNewCard={postNewCard} />
        </section>
      </div>
    );
  }
}
// this code is rendering the card data if there are any cards, or a message if there are no cards. It is also using the map
//function to loop over the cards array and render each card's title and description in a separate div element, with the card's id as the key for each div.

export default CardsList;
