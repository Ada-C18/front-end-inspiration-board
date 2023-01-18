import React, { useState } from "react";
import PropTypes from "prop-types";

const NewBoardForm = (props) => {

    const [title, setTitle] = useState('');
    const [owner, setOwner] = useState('');
    const handleTitleChange = (e) => { setTitle(e.target.value) };
    const handleOwnerChange = (e) => { setOwner(e.target.value) };

    const submitNewBoard = (e) => {
        e.preventDefault();
        props.createNewBoard({ title, owner });
        setTitle('');
        setOwner('');
    };


    return (
        <form onSubmit={submitNewBoard} className='new-board-form'>
            <label htmlFor='title'>Title</label>
            <input
                type="text"
                value={title}
                onChange={handleTitleChange}
                className={((title.length === 0) || (title.length > 40)) ? 'invalid-form-input' : ''}
            ></input>
            <label htmlFor='owner'>Owner's Name</label>
            <input
                type="text"
                value={owner}
                onChange={handleOwnerChange}
                className={((owner.length === 0) || (owner.length > 40)) ? 'invalid-form-input' : ''}
            ></input>
            <p>Preview: {title} - {owner}</p>
            <input
                type="Submit"
                disabled={((title.length === 0) || (owner.length === 0) || (title.length > 40) || (owner.length > 40))}
                className='new-board-form__submit-btn'
            ></input>
        </form>
    );
};

NewBoardForm.propTypes = {
    createNewBoard: PropTypes.func.isRequired,
};

export default NewBoardForm;
