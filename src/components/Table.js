import React, {useState} from 'react';
//import react and usestate

function Table({transactions}){
    // const [transactions, setTransactions]=useState([])
    // const [search, setSearch] = useState('')
    console.log(transactions);
    return (
        //display table
            <table className='table'>
                <thead className='thead'>
                    <tr>
                    

                        <th>
                            Date
                        </th>

                        <th>
                            Description
                        </th>

                        <th>
                            Category
                        </th>

                        <th>
                            Amount
                        </th>

                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>

                    {transactions.map((transaction, index) => {
                        return(
                        <tr key={index}>
                            <td>
                                {transaction.date}
                            </td>
                            <td>
                                {transaction.description}
                            </td>
                            <td>
                                {transaction.category}
                            </td>
                            <td>
                                {transaction.amount}
                            </td>
                            <td>
                                <button className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                        )
                    })}


                </tbody>
            </table>
        
    )
}

export default Table;//exporting table component