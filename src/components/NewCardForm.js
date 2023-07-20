import React, { useState } from "react";
import './NewCardForm.css';

const kInitialFormData = {
    message: '',
};

const NewCardForm = ({ handleSubmit }) => {
    const [formData, setFormData] = useState(kInitialFormData);

    const handleChange = (event) => {
        const value = event.target.value;

        setFormData(prev => ({
            ...prev, message: value
        }));
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        handleSubmit({ ...formData });
        setFormData(kInitialFormData);
    };

    return (
    <section className='card-form-container'>
        <h2 className='card-title'>Create a New Card</h2>
        <form onSubmit={handleFormSubmit}>
            <label className='message' htmlFor="message">✨Message✨ </label>
            <input className='input-box'
                type="text"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
            />
            <p className='preview'>Preview: {formData.message} </p>
            <input className='newcard-button' type="submit" value="Add new card" />
            
        </form>
    </section>
    );
};
export default NewCardForm;