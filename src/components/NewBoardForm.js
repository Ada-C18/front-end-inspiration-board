import PropTypes from "prop-types";
import { useState } from "react";

// const INITIAL_FORM_DATA = {
// 	title: "",
// 	name: "",
// };

// TODOs
// -- Get Submit working, add new board to list - DONE
// -- "Hide New Board Form" event listeners, function - where?
// -- Error
// -- Preview

// REQS - Create
// Create a new board, by filling out a form. The form includes "title" and "owner" name of the board.
// See an error message if I try to make a new board with an empty/blank/invalid/missing "title" or "owner" input.
// All error messages can look like a new section on the screen, a red outline around the input field, and/or disabling the input, as long as it's visible
// Hide the "New Board" form, so I don't have to see the "New Board" form all the time when I'm looking at cards.

// props from App: addBoard
const NewBoardForm = ({ addBoard }) => {
	const [formData, setFormData] = useState({
		title: "",
		owner: "",
	});

	const onTitleChange = (event) => {
		setFormData({
			...formData,
			title: event.target.value,
		});
	};

	const onOwnerChange = (event) => {
		setFormData({
			...formData,
			owner: event.target.value,
		});
	};

	// addBoard
	const onFormSubmit = (e) => {
		console.log("Calling onFormSubmit");
		e.preventDefault();

		addBoard({
			title: formData.title,
			owner: formData.owner,
		});

		// reset to empty fields after adding board
		setFormData({
			title: "",
			owner: "",
		});
	};

	return (
		<form onSubmit={onFormSubmit}>
			<div>
				<label htmlFor="title"> Title</label>
				<input
					type="string"
					name="title"
					id="title"
					value={formData.title}
					onChange={onTitleChange}
				></input>
			</div>

			<div>
				<label htmlFor="owner"> Owner's Name</label>
				<input
					type="string"
					name="owner"
					id="owner"
					value={formData.owner}
					onChange={onOwnerChange}
				></input>
			</div>

			<input type="submit" value="Submit"></input>
		</form>
	);
};

NewBoardForm.propTypes = {
	addBoard: PropTypes.func.isRequired,
};

export default NewBoardForm;
