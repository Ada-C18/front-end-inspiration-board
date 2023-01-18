import React, { useState, useEffect } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import axios from "axios";

import "./App.css";

import LogInView from "./routes/LogInView";
import LogInForm from "./routes/LogInForm";
import SignUpForm from "./routes/SignUpForm";
import Home from "./routes/Home";
import CreateBoard from "./routes/CreateBoard";
import SingleBoardView from "./routes/SingleBoardView";
import ErrorPage from "./error-page";

const DUMMY_USER_DATA = [
  {
    id: 1,
    name: "emily",
  },
  {
    id: 2,
    name: "bukunmi",
  },
  {
    id: 3,
    name: "katherine",
  },
  {
    id: 4,
    name: "anna",
  },
];

const DUMMY_BOARD_DATA = [
  {
    id: 1,
    card_id: [1, 2, 3, 4],
    user_id: 1,
    date_created: "24",
    board_title: "Capstone Inspo",
    board_owner: "Anna",
    visible: true,
  },
  {
    id: 2,
    card_id: [1, 2, 3, 4, 5, 6],
    user_id: 8,
    date_created: "25",
    board_title: "Interview Inspo",
    board_owner: "Emily",
    visible: true,
  },
  {
    id: 3,
    card_id: [1],
    user_id: 6,
    date_created: "26",
    board_title: "Ada Fun",
    board_owner: "Kumi",
    visible: true,
  },
  {
    id: 4,
    card_id: [],
    user_id: 15,
    date_created: "27",
    board_title: "React excitement",
    board_owner: "Katherine",
    visible: true,
  },
  {
    id: 5,
    card_id: [1, 2, 3, 4],
    user_id: 1,
    date_created: "24",
    board_title: "Capstone Inspo",
    board_owner: "Anna",
    visible: true,
  },
  {
    id: 6,
    card_id: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    user_id: 8,
    date_created: "25",
    board_title: "Interview Inspo",
    board_owner: "Emily",
    visible: true,
  },
  {
    id: 7,
    card_id: [1, 2, 3],
    user_id: 6,
    date_created: "26",
    board_title: "Ada Fun",
    board_owner: "Kumi",
    visible: true,
  },
  // {
  //   id: 8,
  //   card_id: [1, 2, 3, 4, 5],
  //   user_id: 15,
  //   date_created: "27",
  //   board_title: "React excitement",
  //   board_owner: "Katherine",
  //   visible: true,
  // },
  // {
  //   id: 9,
  //   card_id: [16, 2, 53],
  //   user_id: 1,
  //   date_created: "24",
  //   board_title: "Capstone Inspo",
  //   board_owner: "Anna",
  //   visible: true,
  // },
  // {
  //   id: 10,
  //   card_id: [1, 2],
  //   user_id: 8,
  //   date_created: "25",
  //   board_title: "Interview Inspo",
  //   board_owner: "Emily",
  //   visible: true,
  // },
  // {
  //   id: 11,
  //   card_id: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 100],
  //   user_id: 6,
  //   date_created: "26",
  //   board_title: "Ada Fun",
  //   board_owner: "Kumi",
  //   visible: true,
  // },
  // {
  //   id: 12,
  //   card_id: [1, 2, 3, 4, 5, 6, 7],
  //   user_id: 15,
  //   date_created: "27",
  //   board_title: "React excitement",
  //   board_owner: "Katherine",
  //   visible: true,
  // },
  // {
  //   id: 13,
  //   card_id: [],
  //   user_id: 1,
  //   date_created: "24",
  //   board_title: "Capstone Inspo",
  //   board_owner: "Anna",
  //   visible: true,
  // },
  // {
  //   id: 14,
  //   card_id: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  //   user_id: 8,
  //   date_created: "25",
  //   board_title: "Interview Inspo",
  //   board_owner: "Emily",
  //   visible: true,
  // },
  // {
  //   id: 15,
  //   card_id: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  //   user_id: 6,
  //   date_created: "26",
  //   board_title: "Ada Fun",
  //   board_owner: "Kumi",
  //   visible: true,
  // },
  // {
  //   id: 16,
  //   card_id: [10, 9, 8, 7, 6, 5],
  //   user_id: 15,
  //   date_created: "27",
  //   board_title: "React excitement",
  //   board_owner: "Katherine",
  //   visible: true,
  // },
];

// const genericDummyFunc = (arg1 = null) => {
//   console.log("This is the dummy function");
// };

const WAIT = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const kBaseUrl = "http://localhost:5000";

