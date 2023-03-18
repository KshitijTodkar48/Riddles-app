import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BtnProvider } from './context/NextBtn';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BtnProvider>
        <App />
    </BtnProvider>
);

