import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/Inicio';
import { Route } from 'react-router';
import AppRoutes from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);

