import './App.css';
import React, {useState} from'react';
import Search from './Search';
import Form from './Form';
import Table from './Table';

function App() {
  return (
    <div className="App">
      <h1>Bank of Flatiron</h1>
      <Search />
      <Form />
      <Table />
    </div>
  );
}

export default App;
