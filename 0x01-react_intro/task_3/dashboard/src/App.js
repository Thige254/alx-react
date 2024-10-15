import React from 'react';
import holbertonLogo from './holberton-logo.png'; // Import Holberton logo
import './App.css'; // Import the CSS file

// Function component App
function App() {
  return (
    <div className="App">
      {/* Header section with logo and title */}
      <header className="App-header">
        <img src={holbertonLogo} alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </header>
      
      {/* Body section with a login prompt */}
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      
      {/* Footer section with copyright notice */}
      <footer className="App-footer">
        <p>Copyright 2020 - Holberton School</p>
      </footer>
    </div>
  );
}

export default App; // Export the App component
