import React from 'react';
import Router from "./components/Router";

import './App.css';

function App() {
  return (
    <div className="App">
      <Router isAuthenticated={true}/>
    </div>
  );
}

export default App;
