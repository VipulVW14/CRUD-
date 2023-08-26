// src/components/Form.js
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const Form = ({ onSave }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [hobbies, setHobbies] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !phoneNumber || !email || !hobbies) {
      alert('All fields are required');
      return;
    }

    // Implement additional validation logic here, e.g., email format

    onSave({ name, phoneNumber, email, hobbies });

    // Clear form fields
    setName('');
    setPhoneNumber('');
    setEmail('');
    setHobbies('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField id="outlined-basic" label="Name" variant="outlined" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <TextField id="outlined-basic" label="Number" variant="outlined" type="number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
        <TextField id="outlined-basic" label="Email" variant="outlined" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <TextField id="outlined-basic" label="Hobbies" variant="outlined" type="text" value={hobbies} onChange={(e) => setHobbies(e.target.value)}/>
        <Button variant="contained" type="submit">Save</Button>
      </form>
    </div>
  );
};

export default Form;
