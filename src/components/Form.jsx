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
    onSave({ name, phoneNumber, email, hobbies });

    // Clear form fields
    setName('');
    setPhoneNumber('');
    setEmail('');
    setHobbies('');
  };

  return (
    <div >
      <form onSubmit={handleSubmit} style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around", padding:"20px", width: "100vw"}} >
        <TextField id="outlined-basic" label="Name" variant="outlined" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <TextField id="outlined-basic" label="Phone Number" variant="outlined" type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
        <TextField id="outlined-basic" label="Email" variant="outlined" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <TextField id="outlined-basic" label="Hobbies" variant="outlined" type="text" value={hobbies} onChange={(e) => setHobbies(e.target.value)}/>
        <Button variant="contained" type="submit">Add</Button>
      </form>
    </div>
  );
};

export default Form;
