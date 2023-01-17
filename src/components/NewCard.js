import { useState } from 'react';

const NewCard = (props) => {
    const [message, setMessage] = useState('');
    
    const handleMessageChange = (event) => {
        setMessage(event.target.value)
    };
    const handleSubmit=(event)=>{
        event.preventDefault();
        props.onCardSubmit(message);//
        setMessage('');
    
        //form on sumbit 
    }
    //console.log('message',message);
    return (
        //<div className="new-card">
            //<h2>Create a New Card</h2>
            //form="new-card-form">
            <form onSubmit={handleSubmit}>
                <div className="newCard__buttons">
                <label>New Card </label>
                <input type="text" value={message} onChange={handleMessageChange}/>
                <div><input type="submit" value="Message"/></div>
                </div>
            </form>
        //</div>
    )
}
//button add <extrernal callback
export default NewCard;