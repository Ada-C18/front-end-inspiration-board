// import "../styles/FormNewCard.css";
import { useState } from "react";

const INITIAL_FORM ={
        message:"message",
    };

const FormNewCard = (props) => {
    const [formCard, setFormCard] = useState(INITIAL_FORM);

    const handleChange = (e) => {
        const newCardData = {
        ...formCard, board_id:props.boardId,
        [e.target.name]: e.target.value
        };
        setFormCard(newCardData)
    };

    const handleNewCardSubmit =(e) =>{
        e.preventDefault();
        props.addCardCallbackFunc(formCard, props.boardId);
    }

    return (
        <form onSubmit={handleNewCardSubmit}>
        <label htmlFor="message"> Message </label>
            <input 
                type="text" 
                id="message" 
                name="message"
                value={formCard.message}
                onChange={handleChange}  />
        <input type='submit' value='Add Card' />    
        </form>
    );

}

export default FormNewCard;

