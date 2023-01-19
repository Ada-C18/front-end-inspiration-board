import PropTypes from "prop-types";
import { useState } from "react";

// TODOs
// -- Error - stretch goal: add red outline around the input field

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

	const onFormSubmit = (e) => {
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

	// Hide Form
	const [hideForm, setHideForm] = useState(false);

	if (!hideForm) {
		return (
			<>
				<form onSubmit={onFormSubmit}>
					<h1>Create New Board</h1>
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

					<p>
						Preview: {formData.title} - {formData.owner}
					</p>
					<button type="submit" disabled={isSubmitDisable}>
						Submit
					</button>
				</form>

				<button onClick={() => setHideForm(true)}>
					Hide New Board
				</button>
			</>
		);
	} else {
		return (
			<>
				<h1>Create New Board</h1>
				<button onClick={() => setHideForm(false)}>
					Show New Board Form
				</button>
			</>
		);
	}
};

NewBoardForm.propTypes = {
	addBoard: PropTypes.func.isRequired,
};

export default NewBoardForm;