function App() {
  let [loggedIn, setLoggedIn] = useState({
    userId: null,
    repeatLogin: false,
    repeatSignUp: false,
  });
  let [appData, setAppData] = useState(DUMMY_BOARD_DATA);

  const passBoardPropsDummy = () => appData; // DUMMY_BOARD_DATA

  // const passBoardProps = () => appData;

  const passLogInPropsDummy = () => {
    return [
      {
        loginState: loggedIn,
        onLogIn: handleLogInDummy,
      },
    ];
  };

  // const passLogInProps = () => {
  //   return [{ loginState: loggedIn, onLogIn: handleLogIn }];
  // };

  const passSignUpPropsDummy = () => {
    return [
      {
        loginState: loggedIn,
        onSignUp: handleSignUpDummy,
      },
    ];
  };

  // const passSignUpProps = () => {
  //   return [{ loginState: loggedIn, onSignUp: handleSignUp }];
  // };

  const handleLogInDummy = async (formData) => {
    await WAIT(500);

    const userData = DUMMY_USER_DATA.filter(
      (user) => user.name === formData.name.toLowerCase()
    );

    if (userData.length === 0) {
      return setLoggedIn({
        userId: null,
        repeatLogin: true,
        repeatSignUp: false,
      });
    }

    setLoggedIn({
      userId: userData[0].id,
      repeatLogin: false,
      repeatSignUp: false,
    });
  };

  // const handleLogIn = async (formData) => {
  //   const username = formData.name.toLowerCase(); // avoids case-sensitivity problems; have to post to lowercase as well
  //   const response = await axios.get(`${kBaseUrl}/users/${username}`);

  // if (response.status !== 200) {
  //   return setLoggedIn({
  //     userId: null,
  //     repeatLogin: true,
  //     repeatSignUp: false,
  //   });
  // }

  //   setLoggedIn({ userId: response.data.id, repeatLogin: false,
  //     repeatSignUp: false, });
  // };

  const handleSignUpDummy = async (formData) => {
    await WAIT(500);

    const username = formData.name.toLowerCase();

    const userData = DUMMY_USER_DATA.filter((user) => user.name === username);

    if (userData.length > 0) {
      return setLoggedIn({
        userId: null,
        repeatLogin: false,
        repeatSignUp: true,
      });
    }

    const newId = DUMMY_USER_DATA[DUMMY_USER_DATA.length - 1].id + 1;
    const newUser = {
      id: newId,
      name: username,
    };
    DUMMY_USER_DATA.push(newUser);

    setLoggedIn({
      userId: DUMMY_USER_DATA[DUMMY_USER_DATA.length - 1].id,
      repeatLogin: false,
      repeatSignUp: false,
    });
  };

  // const handleSignUp = async (formData) => {
  //   const username = formData.name.toLowerCase(); // avoids case-sensitivity problems;
  //   const requestBody = { name: username };

  //   const response = await axios.post(`${kBaseUrl}/users`, requestBody);

  //   if (response.status !== 201) {
  //     return setLoggedIn({ userId: null,
  //       repeatLogin: false,
  //       repeatSignUp: true, });
  //   }

  //   setLoggedIn({ userId: response.data.id, repeatLogin: false,
  //     repeatSignUp: false, });
  // };

  // const addBoard = (title) => {
  //   AXIOS call to POST new board to the db 
  // }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/"
          element={
            loggedIn.userId ? <Navigate to="/boards" replace /> : <LogInView />
          }
          loader={passLogInPropsDummy}
          errorElement={<ErrorPage />}
        >
          <Route
            path="login"
            element={
              loggedIn.userId ? (
                <Navigate to="/boards" replace />
              ) : (
                <LogInForm />
              )
            }
            loader={passLogInPropsDummy}
            errorElement={<ErrorPage />}
          />
          <Route
            path="signup"
            element={
              loggedIn.userId ? (
                <Navigate to="/boards" replace />
              ) : (
                <SignUpForm />
              )
            }
            loader={passSignUpPropsDummy}
            errorElement={<ErrorPage />}
          />
        </Route>
        <Route
          path="/boards"
          element={loggedIn.userId ? <Home /> : <Navigate to="/" replace />}
          loader={passBoardPropsDummy}
          errorElement={<ErrorPage />}
        />
        <Route
          path="/create-board"
          element={<CreateBoard />}
          errorElement={<ErrorPage />}
        />
        <Route
          path="/boards/:boardId"
          element={<SingleBoardView />}
          errorElement={<ErrorPage />}
        />
        <Route path="*" element={<ErrorPage />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
