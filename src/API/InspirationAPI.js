import axios from 'axios';

const API_HOST = 'https://inspirationalboard.herokuapp.com/';

const BOARDS_ENDPOINT = `${API_HOST}boards`;
const CARDS_ENDPOINT = `${API_HOST}cards`;

/* getAllBoards: Fetch all board objects from remote server.
Takes: callback function that accepts a list of boards
Returns: undefined
Calls: callback
*/
const getAllBoards = async function (callback) {
  let response;
  try {
    response = await axios.get(BOARDS_ENDPOINT);
    callback(response.data);
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
};

/* getAllCards: Fetch all cards for boards from remote server.
Takes: board: numeric board id
      onSuccess callback function that accepts a list of cards

Returns: undefined
Calls: callback
*/
const getAllCards = async function (board, onSuccess) {
  let response;
  try {
    response = await axios.get(`${BOARDS_ENDPOINT}/${board}/cards`);
    onSuccess(response.data.cards);
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
};

/* getCardsFirstBoard: Fetch all the cards for the first board in the database. 
Used to build starting state. 
Takes:  setBoards: callback function for setting boards
        setCards: callback function for setting cards
Returns: undefined
Calls: callback
*/
const getCardsFirstBoard = async function (
  setBoards,
  setCards,
  setCurrentBoard
) {
  try {
    const boardResponse = await axios.get(BOARDS_ENDPOINT);
    const board_id = boardResponse.data[0].board_id;
    const cardResponse = await axios.get(
      `${BOARDS_ENDPOINT}/${board_id}/cards`
    );
    setBoards(boardResponse.data);
    setCards(cardResponse.data.cards);
    setCurrentBoard(board_id);
    console.log(cardResponse.data);
  } catch (error) {
    console.log(error.message);
  }
};

/* addNewBoard: Sends a new board request to the server. 
Server should respond with the complete boardObject. 
Takes: newBoardData = {name: "board title", owner: "board owner"}
onSuccess: callback function to run if the request is successful. 
callback function should accept returned boardObject
 */

const addNewBoard = async function (newBoardData, onSuccess) {
  let response;
  try {
    response = await axios.post(BOARDS_ENDPOINT, newBoardData);
    onSuccess(response.data);
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
};

/* addNewCard: Sends a new card request to the server. 
Server should respond with the complete cardObject. 
Takes: message: string message
       board: numeric board id
       onSuccess: function to call if successful. 
callback function should accept returned boardObject
 */

const addNewCard = async function (newCardData, board, onSuccess) {
  let response;

  try {
    response = await axios.post(
      `${BOARDS_ENDPOINT}/${board}/cards`,
      newCardData
    );
    onSuccess(response.data);
    console.log(`addNewCard: ${response.data}`);
  } catch (error) {
    console.log(error.message);
  }
};

/* deleteCard: Sends a delete card request. 
Server should respond with JSON and a message field
Takes: card_id: numeric card id
       onSuccess: function to call if successful. 
callback function should accept returned messageObject
 */

const deleteCard = async function (card_id, onSuccess) {
  let response;

  try {
    response = await axios.delete(`${CARDS_ENDPOINT}/${card_id}`);
    onSuccess(response.data);
    console.log(`addNewCard: ${response.data}`);
  } catch (error) {
    console.log(error.message);
  }
};

/* likeCard: Sends a like card request. 
Server should respond with JSON and a message field
Takes: card_id: numeric card id
       onSuccess: function to call if successful. 
callback function should accept returned messageObject
 */

const likeCard = async function (card_id, onSuccess) {
  let response;

  try {
    response = await axios.patch(`${CARDS_ENDPOINT}/${card_id}`);
    onSuccess(response.data);
    console.log(`addNewCard: ${response.data}`);
  } catch (error) {
    console.log(error.message);
  }
};

export {
  getAllBoards,
  getAllCards,
  getCardsFirstBoard,
  addNewBoard,
  addNewCard,
  deleteCard,
  likeCard,
};
