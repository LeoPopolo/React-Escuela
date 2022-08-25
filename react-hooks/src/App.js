import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Characters from './Components/Characters';

function App() {

  const [ darkMode, setDarkMode ] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div className="App">
      <Header
        darkMode={darkMode}
        handleDarkMode={handleDarkMode}
      />
      <Characters
        darkMode={darkMode}
      />
    </div>
  );
}

export default App;
