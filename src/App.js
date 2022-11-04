import React from 'react';
import {Header, Navigation, Main } from './containers'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="flex flex-col md:flex-row">
        <Navigation></Navigation>
        <Main></Main>
      </div>
    </div>
  );
}

export default App;