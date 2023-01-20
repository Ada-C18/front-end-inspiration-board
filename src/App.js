import React, { useState, useEffect } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
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

const kBaseUrl = process.env.REACT_APP_BE_URL;

const getAllBoardsAPI = async () => {
  try {
    const response = await axios.get(`${kBaseUrl}/boards`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const plusOneApi = async (id) => {
  try {
    const response = await axios.patch(`${kBaseUrl}/cards/${id}/like`);
    return response;
  } catch (err) {
    console.error(err);
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
  let [selectValue, setSelectValue] = useState('1');

  const logUserOut = () => {
    setLoggedIn({
      userId: null,
      repeatLogin: false,
      repeatSignUp: false,
    });
  };

  const getBoardArr = async () => {
    const boardArr = await getAllBoardsAPI();
    return setAppData(boardArr);
  };

  const sortBoardsByMostRecent = async () => {
    const boardArr = await getAllBoardsAPI();
    boardArr.reverse();
    return setAppData(boardArr);
  };

  const sortBoardsByMostCards = async () => {
    const boardArr = await getAllBoardsAPI();
    boardArr.sort((a, b) => b.num_cards - a.num_cards);
    return setAppData(boardArr);
  };

  const sortBoardsByLeastCards = async () => {
    const boardArr = await getAllBoardsAPI();
    boardArr.sort((a, b) => a.num_cards - b.num_cards);
    return setAppData(boardArr);
  };

  const sortbyOwnerNameAZ = async () => {
    const boardArr = await getAllBoardsAPI();
    boardArr.sort((a, b) => a.owner.localeCompare(b.owner));
    return setAppData(boardArr);
  };

  const sortbyOwnerNameZA = async () => {
    const boardArr = await getAllBoardsAPI();
    boardArr.sort((a, b) => b.owner.localeCompare(a.owner));
    return setAppData(boardArr);
  };

  const sortBoardArr = (value) => {
    switch (value) {
      case '1':
        getBoardArr();
        break;
      case '2':
        sortBoardsByMostRecent();
        break;
      case '3':
        sortBoardsByMostCards();
        break;
      case '4':
        sortBoardsByLeastCards();
        break;
      case '5':
        sortbyOwnerNameAZ();
        break;
      case '6':
        sortbyOwnerNameZA();
        break;
      default:
        getBoardArr();
    }
    setSelectValue(value);
  };

  const sortCardsByLikes = async (boardId) => {
    const cardArr = await getCardsByBoard(boardId);
    cardArr.sort((a, b) => b.likes - a.likes);
    return setCardDataByBoard(cardArr);
  };

  const sortCardsAlpha = async (boardId) => {
    const cardArr = await getCardsByBoard(boardId);
    cardArr.sort((a, b) => a.message.localeCompare(b.message));
    return setCardDataByBoard(cardArr);
  };

  const sortCardsById = async (boardId) => {
    const cardArr = await getCardsByBoard(boardId);
    cardArr.sort((a, b) => a.id - b.id);
    return setCardDataByBoard(cardArr);
  };

  const sortCardArr = (value, boardId) => {
    switch (value) {
      case 'likes':
        sortCardsByLikes(boardId);
        break;
      case 'alpha':
        sortCardsAlpha(boardId);
        break;
      case 'id':
        sortCardsById(boardId);
        break;
      default:
        getCardsArr(boardId);
    }
    // setSelectValue(value);
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
  }, [loggedIn.userId, cardDataByBoard]);

  const deleteCardAPI = async (cardId, boardId) => {
    try {
      await axios.delete(`${kBaseUrl}/cards/${cardId}`);
    } catch (err) {
      console.log(err);
    }
    getCardsArr(boardId);
  };

  const passCreateBoardProps = () => {
    return [{ onCreate: addBoard }];
  };

  const passBoardProps = () => {
    return [
      {
        boardArr: appData,
        getBoardCards: getCardsArr,
        sortBoardMenu: sortBoardArr,
        handleLogOut: logUserOut,
        selectState: selectValue,
      },
    ];
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
        onDeleteCard: deleteCardAPI,
        allBoardsData: appData,
        onLikeCard: likeCard,
        onSort: sortCardArr,
      },
    ];
  };

  const handleLogIn = async (formData) => {
    const username = formData.name.toLowerCase();
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
    const username = formData.name.toLowerCase();
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
      await axios.post(`${kBaseUrl}/cards`, requestBody);
    } catch (err) {
      console.log(err);
    }
    getCardsArr(boardId);
  };

  const likeCard = async (cardId, boardId) => {
    await plusOneApi(cardId);
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
