import axios from 'axios';

const API_HOST = 'http://localhost:5000/';

const BOARDS_ENDPOINT = API_HOST + 'boards';

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

export { getAllBoards, getAllCards, addNewBoard, addNewCard };
