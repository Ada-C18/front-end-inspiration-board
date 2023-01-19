import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const debounce = (fn) => {
  let frame;

  return (...params) => {
    if (frame) {
      cancelAnimationFrame(frame);
    }
    frame = requestAnimationFrame(() => {
      fn(...params);
    });
  };
};

const storeScroll = () => {
  document.documentElement.dataset.scroll = window.scrollY;
};

document.addEventListener("scroll", debounce(storeScroll), { passive: true });

storeScroll();

// const errMsg = document.querySelector("#err-msg");
// const msgInput = document.getElementById("text-area");

// const onInputChange = () => {
//   const errMsg = document.querySelector("#err-msg");
//   const msgInput = document.getElementById("text-area");
//   console.log("testing");
//   if (msgInput.value.length === 0 || msgInput.value.length > 40) {
//     errMsg.className = "invalid-input";
//   } else {
//     errMsg.className = "hide-err-msg";
//   }
// };

// const registerEventHandlers = () => {
//   const msgInput = document.getElementById("text-area");
//   msgInput.addEventListener("change", onInputChange);
// };

// document.addEventListener("DOMContentLoaded", registerEventHandlers);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
