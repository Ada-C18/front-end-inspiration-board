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

  // const handleInput= (e) => {
  //   if (e.target.value.length > 40){
  //     setDisabled(true)
  //   }else{
  //     setDisabled(false)
  //   }
  // }

  return (
    <form onSubmit={FormSubmit}>
      <div>
        <label htmlFor="Message">Message:</label>
        <input
          name="Message"
          // maxLength={40}
          value={formFields.message}
          onChange={onMessageChange}
          // className={formFields.message.length > 40? 'max_length_input': ''}
        />
      </div>
      <p> Preview - </p>
      <p>{formFields.message}</p>
      <input type="submit" value="Submit" disabled={formFields.message.length > 40} />
    </form>
  );
};

export default NewCardForm;
