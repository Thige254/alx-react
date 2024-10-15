// task_1/dashboard/src/App.js

import React from 'react';
import holbertonLogo from './holberton-logo.png';
import { getFullYear, getFooterCopy } from './utils'; // Import functions from utils.js
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={holbertonLogo} alt="Holberton Logo" />
                <h1>School dashboard</h1>
            </header>
            <div className="App-body">
                <p>Login to access the full dashboard</p>
            </div>
            <footer className="App-footer">
                <p>{`Copyright ${getFullYear()} - ${getFooterCopy(true)}`}</p>
            </footer>
        </div>
    );
}

export default App;
