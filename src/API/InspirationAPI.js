import axios from 'axios';

const API_HOST = 'http://localhost:5000/';

const BOARDS_ENDPOINT = API_HOST + 'boards';

const getAllBoards = async function (callback) {
  let response;
  try {
    response = await axios.get(BOARDS_ENDPOINT);
  } catch (error) {
    console.log(error);
  }

  callback(response.data);
};

export { getAllBoards };
