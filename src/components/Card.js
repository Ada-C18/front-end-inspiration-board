import React, { useState } from 'react';
import { useEffect } from 'react';
// import "./App.css";
// import BoardForm from "./components/BoardForm";
// import BoardList from "./components/BoardList";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-message"> {props.message}</div>
      <div className="card-footer"> {props.likes} likes</div>
    </div>
  );
};

export default Card;
