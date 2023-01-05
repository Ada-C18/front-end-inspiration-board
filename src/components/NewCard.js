import { useState } from 'react';

const NewCard = ({handleCardSubmit}) => {
    const [message, setMessage] = useState('');
    
    const onMessageChange = (event) => {
        setMessage(event.target.value)
    };
    const handleSubmit=(event)=>{
        event.preventDefault();
        handleCardSubmit=(message);
        setMessage=('');
        // do something with data
    }
    //console.log('message',message);
    return (
        //<div className="new-card">
            //<h2>Create a New Card</h2>
            //form="new-card-form">
            <form>
                <label>New Card</label>
                <input type="text" value={message} onChange={onMessageChange}/>
                <div><input type="submit" value="message"/></div>
            </form>
        //</div>
    )
}
//button add <extrernal callback
export default NewCard;