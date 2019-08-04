import React from 'react';
import './App.scss';

import NavBar from './components/Header/navbar';
import SignUp from './components/Login-SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SignUp />
    </div>
  )
}

export default App;
