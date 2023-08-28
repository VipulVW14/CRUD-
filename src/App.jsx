// src/App.js
import React, { useState } from 'react';
import Form from './components/Form';
import Table from './components/Table';
import MyTable from './components/MyTable';
import { AppBar } from '@mui/material';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

const App = () => {
  const [data, setData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  const handleSaveEntry = (entry) => {
    const newEntry = { id: data.length + 1, ...entry };
    setData([...data, newEntry]);
  };

  const handleSelectRow = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const handleDeleteRow = (id) => {
    setData(data.filter((row) => row.id !== id));
    setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
  };

  // email sending function

  return (
    <div>
      {/* <Appbar/> */}
      <Form onSave={handleSaveEntry} />
       <Divider>
        <Chip label="" />
      </Divider>
      <div></div>
      <div></div>
      <MyTable data={data} onSelectRow={handleSelectRow} onDeleteRow={handleDeleteRow}/>
      {/* Implement other buttons and functionalities */}
    </div>
  );
};

export default App;
