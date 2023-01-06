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
        <Route path="/boards" element={<Home />} errorElement={<ErrorPage />} />
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
