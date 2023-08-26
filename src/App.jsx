// src/App.js
import React, { useState } from 'react';
import Form from './components/Form';
import Table from './components/Table';

const App = () => {
  const [data, setData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  const handleSaveEntry = (entry) => {
    // Add entry to the data array with a unique ID (you can use a library like uuid)
    const newEntry = { id: data.length + 1, ...entry };
    setData([...data, newEntry]);
  };

  const handleSelectRow = (id) => {
    // Toggle selection for the given ID
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const handleDeleteRow = (id) => {
    // Remove the row with the given ID
    setData(data.filter((row) => row.id !== id));
    setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
  };

  // Implement email sending function

  return (
    <div>
      <Form onSave={handleSaveEntry} />
      <Table data={data} onSelectRow={handleSelectRow} onDeleteRow={handleDeleteRow} />
      {/* Implement other buttons and functionalities */}
    </div>
  );
};

export default App;
