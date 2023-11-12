import './App.css';
import React, {useEffect, useState} from'react';
import Search from './Search';
import Form from './Form';
import Table from './Table';

function App() {
  const [search, setSearch] = useState('');
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/transactions')
  .then(res => res.json())
  .then(data => setTransactions(data))
  //.catch(err => console.error(err)) 
  }, [])

  function handleAdded({transactions}){
    const newTransactions =[...transactions, newTransactions];
    setTransactions(newTransactions);

  }

  return (
    <div className="App">
      <div><h1>Bank of Flatiron</h1></div>
      <Search />
      <Form />
      <Table transactions={transactions}/>
    </div>
  );
}

export default App;
