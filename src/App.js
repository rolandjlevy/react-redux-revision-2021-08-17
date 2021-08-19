import React from 'react';
import './App.css';
import Counter from './Counter';
import Users from './Users';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Counter />
       <Users />
      </header>
    </div>
  );
}

export default App;
