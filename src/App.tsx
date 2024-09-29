import React from 'react';
import Router from "./components/Router";

import './App.css';
import { AuthProvider } from './hooks/useAuth';

function App() {
  return (

    <AuthProvider>
      <div className="App">
        <Router isAuthenticated={true} />
      </div>
    </AuthProvider>
  );
}

export default App;
