import React from 'react';
import { useState } from 'react';
import './NewBoardForm.css';


const NewBoardForm = ({ addBoardCallback , afterSubmitMessage, toggleHide }) => {
  // hide form button - use ternary

  const [boardData, setBoardData] = useState({
    title: '',
    owner: '',
  });

  const submitBoardData = (event) => {
    event.preventDefault();
    addBoardCallback(boardData);
    setBoardData({ title: '', owner: ''});
  };

  const handleChange = (event) => {
    setBoardData({ ...boardData, [event.target.name]: event.target.value });
  };

  let className = "new-board__form";
  let isVisible= true;

  const handleClick = () => {
    isVisible=!isVisible
    toggleHide(className, isVisible)
  }
  
  return (
    <section className="new-board__section">
      <h2 id='add-board'>Add a New Board</h2>
      <div id="line" />
      <form onSubmit={submitBoardData} className={className}>
          <div className="new-board__fields">
            <label htmlFor="title">Title</label>
            <input
              name="title"
              id="title"
              value={boardData.title}
              onChange={handleChange}
            />
            <label htmlFor="owner">Owner</label>
            <input
              name="owner"
              id="owner"
              value={boardData.owner}
              onChange={handleChange}
            />
            <button className="new-board__button" type="submit">
              Add Board
            </button>
            
            <p>
              {afterSubmitMessage}
            </p>
          </div>
      </form>
      <button onClick={handleClick} className="new-board__button" type="submit">
              Hide Form
            </button>
    </section>
  );
};

export default NewBoardForm;