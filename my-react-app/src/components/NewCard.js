//fix submit button (want to disable it when no text)
//fix input border colors (should turn white when text is in it but it stays red)
import "./NewCard.css";
import PropTypes from "prop-types";

import { useState } from "react";

const INITIAL_FORM_DATA = {
  message: "",
  // //---------------------------------ADDED--------------------------------------------
  // messageLength: 0,
  // liked: false,
  // //SHOULD we add numOfLikes: 0
  // //-------------------------------------------------------------------------------------
};

const NewCard = (props) => {
  const [CardData, setCardData] = useState(INITIAL_FORM_DATA);
  const messageLength = CardData.messageLength;
  let selectedBoard = props.selectedBoard;

  //delete the console logs later -----------------------------------------
  // if (selectedBoard.length === 0) {
  if (Object.keys(selectedBoard).length === 0) {
    console.log("No selected board");
    selectedBoard = false;
  } else {
    console.log("A board is selected");
  }
  //-------------------------------------------------------------------------

  const handleChange = (e) => {
    let datafield = e.target.value;
    const NewCardData = {
      ...CardData,
      [e.target.name]: datafield,
      messageLength: datafield.length, //------------------ADDED------------
    };
    setCardData(NewCardData);
  };

  const handleNewCardSubmit = (e) => {
    e.preventDefault();
    props.addCardCallback(CardData);
    setCardData(INITIAL_FORM_DATA);
  };

  const tooLong = CardData.messageLength < 40 ? false : true; //-----------------ADDED---------------------

  const inputClass = CardData.message /*|| !tooLong*/ ? "" : "empty"; //SOMETHING IS WRONG HEREEEE
  //if input fields for Title or Owner's Name are empty ->
  //red box around input boxes and submit button unavailable
  // if (CardData.title === '' || CardData.name==='') {
  //   const borderColor =
  // }
  return (
    <form onSubmit={handleNewCardSubmit}>
      <label htmlFor="message">Message</label>
      <input
        className={inputClass}
        type="text"
        id="message"
        name="message"
        value={CardData.message}
        onChange={handleChange}
      />

      <input
        type="submit"
        value="Add Card"
        disabled={!CardData || !selectedBoard || tooLong}
      />
    </form>
  );
};

NewCard.propTypes = {
  addCardCallback: PropTypes.func.isRequired,
};

export default NewCard;
