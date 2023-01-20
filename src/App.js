import React, { useState, useEffect } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate
} from 'react-router-dom';
import axios from 'axios';

import './App.css';

import LogInView from './routes/LogInView';
import LogInForm from './routes/LogInForm';
import SignUpForm from './routes/SignUpForm';
import Home from './routes/Home';
import CreateBoard from './routes/CreateBoard';
import SingleBoardView from './routes/SingleBoardView';
import ErrorPage from './error-page';
// import DUMMY_BOARD_DATA from "./components/dummyData";

// const genericDummyFunc = (arg1 = null) => {
//   console.log("This is the dummy function");
// };

// const WAIT = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// const kBaseUrl = 'http://localhost:5000';
const kBaseUrl = "https://hackspo-be.herokuapp.com";

const getAllBoardsAPI = async () => {
  try {
    const response = await axios.get(`${kBaseUrl}/boards`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

function App() {
  let [loggedIn, setLoggedIn] = useState({
    userId: null,
    repeatLogin: false,
    repeatSignUp: false,
  });

  let [appData, setAppData] = useState([]);
  let [cardDataByBoard, setCardDataByBoard] = useState([]);

  const getBoardArr = async () => {
    const boardArr = await getAllBoardsAPI();
    return setAppData(boardArr);
  };

  const getCardsByBoard = async (boardId) => {
    try {
      const response = await axios.get(`${kBaseUrl}/cards/board/${boardId}`);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  const getCardsArr = async (boardId) => {
    const cardArr = await getCardsByBoard(boardId);
    return setCardDataByBoard(cardArr);
  };

  useEffect(() => {
    if (loggedIn.userId) {
      getBoardArr();
    } else {
      setAppData([]);
    }
  }, [loggedIn.userId]);

  const deleteCardAPI = async (cardId, boardId) => {
    try {
    const response = await axios.delete(`${kBaseUrl}/cards/${cardId}`);
    } catch (err) {
      console.log(err)
    }
    getCardsArr(boardId);
  };

  const passCreateBoardProps = () => {
    return [{ onCreate: addBoard }];
  };

  // const passBoardPropsDummy = () => DUMMY_BOARD_DATA;

  const passBoardProps = () => {
    return [{ boardArr: appData, getBoardCards: getCardsArr }];
  };

  const passLogInProps = () => {
    return [{ loginState: loggedIn, onLogIn: handleLogIn }];
  };

  const passSignUpProps = () => {
    return [{ loginState: loggedIn, onSignUp: handleSignUp }];
  };

  const passSingleBoardProps = () => {
    return [
      {
        loginState: loggedIn,
        onSubmitCard: handleSubmitCard,
        cards: cardDataByBoard,
        onDeleteCard: deleteCardAPI
      },
    ];
  };

  const handleLogIn = async (formData) => {
    const username = formData.name.toLowerCase(); // avoids case-sensitivity problems; have to post to lowercase as well
    try {
      const response = await axios.get(`${kBaseUrl}/users/${username}`);
      return setLoggedIn({
        userId: response.data.id,
        repeatLogin: false,
        repeatSignUp: false,
      });
    } catch (err) {
      return setLoggedIn({
        userId: null,
        repeatLogin: true,
        repeatSignUp: false,
      });
    }
  };

  const handleSignUp = async (formData) => {
    const username = formData.name.toLowerCase(); // avoids case-sensitivity problems; have to post to lowercase as well
    const requestBody = { name: username };

    try {
      const response = await axios.post(`${kBaseUrl}/users`, requestBody);
      return setLoggedIn({
        userId: response.data.id,
        repeatLogin: false,
        repeatSignUp: false,
      });
    } catch (err) {
      return setLoggedIn({
        userId: null,
        repeatLogin: false,
        repeatSignUp: true,
      });
    }
  };

  const addBoard = async (boardData) => {
    const requestBody = {
      title: boardData.title,
      card_color: boardData.cardColor,
      user_id: loggedIn.userId,
    };

    try {
      await axios.post(`${kBaseUrl}/boards`, requestBody);
      const boardArr = getAllBoardsAPI();
      setAppData(boardArr);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmitCard = async (newCardMessage, boardId) => {
    const requestBody = {
      message: newCardMessage,
      board_id: boardId,
      user_id: loggedIn.userId,
    };
    try {
      const response = await axios.post(`${kBaseUrl}/cards`, requestBody);
    } catch (err) {
      console.log(err);
    }
    getCardsArr(boardId);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path='/'
          element={
            loggedIn.userId ? <Navigate to='/boards' replace /> : <LogInView />
          }
          loader={passLogInProps}
          errorElement={<ErrorPage />}
        >
          <Route
            path='login'
            element={
              loggedIn.userId ? (
                <Navigate to='/boards' replace />
              ) : (
                <LogInForm />
              )
            }
            loader={passLogInProps}
            errorElement={<ErrorPage />}
          />
          <Route
            path='signup'
            element={
              loggedIn.userId ? (
                <Navigate to='/boards' replace />
              ) : (
                <SignUpForm />
              )
            }
            loader={passSignUpProps}
            errorElement={<ErrorPage />}
          />
        </Route>
        <Route
          path='/boards'
          element={loggedIn.userId ? <Home /> : <Navigate to='/' replace />}
          loader={passBoardProps}
          errorElement={<ErrorPage />}
        />
        <Route
          path='/create-board'
          element={<CreateBoard />}
          loader={passCreateBoardProps}
          errorElement={<ErrorPage />}
        />
        <Route
          path='/boards/:boardId'
          element={<SingleBoardView />}
          loader={passSingleBoardProps}
          errorElement={<ErrorPage />}
        />
        <Route path='*' element={<ErrorPage />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
