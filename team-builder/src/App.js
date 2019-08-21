import React from 'react';
import './App.css';
import TeamList from './components/TeamList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is my Team Builder App</h1>
      </header>
      <TeamList />
    </div>
  );
}

export default App;
