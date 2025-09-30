import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Hapus/komen baris index.css
// import './index.css'; 
// AKTIFKAN import ke App.css
import './App.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
