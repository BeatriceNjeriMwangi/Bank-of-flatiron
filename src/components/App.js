import './App.css';
import React, {useEffect, useState} from'react';
import Search from './Search';
import Form from './Form';
import Table from './Table';
//importing components

function App() {
  //initializing state variables
  const [search, setSearch] = useState('');
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    //fetching data from db.json using useffect()
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
     
      <Search search={search} setSearch={setSearch}/>
      <Form onAddTransaction={handleAdded}/>
      <Table transactions={transactions}/>
    </div>
  );
}

export default App;//exporting app
