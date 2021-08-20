import React from 'react';
import Counter from './components/Counter';
import Users from './components/Users';

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
