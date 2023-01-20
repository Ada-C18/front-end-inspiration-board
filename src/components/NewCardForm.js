import { useState } from "react";
import PropTypes from "prop-types";

const NewCardForm = (props) => {
  // this here is going to be grabbing the message that the user passes in, that will be passed into the card component
  const [formField, setFormField] = useState(" ");

  const onFormChange = (event) => {
    setFormField({
      ...formField,
      message: event.target.value,
    });
  };

  const onCardSubmit = (event) => {
    event.preventDefault();
    // not sure if this should be passed to card as a dict
    // We don't need to pass in a dict here because we have the format in the axios body
    // NewCardForm does not need to know the board id because the purpose 
    // of this component is simply to submit a new card. 
    props.postNewCard(formField.message);
    // when we pass in this callback we will need to pass it is a prop to make the API call
    setFormField({
      message: "",
    });
  };

  return (
    <form onSubmit={onCardSubmit}>
      <div>
        <label htmlFor="message">Message:</label>
        <input
          name="Message"
          value={formField.message}
          onChange={onFormChange}
          // className={((formField.message.length === 0) || (formField.message.length > 40)) ? 'invalid-form-input' : ''}
        />
      </div>
      <input type="submit" value="Add Card" />
    </form>
  );
};

//     NewCardForm.propTypes = {
//     addMessageCallback: PropTypes.func.isRequired
// };

export default NewCardForm;

// post request and data will be passed into CardList to make the new card -> card component will only display the new card