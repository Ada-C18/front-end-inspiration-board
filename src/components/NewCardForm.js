import { useState } from "react";
import PropTypes from 'prop-types';
// connection to backend so new card shows up. Only place a new card can be created. There might be more
// Valentina
const NewCardForm = ({addCardCallback}) => {
  const [cardMessage, setCardMessage] = useState({
    message: '',
    like_count: 0
  });

  const handleChange = e => {
    e.preventDefault();

    // console.log(e.target.value); //gives the input by letter not words
    setCardMessage({...cardMessage, [e.target.name]: e.target.value});
    console.log(e.target.name);
  };

  const submitCardData = e => {

    addCardCallback(cardMessage)

    setCardMessage({
      message: '',
      like_count: 0
    });
  };

  return(
    <form onSubmit={submitCardData}>
      <label>Message:</label>
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
  