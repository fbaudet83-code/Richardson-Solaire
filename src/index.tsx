import React from 'react';
import { createRoot } from 'react-dom/client';
// Importation de App qui se trouve actuellement à la racine
import App from '../App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
