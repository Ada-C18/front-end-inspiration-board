import React, { useState } from "react";
import PropTypes from "prop-types";
import "./NewBoardForm.css";

const NewBoardForm = ({ addBoardCallback }) => {
  const [boardData, setBoardData] = useState({
    title: "",
    owner: "",
  });

  const submitBoardData = (e) => {
    e.preventDefault();

    addBoardCallback(boardData);
    setBoardData({ title: "", owner: "" });
  };

  const handleChange = (e) => {
    setBoardData({ ...boardData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={submitBoardData}>
      <section>
        <div className="new__board__fields">
          <label htmlFor="name">Board Name</label>
          <input
            name="title"
            id="title"
            value={boardData.title}
            onChange={handleChange}
            className={boardData.title.length === 0 ? "invalid__form__input" : ""}
          />
          <label htmlFor="name">Your Name</label>
          <input
            name="owner"
            id="owner"
            value={boardData.owner}
            onChange={handleChange}
            className={boardData.owner.length === 0 ? "invalid__form__input" : ""}
          />
          <p className="required">* required</p>
          <p>
            Preview: {boardData.title} - {boardData.owner}
          </p>
          <button
            className="submit__button"
            type="submit"
            disabled={
              boardData.title.length === 0 || boardData.owner.length === 0
            }
          >
            Submit
          </button>
        </div>
      </section>
    </form>
  );
};

NewBoardForm.propTypes = {
  addBoardCallback: PropTypes.func.isRequired,
};

export default NewBoardForm;
