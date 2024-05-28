import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BeerList from './components/BeerList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BeerList />
      </header>
    </div>
  );
}

export default App;
