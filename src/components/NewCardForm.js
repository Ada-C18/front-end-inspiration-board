import { useState } from "react";
import PropTypes from 'prop-types';
// connection to backend so new card shows up. Only place a new card can be created. There might be more
// Valentina
const NewCardForm = ({addCardCallback}) => {
  const [cardMessage, setCardMessage] = useState({
    message: '',
    likes_count: 0
  });

  const handleChange = e => {
    // console.log(e.target.value); //gives the input by letter not words
    // console.log(e.target)
    setCardMessage({
      ...cardMessage,
      message: e.target.value});
    };
    
  const submitCardData = e => {
    e.preventDefault();

    addCardCallback(cardMessage)

    setCardMessage({
      message: '',
      likes_count: 0
    });
  };

  return(
    <form onSubmit={submitCardData}>
      <label>Message: </label>
      <input
      type="text"
      onChange={handleChange}
      placeholder='Message'
      // value={cardMessage.message}
      // removing the value element allows for message to show up but still doesnt print out the whole message in console
      />
      {/* No likes count input here, need to update backend for this part */}
      {/* card created with 0 likes */}
      <input type="submit" value="Create Card" />
    </form>
  )};

  NewCardForm.propTypes = {
    addCardCallback: PropTypes.func
  }
  
  export default NewCardForm;
  