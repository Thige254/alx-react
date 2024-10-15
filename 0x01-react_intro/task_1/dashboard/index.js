import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Notifications from './Notifications'; // Import Notifications component
import './Notifications.css'; // Import Notifications styles

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// Render Notifications component
ReactDOM.render(
    <React.StrictMode>
        <Notifications />
    </React.StrictMode>,
    document.getElementById('root-notifications')
);

// If you want to measure performance, reportWebVitals()
reportWebVitals();
