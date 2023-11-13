// Table.js
import React, { useState, useEffect } from 'react';
import Search from './Search';

function Table({ transactions }) {
    const [filteredTransactions, setFilteredTransactions] = useState(transactions);
    

    // Create a copy of the transactions array
    useEffect(() => {
        // Set filteredTransactions to the original list of transactions when the component mounts
        setFilteredTransactions(transactions);
      }, [transactions]);

    const handleSearch = (searchTerm) => {
        let filtered;
        if (searchTerm.length >= 3) {
          // Only search for a specific description if filterText is at least 3 characters long
          filtered = transactions.filter((transaction) =>
            transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
          );
        } else {
          // If filterText is less than 3 characters, show all transactions
          filtered = transactions;
        }
        setFilteredTransactions(filtered);
      };

    const handleDelete = (index) => {
        // Add logic to handle delete for the specified index
        console.log('Delete button clicked for index:', index);
    };

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
