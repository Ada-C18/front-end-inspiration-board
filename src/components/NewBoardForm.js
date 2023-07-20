import React, { useState } from "react";
import './NewBoardForm.css'

const NewBoardForm = (props) => {
    const [title, setTitle] = useState("");
    const [owner, setOwner] = useState("");
    const [isBoardFormVisible, setIsBoardFormVisible] = useState(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit({
            title: title,
            owner: owner,
        });
        setTitle("");
        setOwner("");
    };

    const hideForm = () => {
        setIsBoardFormVisible(false);
    };

    const showForm = () => {
        setIsBoardFormVisible(true);
    };

    return (
        <div>
            <h2 className='newboard_title'>Create a New Board</h2>
            {isBoardFormVisible && (
                <form onSubmit={handleSubmit}>
                    <label>
                        Title:
                        <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        />
                    </label>
                    <p></p>
                    <label>
                        Owner:
                        <input
                        type="text"
                        name="owner"
                        value={owner}
                        onChange={(event) => setOwner(event.target.value)}
                        />
                    </label>
                    <p></p>
                    <h2>Preview</h2>
                    <p>Title: {title}</p>
                    <p>Owner: {owner}</p>
                    <button onClick={handleSubmit}>Submit</button>
                </form>
            )}
            <p></p>
            <button onClick={isBoardFormVisible ? hideForm : showForm}>
                {isBoardFormVisible ? 'Hide New Board Form' : 'Show New Board Form'} Form
            </button>

        </div>
    );
};

export default NewBoardForm;