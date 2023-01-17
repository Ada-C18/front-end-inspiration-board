//fix submit button (want to disable it when no text)
//fix input border colors (should turn white when text is in it but it stays red)
import "./NewCard.css";
import PropTypes from "prop-types";

import { useState } from "react";

const INITIAL_FORM_DATA = {
  message: "",
};

const NewCard = (props) => {
  const [CardData, setCardData] = useState(INITIAL_FORM_DATA);

  const handleChange = (e) => {
    let datafield = e.target.value;
    const NewCardData = {
      ...CardData,
      [e.target.message]: datafield,
    };
    setCardData(NewCardData);
  };

  const handleNewCardSubmit = (e) => {
    e.preventDefault();
    props.addCardCallback(CardData);
  };

  const inputClass = CardData.message ? "" : "empty";
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

      <input type="submit" value="Add Card" disabled={!CardData} />
    </form>
  );
};

NewCard.propTypes = {
  addCardCallback: PropTypes.func.isRequired,
};

export default NewCard;
