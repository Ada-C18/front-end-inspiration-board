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

export { getAllBoards, addNewBoard };
