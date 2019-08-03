import React from 'react';
import './App.css';

import NavBar from './components/Header/navbar';
import SignUp from './components/Login-SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <h1>Wingin' It Goose Control</h1>
      <NavBar />
      <SignUp />
    </div>
  )
}

export default App;
