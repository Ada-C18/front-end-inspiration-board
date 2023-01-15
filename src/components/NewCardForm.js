import { useState } from "react";

const NewCardForm = (props) => {
  const [formFields, setFormFields] = useState({
    message: "",
  });

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

  return (
    <form onSubmit={FormSubmit}>
      <div>
        <label htmlFor="Message">Message:</label>
        <input
          name="Message"
          value={formFields.message}
          onChange={onMessageChange}
        />
      </div>
      <p> Preview - </p>
      <p>{formFields.message}</p>
      <input type="submit" value="Submit New Card" />
    </form>
  );
};

export default NewCardForm;
