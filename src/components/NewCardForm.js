import { useState } from "react";
import PropTypes from "prop-types";
import "./NewCardForm.css";

const NewCardForm = (props) => {
  const [formFields, setFormFields] = useState({
    message: "",
  });
  const [error, setError]= useState(false)

  const onMessageChange = (event) => {
    setFormFields({
      ...formFields,
      message: event.target.value,
    });
    
  };

  const FormSubmit = (event) => {
    event.preventDefault();
    props.onUpdateCardData({
      message: formFields.message,

    });
    setFormFields({
      message: "",
    });

  };

  const validateInput = () =>{
      setError(formFields.message.length === 0||formFields.message.length > 40)
  }

  return (
    <form onSubmit={FormSubmit}>
      <div>
        <label htmlFor="Message">Message:</label>
        {error ? <label className="error_text">"Maximum length should not be less than 1 character or exceed 40 characters"</label> :' '}
        <input
          name="Message"
          className={
            formFields.message.length === 0 || formFields.message.length > 40
              ? "max_length_input"
              : ""
          }
          onChange={onMessageChange}
          onInput={validateInput}
          value={formFields.message}
        />

      </div>
      <p> Preview - </p>
      <p>{formFields.message}</p>
      <input
        type="submit"
        value="Submit"
        disabled={
          formFields.message.length === 0 || formFields.message.length > 40
        }
      />
    </form>
  );
};
NewCardForm.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
    })
  ),
};

export default NewCardForm;
