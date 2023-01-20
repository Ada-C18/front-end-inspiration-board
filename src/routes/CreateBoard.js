import { Link, useLoaderData, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./CreateBoard.css";
import homeIconWhite from "../home-icon-white.png";

const kColorTable = {
  "#C1D6D9": "green",
  "#F29979": "coral",
};

const CreateBoard = () => {
  const loaderData = useLoaderData();
  const [formData, setFormData] = useState({
    title: "",
    cardColor: "#C1D6D9",
  });
  const [sampleColor, setSampleColor] = useState("green");

  const navigate = useNavigate();

  const { onCreate: handleSubmit } = loaderData[0];

  const handleTextChange = (event) => {
    setFormData({ ...formData, title: event.target.value });
  };

  const handleSelectChange = (event) => {
    setSampleColor(kColorTable[event.target.value]);
    setFormData({ ...formData, cardColor: event.target.value });
  };

  const submitNewBoard = (event) => {
    event.preventDefault();
    handleSubmit(formData);
    setFormData({
      title: "",
      cardColor: "#C1D6D9",
    });
    return navigate("/boards");
  };

  return (
    <div id="new-board-view">
      <h1 id="create-board-heading">Create a new board</h1>

      <form onSubmit={submitNewBoard} id="new-board-form">
        <input
          type="text"
          value={formData.title}
          placeholder="Board title"
          onChange={handleTextChange}
          id="board-title-field"
          required
        />
        <div id="selectDiv">
          <label htmlFor="cardColor">Choose a card color:</label>
          <select
            id="colorSelect"
            name="cardColor"
            onChange={handleSelectChange}
          >
            <option value="#C1D6D9">Green</option>
            <option value="#F29979">Coral</option>
          </select>
          <div id="swatch" className={`${sampleColor}`}>
            <p>sample</p>
          </div>
        </div>
        <div>
          <button type="submit" id="submit-button">
            Create a new board!
          </button>
        </div>
      </form>
      <Link to={`/boards`}>
        <button id="home-button-white">
          <img src={homeIconWhite} alt="home button" id="button-img" />
        </button>
      </Link>
    </div>
  );
};

export default CreateBoard;
