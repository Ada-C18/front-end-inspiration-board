import React, { useState, useEffect } from 'react';

const CardForm = (props) => {
  const [formData, setFormData] = React.useState([]);
  return (
    <div>
      <h2>Card Form</h2>
      <form>
        <input></input>
        <input></input>
      </form>
    </div>
  );
};

export default CardForm;
