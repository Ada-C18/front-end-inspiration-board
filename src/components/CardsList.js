import { useEffect } from "react";
import axios from "axios";

// Inside the get request, use the board_id to get
// list of cards associated with board_id.
// We are passing down CardList from App.js

// function to get cards by board_id
// passed in board_id thorugh props from App
function CardsList(props) {
  // useEffect to make get request to have it run each time the
  // props.board.id changes. Then, it runs the callback function.
  // useEffect runs on the first render no matter what
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/boards/${props.board.id}/cards`,
        {}
      )
      .then((response) => console.log(response.data))
      .catch((error) => {
        console.log(error);
      });
  }, [props.board]); // You can put this in the dependency to
  // let react know that it needs to rerender when there is
  // change in the board

  // Next set the response.data as a state inside of Cardslist, take that state
  // and loop over it to get all the cards. This will render/display them. 
  return <div>CardsList</div>;
}

export default CardsList;
