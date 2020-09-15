import React from 'react';
import logo from './logo.svg';
import './App.css';

//This project uses create-react-app. Use `npm start` to start the local development server. (see https://create-react-app.dev/docs/getting-started/#scripts for more details)

//Please create and use a component (or components) which displays a list of example data.
//Fetch the data using a network request rather than an import statement.
//example data lives at http://localhost:3000/example_data.json
//each item should display a name, description, date
//the items should be sorted by name before being displayed

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
