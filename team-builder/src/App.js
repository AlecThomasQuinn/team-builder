import React from 'react';
import './App.css';
import TeamList from './components/TeamList'
import TeamMemberForm from './components/TeamMemberForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is my Team Builder App</h1>
      </header>
      <TeamMemberForm />
      <TeamList />
    </div>
  );
}

export default App;
