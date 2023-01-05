import { useState } from 'react';

const NewCard = ({onCardSubmit}) => {
    const [message, setMessage] = useState('');
    
    const handleMessageChange = (event) => {
        setMessage(event.target.value)
    };
    const handleSubmit=(event)=>{
        event.preventDefault();
        onCardSubmit(message);//
        setMessage('');
        //call the functions don't reassign the variable 
        //do i need the handle submit
        //passing down handlesubmit from app as a prop
        //props.handle card submit
        //form on sumbit 
    }
    //console.log('message',message);
    return (
        //<div className="new-card">
            //<h2>Create a New Card</h2>
            //form="new-card-form">
            <form onSubmit={handleSubmit}>
                <label>New Card</label>
                <input type="text" value={message} onChange={handleMessageChange}/>
                <div><input type="submit" value="message"/></div>
            </form>
        //</div>
    )
}
//button add <extrernal callback
export default NewCard;