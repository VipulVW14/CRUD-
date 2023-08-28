// src/components/Table.js
import React from 'react';
// import { useState } from 'react';
// import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const Table = ({ data, onSelectRow, onDeleteRow }) => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('/api/entries');
  //       setData(response.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  
  return (
    <table>
      <thead>
        <tr>
          <th>Select</th>
          <th>ID</th>
          <th>Name</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Hobbies</th>
          <th>Update/Delete</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>
              <input type="checkbox" onChange={() => onSelectRow(row.id)} />
            </td>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.phoneNumber}</td>
            <td>{row.email}</td>
            <td>{row.hobbies}</td>
            <td>
              <button onClick={() => onDeleteRow(row.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

