import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Brewery from './components/Brewery';

function App() {
  return (
    <div className="App">
      <h1>List of Breweries</h1>
      <Brewery />
    </div>
  );
}

export default App;
