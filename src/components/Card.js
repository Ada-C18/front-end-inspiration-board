import React, { useState } from 'react';
import { useEffect } from 'react';
// import "./App.css";
// import BoardForm from "./components/BoardForm";
// import BoardList from "./components/BoardList";

const Card = (props) => {
  return (
    <div class="card">
      <div class="card-message"> {props.message}</div>
      <div class="card-footer"> {props.likes} likes</div>
    </div>
  );
};

export default Card;
