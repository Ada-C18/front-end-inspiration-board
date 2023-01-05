import PropTypes from "prop-types";
import { useState } from "react";

// const INITIAL_FORM_DATA = {
// 	title: "",
// 	name: "",
// };

// TODOs
// -- "Hide New Board Form" event listeners, function - where? => here
// -- Error - stretch goal: add read outline around the input field
// -- Preview
// -- Read Boards:
// View a list of all boards.
// Select a board.

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

	// Error - Disable submit button if inputs empty
	const isSubmitDisable = formData.title === "" || formData.owner === "";

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

			{/* <input type="submit" value="Submit"></input> */}
			<button type="submit" disabled={isSubmitDisable}>
				Submit
			</button>
		</form>
	);
};

NewBoardForm.propTypes = {
	addBoard: PropTypes.func.isRequired,
};

export default NewBoardForm;
