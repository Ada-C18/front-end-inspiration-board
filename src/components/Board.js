import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import NewBoardForm from "./NewBoardForm";
import NewCardForm from "./NewCardForm";
import "./Board.css";
import Card from "./Card";
import axios from "axios";

const Board = () => {
  const [boardData, setBoardData] = useState([]);

  const onBoardSubmit = (newBoardData) => {
    axios
      .post("https://rykaliva.herokuapp.com/boards", newBoardData)
      .then(() => {
        axios.get("https://rykaliva.herokuapp.com/boards").then((response) => {
          setBoardData(response.data);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios.get("https://rykaliva.herokuapp.com/boards").then((response) => {
      setBoardData(response.data);
    });
  }, []);

  return (
    <section className="board-container">
      <section className="input-section">
        <label>Choose Board to Display</label>
        <Dropdown boardData={boardData}></Dropdown>
        <label>Create a Board</label>
        <NewBoardForm onBoardSubmit={onBoardSubmit}></NewBoardForm>
        <label>Create a Card</label>
        <NewCardForm></NewCardForm>
        <h2>Board Title</h2>
      </section>
      <div className="card1">
        <Card></Card>
      </div>
      <div className="card2">
        <Card></Card>
      </div>
      <div className="card3">
        <Card></Card>
      </div>
      <div className="card4">
        <Card></Card>
      </div>
      <div className="card5">
        <Card></Card>
      </div>
      <div className="card6">
        <Card></Card>
      </div>
      <div className="card7">
        <Card></Card>
      </div>
      <div className="card8">
        <Card></Card>
      </div>
    </section>
  );
};

export default Board;
