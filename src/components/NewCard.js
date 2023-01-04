import { useState } from 'react';

const NewCard = () => {
    const [message, setMessage] = useState('');
    const onMessageChange = (event) => {
        setMessage(event.target.value)
    }

    return (
        <div className="new-card">
            <h2>Create a New Card</h2>
            <form className="new-card-form">
                <label>New Card</label>
                <input type="text" value={message} onChange={onMessageChange}/>
            </form>
        </div>
    )
}

export default NewCard;