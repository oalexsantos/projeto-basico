import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const leads = [
  { name: "Fulano", email: "fulano@email.com", numPhone: " +55 12 9999-0000"},
  { name: "Fulano", email: "fulano@email.com", numPhone: " +55 12 9999-0000"},
  { name: "Fulano", email: "fulano@email.com", numPhone: " +55 12 9999-0000"},
  { name: "Fulano", email: "fulano@email.com", numPhone: " +55 12 9999-0000"},
  { name: "Fulano", email: "fulano@email.com", numPhone: " +55 12 9999-0000"},
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App leads={leads} />
  </React.StrictMode>
);
