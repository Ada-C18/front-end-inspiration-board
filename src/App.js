import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  redirect,
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

const WAIT = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const kBaseUrl = "http://localhost:5000";

function App() {
  let [loggedIn, setLoggedIn] = useState({
    userId: 0,
    tryAgain: false,
  });
  let [appData, setAppData] = useState(DUMMY_BOARD_DATA);

  const passBoardPropsDummy = () => appData; // DUMMY_BOARD_DATA

  // const passBoardProps = () => appData;

  const passLogInPropsDummy = () => {
    return JSON.parse(
      JSON.stringify({
        logState: { userId: 0, tryAgain: false },
        onLogIn: genericDummyFunc,
      })
    );
  };

  const genericDummyFunc = (arg1 = null) => {
    console.log("This is the dummy function");
  };

  // logInProps;
  // return { logState: loggedIn, onLogIn: handleLogInDummy };

  // const passLogInProps = () => {
  //   return { logState: loggedIn, onLogIn: handleLogIn };
  // };

  const handleLogInDummy = async () => {
    return async (formData) => {
      await WAIT(500);

      const userData = DUMMY_USER_DATA.filter(
        (user) => user.name === formData.user
      );

      if (userData === []) {
        return setLoggedIn({ userId: 0, tryAgain: true });
      }

      setLoggedIn({ userId: userData[0].id, tryAgain: false });
      return redirect("/boards");
    };
  };

  // const handleLogIn = async (formData) => {
  //   const username = formData.name;
  //   const response = await axios.get(`${kBaseUrl}/users/${username}`);

  //   if (response.status !== 200) {
  //     return setLoggedIn({ userId: 0, tryAgain: true });
  //   }

  //   setLoggedIn({ userId: response.data.id, tryAgain: false });
  //   return redirect("/boards");
  // };

  const handleSignUp = (formData) => {
    return null;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/"
          element={<LogInView />}
          loader={passLogInPropsDummy}
          errorElement={<ErrorPage />}
        >
          <Route
            path="login"
            element={<LogInForm />}
            loader={passLogInPropsDummy}
            errorElement={<ErrorPage />}
          />
          <Route
            path="signup"
            element={<SignUpForm />}
            loader={handleSignUp}
            errorElement={<ErrorPage />}
          />
        </Route>
        <Route
          path="/boards"
          element={<Home />}
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
