import React, { useState } from "react";
import { useEffect } from "react";
import "./CardForm.css";
// import "../App.css";

// import BoardForm from "./components/BoardForm";
// import BoardList from "./components/BoardList";

const CardForm = (props) => {
  // declare and initialize state
  const kDefaultCardData = { message: "" };
  const [cardState, setCardForm] = useState(kDefaultCardData);
  // const [formState, setFormState] = useState(kDefaultFormData);

  /* handleNewData: update formState as user types. 
  Args: event: onChange event.
  Sets: formState, submitDisabledState */
  const handleNewData = function (event) {
    /* console.log(
      `handleNewData: ${event.target.name}, ${event.target.value.length}  `
    ); */
    const dataValue = event.target.value;
    const dataField = event.target.name;

    const newCardData = { ...cardState, [dataField]: dataValue };
    setCardForm(newCardData);
    console.log(cardState);
  };

  const handleSubmit = function (event) {
    event.preventDefault();
    props.handleNewCard(cardState);
    setCardForm(kDefaultCardData);
    console.log("handleSubmit");
  };

  return (
    <div>
      <h2>Add a Card</h2>
      <form onClick={handleSubmit}>
        <label> Message </label>
        <input
          type="type"
          id="message"
          name="message"
          value={cardState.message}
          onChange={handleNewData}
        />

        <label> Submit </label>
        <input type="submit" value="Add New CardForm"></input>
      </form>
    </div>
  );
};

// <div>
//   <h1>Grocery Cart</h1>
//   <ul>
//     {card.map((item, index) => (
//       <li onClick={() => removeItem(index)} key={index}>
//         {item}
//       </li>
//     ))}
//   </ul>
//   <h2>To DO</h2>
//   <ItemList items={todo} onItemClick={addItem} />
//   <h2>completed</h2>
//   <ItemList items={todo} onItemClick={addItem} />
// </div>
// const colors = ["Aquamarine", "BlueViolet", "Chartreuse", "CornflowerBlue"];

// export default function ColorPicker() {
//   const [color, setColor] = useState();
//   // call useState and assign its return values to `color` and `setColor`

//  const divStyle = {backgroundColor: 'purple'};
//       return (
//     <div style={divStyle}>
//       <p>The color is {color}</p>
//       <button>

//       </button>
//       <button>

//       </button>
//       <button>

//       </button>
//       <button>

//       </button>
//     </div>
//   );
// }

// CardForm.propTypes = {
//   message: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       board: PropTypes.string.isRequired,
//       owner: PropTypes.string.isRequired,
//       timeStamp: PropTypes.string.isRequired,
//       liked: PropTypes.bool.isRequired,
//       addItem: PropTypes.func.isRequired,
//       removeItem: PropTypes.func.isRequired,
//     })
//   ),
// };

export default CardForm;
