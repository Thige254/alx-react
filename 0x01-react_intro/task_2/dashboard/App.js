import React from 'react';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';
import logo from './holberton-logo.png';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="Holberton Logo" />
                <h1 className="App-title">School dashboard</h1>
            </header>
            <div className="App-body">
                <p>Login to access the full dashboard</p>
                <form>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />
                    <br />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" />
                    <br />
                    <button type="submit">OK</button>
                </form>
                <hr className="red-line" />
            </div>
            <footer className="App-footer">
                <p>{`Copyright ${getFullYear()} - ${getFooterCopy(true)}`}</p>
            </footer>
        </div>
    );
}

export default App;
