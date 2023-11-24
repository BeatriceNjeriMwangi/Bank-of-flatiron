import './App.css';
import React, {useEffect, useState} from'react';

import Form from './Form';
import Table from './Table';
//importing components

function App() {
  // state variables
  const [searchTerm, setSearchTerm] = useState('');
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // fetching data from db.json using useEffect()
    fetch('https://bank-sui8.onrender.com/transactions')
      .then(res => res.json())
      .then(data => setTransactions(data))
      //.catch(err => console.error(err))
  }, [])

  function handleAdded(newTransaction) {//Post add transaction
    
    fetch('https://bank-sui8.onrender.com/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTransaction),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to add transaction');
        }
        return response.json();
      })
      .then(() => {
        setTransactions([...transactions, newTransaction]);
      })
      .catch(error => {
        console.error('Error adding transaction:', error);
      });
  }
//dispay elements of app
  return (
    <div className="App">
      <div>
        <h1>Bank of Flatiron</h1>
      </div>

      <Form onAddTransaction={handleAdded} />
      <Table transactions={transactions} />
    </div>
  );
}
export default App;
//export App