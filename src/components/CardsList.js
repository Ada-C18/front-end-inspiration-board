import { useEffect, useState } from "react";
import axios from "axios";

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
      });
      
  }, [props.board, cards, setCards]);
 // You can put this in the dependency to
  // let react know that it needs to rerender when there is
  // change in the board
  // This means that whenever props.board, cards, or setCards change, the hook will re-run the GET request 
  //and update the cards state variable with the new data.



  

  // Next set the response.data as a state inside of Cardslist, take that state
  // and loop over it to get all the cards. This will render/display them. 

  const handleDelete = (cardId) => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/cards/${cardId}`)
      .then(() => {
        // Remove the deleted card from the state
        setCards((prevCards) => prevCards.filter((c) => c.id !== cardId));
      })
      .catch((error) => {
        console.log(error);
      });
  }




  return (
    <div>
      {cards.length > 0 ? cards.map((card) => (
        <div key={card.id}>
          <p>Message: {card.message}</p>
          <button onClick={() => handleDelete(card.id)}>Delete</button>
          
        </div>
      )) : <p>No cards found for this board.</p>}
    </div>
  );
}

// this code is rendering the card data if there are any cards, or a message if there are no cards. It is also using the map 
//function to loop over the cards array and render each card's title and description in a separate div element, with the card's id as the key for each div.

export default CardsList;