import React from 'react';
import './App.css';
import ProfilPhoto from './components/profile/ProfilPhoto';
import FullName from './components/profile/FullName';
import Address from './components/profile/Address';

function App() {
  return (
    <div className="App">
      <ProfilPhoto />
      <br/>
      <br/>
      <FullName />
      <br/>
      <br/>
      <Address />
    </div>
  );
}

export default App;