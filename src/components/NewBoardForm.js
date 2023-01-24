import React, { useState } from "react";
import PropTypes from 'prop-types';
import "../styles/NewForms.css";

const NewBoardForm = (props) => {
  
  const [title, setTitle] = useState("");
  const [owner, setOwner] = useState("");
  
  const addTitle = (event) => {
    setTitle(event.target.value);
  };
  
  const addOwner = (event) => {
      setOwner(event.target.value);
    };

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.addNewBoard({ title, owner });
    setTitle("");
    setOwner("");
  };

  const resetForm = (event) => {
    setTitle("");
    setOwner("");
    };

  return (
    <form onSubmit={onFormSubmit} className="newBoardForm">
      <label htmlFor="title">Title</label>
      <br />
      <input
        type="text"
        minLength={1}
        maxLength={40}
        value={title}
        className={!title ? "error" : ""}
        onChange={addTitle}
      ></input>
      <br />
      <br />
      <label htmlFor="owner">Owned By</label>
      <br />
      <input
        type="text"
        minLength={1}
        maxLength={40}
        value={owner}
        className={!owner ? "error" : ""}
        onChange={addOwner}
      ></input>
      <p>
        Preview:
        {title && ` ${title}`}
        {owner && ` - ${owner}`}
      </p>
      <section className="buttonGrid">  
        <input
          type="submit"
          value="Create"
          className="button"
          disabled={!title || !owner}
        ></input>
        <input
          type="reset"
          value="Reset"
          className="button"
          onClick={resetForm}
        ></input>
      </section>
    </form>
  );
};

NewBoardForm.propTypes = {
  addNewBoard: PropTypes.func
};

export default NewBoardForm;