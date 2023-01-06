import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import LogInView from "./components/LogInView";
import LogInForm from "./components/LogInForm";
import SignUpForm from "./components/SignUpForm";
// import SignUp from "./components/SignUp";
import Home from "./components/Home";
import SingleBoardView from "./components/SingleBoardView";
import ErrorPage from "./error-page";

const DUMMY_BOARD_DATA = [
  {
    id: 1, 
    // FKs card_id and user_id?
    date_created: '24',
    board_title: 'Capstone Inspo',
    board_owner: 'Anna', 
    visible: true
  },
  {
    id: 2, 
    // FKs card_id and user_id?
    date_created: '25',
    board_title: 'Interview Inspo',
    board_owner: 'Emily', 
    visible: true
  },
  {
    id: 3, 
    // FKs card_id and user_id?
    date_created: '26',
    board_title: 'Ada Fun',
    board_owner: 'Kumi', 
    visible: true
  },
  {
    id: 4, 
    // FKs card_id and user_id?
    date_created: '27',
    board_title: 'React excitement',
    board_owner: 'Katherine', 
    visible: true
  }
]


function App() {
  let [loggedIn, setLoggedIn] = useState({ loggedIn: false });
  let [appData, setAppData] = useState();

  return (

    <Router>
      <Routes>
        <Route path="/" element={<LogInView />} errorElement={<ErrorPage />}>
          <Route path="login" element={<LogInForm />} />
          <Route
            path="signup"
            element={<SignUpForm />}
            errorElement={<ErrorPage />}
          />
        </Route>
        <Route path="/boards" element={<Home />} loader={DUMMY_BOARD_DATA} errorElement={<ErrorPage />} />
        <Route
          path="/boards/:boardId"
          element={<SingleBoardView />}
          errorElement={<ErrorPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
