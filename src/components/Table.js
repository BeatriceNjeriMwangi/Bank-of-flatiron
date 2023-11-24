//import react and search
import React, { useState, useEffect } from 'react';


function Table({ transactions }) {//function for table
    const [searchTerm, setSearchTerm] = useState('')
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
      };
    
      const filteredTransactions =
        searchTerm.length >= 3
          ? transactions.filter((item) =>
              item.description.toLowerCase().includes(searchTerm.toLowerCase())
            )
          : transactions;
    

   
    useEffect(() => {
        
        setSearchTerm('');
      }, [transactions]);
//for searching
    // const handleSearch = (searchTerm) => {
    //     let filtered;
    //     if (searchTerm.length >= 3) {
          
    //       filtered = transactions.filter((transaction) =>
    //         transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    //       );
    //     } else {
    //       filtered = transactions;
    //     }
    //     setFilteredTransactions(filtered);
    //   };

    const handleDelete = (index) => {
        // Implement the logic to delete the transaction with the given index
        // Update the state or communicate with the parent component to update the data
        console.log('Delete button clicked for index:', index);
      };
 //displays table content:rows and data
    return (
        <div>
            <div>
            <input
  type="text"
  placeholder="Search items..."
  value={searchTerm}
  onChange={handleSearchChange}
/>
      </div>
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