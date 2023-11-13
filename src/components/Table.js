//import react and search
import React, { useState, useEffect } from 'react';
import Search from './Search';

function Table({ transactions }) {//function for table
    const [filteredTransactions, setFilteredTransactions] = useState(transactions);
    

   
    useEffect(() => {
        
        setFilteredTransactions(transactions);
      }, [transactions]);
//for searching
    const handleSearch = (searchTerm) => {
        let filtered;
        if (searchTerm.length >= 3) {
          
          filtered = transactions.filter((transaction) =>
            transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
          );
        } else {
          filtered = transactions;
        }
        setFilteredTransactions(filtered);
      };

    const handleDelete = (index) => {//it is not clickable for now
        console.log('Delete button clicked for index:', index);
    };
 //displays table content:rows and data
    return (
        <div>
            <Search onSearch={handleSearch} />
            <table className='table'>
                <thead className='thead'>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredTransactions.map((transaction, index) => (
                        <tr key={index}>
                            <td>{transaction.date}</td>
                            <td>{transaction.description}</td>
                            <td>{transaction.category}</td>
                            <td>{transaction.amount}</td>
                            <td>
                                <button
                                    className='btn btn-danger'
                                    onClick={() => handleDelete(index)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
//export table component