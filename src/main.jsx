import React from 'react';
import ReactDOM from 'react-dom';
import UserList from './App';
import Login from './Login';

// ... (existing imports and code)

ReactDOM.render(
  <React.StrictMode>
    <UserList />
  </React.StrictMode>,
  document.getElementById('root') // Replace 'root' with the actual ID of your root element
);
