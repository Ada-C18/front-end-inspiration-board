import "../styles/FormNewBoard.css";
import { useState } from "react";

const INITIAL_FORM_DATA = {
    title:"Title",
    owner:"Name",
};

const NewBoardForm = (props) => {
    const [formData, setFormData] = useState(INITIAL_FORM_DATA);

    const handleChange = (e) => {
        const newFormData ={
            ...formData,
            [e.target.name]: e.target.value
        };
        setFormData(newFormData);
    };

    const handleNewBoardSubmit =(e) =>{
        e.preventDefault();
        props.addBoardCallbackFunc(formData);
    }

return (
    <form onSubmit={handleNewBoardSubmit}>
        {/* debe ser el mismo htmlFor == id */}
        <label htmlFor="title" > Title </label>
        <input 
            type="text" 
            id="title" 
            name="title" 
            value={formData.title} 
            onChange={handleChange} 
        />
        <label htmlFor="owner" > Owner </label>
        <input 
            type="text" 
            id="owner" 
            name="owner" 
            value={formData.owner} 
            onChange={handleChange} 
        />
    
        <input type='submit' value='Add Board' />

    </form>
    );
}

export default NewBoardForm;