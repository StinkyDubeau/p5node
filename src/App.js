import React from 'react';
import Header from './Header';
import './App.css';

function makeHeaders() {
  for (let i = 0; i < 15; i++) {
    return <Header count={i} />;
  }
}

function App() {

  return (
    <div>
      {makeHeaders()}
    </div>
  );

}

export default App;
