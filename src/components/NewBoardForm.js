import PropTypes from "prop-types";
import { useState } from "react";

const INITIAL_FORM_DATA = {
	title: 0,
	name: "",
};

// TODOs
// - "Hide New Board Form" event listeners, function - where?

// props from App: addBoard
const NewBoardForm = (props) => {
	// add state
	const [formData, setFormData] = useState(INITIAL_FORM_DATA);


	return (
		<form>
			<label htmlFor="title"> Title</label>
			<input type="string" name="title" id="title"></input>

			<label htmlFor="owners-name"> Owner's Name</label>
			<input type="string" name="owners-name" id="owners-name"></input>

			<input type="submit" value="Submit"></input>
		</form>
	);
};

NewBoardForm.propTypes = {
	// call back here
};

export default NewBoardForm;
