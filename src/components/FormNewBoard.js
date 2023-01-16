import "../styles/FormNewBoard.css";
import { useState } from "react";

const INITIAL_FORM_DATA = {
    title:"",
    owner:"",
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

    const [show, setShow] = useState(false)


return (
    <div>
        { show?
        <form onSubmit={handleNewBoardSubmit}>
            <label htmlFor="title" > Title </label>
            <input 
                type="text" 
                id="title" 
                name="title" 
                value={formData.title} 
                placeholder = "Title"
                onChange={handleChange} 
            />
            <label htmlFor="owner" > Owner </label>
            <input 
                type="text" 
                id="owner" 
                name="owner" 
                value={formData.owner} 
                placeholder = "Name"
                onChange={handleChange} 
            />
        
            <input type='submit' value='Add Board' />
            
            <button onClick={()=>setShow(false)} > Hide New Board Form </button>
        </form> 
        :
        <button onClick={()=>setShow(true)} > Create New Board </button>
        }

        

        <br />
    </div>
    );
}

export default NewBoardForm;