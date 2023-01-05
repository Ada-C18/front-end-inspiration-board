import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './BoardForm.css';

const kDefaultFormData = {
  title: '',
  owner: '',
};

const BoardForm = function (props) {
  const [formState, setFormState] = useState(kDefaultFormData);

  const [submitDisabledState, setSubmitDisabledState] = useState(true);

  useEffect(() => {
    // enable submit button if there's valid data in formState
    if (formState.owner !== '' && formState.title !== '') {
      setSubmitDisabledState(() => false);
    }

    // disable submit button if the user had deleted all of the text.
    // glitchy, but it mostly works for now.
    if (formState.owner === '' || formState.title === '') {
      setSubmitDisabledState(() => true);
    }
  }, [formState]);

  /* handleNewData: update formState as user types. 
  Args: event: onChange event.
  Sets: formState, submitDisabledState */
  const handleNewData = function (event) {
    /* console.log(
      `handleNewData: ${event.target.name}, ${event.target.value.length}  `
    ); */
    const dataValue = event.target.value;
    const dataField = event.target.name;

    const newFormData = { ...formState, [dataField]: dataValue };
    setFormState(newFormData);

    // enable submit button if there's valid data in formState
    if (formState.owner !== '' && formState.title !== '') {
      setSubmitDisabledState(() => false);
    }

    // disable submit button if the user had deleted all of the text.
    // glitchy, but it mostly works for now.
    if (event.target.value === '') {
      setSubmitDisabledState(() => true);
    }
  };

  /* handleSubmit: pass data back to App and reset form
  Args: event
  Sets: formState, submitDisabledState
  Calls: props.handleNewBoard */
  const handleSubmit = function (event) {
    event.preventDefault();
    props.handleNewBoard(formState);
    setFormState(kDefaultFormData);
    setSubmitDisabledState(true);
  };

  // hide show form
  const [stateClass, setStateClass] = useState('visible');

  /* handleSubmit: hide or show form when button is pressed.
  Args: event
  Sets: stateClass */
  const toggleStateClass = function (e) {
    setStateClass((sc) => (sc === 'visible' ? 'hidden' : 'visible'));
    console.log('toggleStateClass ' + stateClass);
  };

  /* hideButtonText: generate text depending on if stateClass is 'hidden' or 'visible'.
  Returns: string "Hide" or "Show" */
  const hideButtonText = () => (stateClass === 'visible' ? 'Hide' : 'Show');

  return (
    <div id="board-form-component">
      <h2>Create a New Board</h2>
      <form onSubmit={handleSubmit} className={stateClass}>
        <div>
          <label htmlFor="title">Board Title</label>
          <input
            type="type"
            id="title"
            name="title"
            value={formState.title}
            onChange={handleNewData}
          />
        </div>
        <div>
          <label htmlFor="owner">Owner's Name</label>
          <input
            type="type"
            id="owner"
            name="owner"
            value={formState.owner}
            onChange={handleNewData}
          />
        </div>
        <div>
          <input
            type="submit"
            value="Add New Board"
            disabled={submitDisabledState}
          ></input>
        </div>
      </form>
      <button onClick={toggleStateClass}>
        {hideButtonText()} New Board Form
      </button>
    </div>
  );
};

BoardForm.propTypes = {
  handleNewBoard: PropTypes.func.isRequired,
};

export default BoardForm;
