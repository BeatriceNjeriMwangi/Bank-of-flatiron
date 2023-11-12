import React, {useState} from 'react';

function Table(){
    const [transactions, setTransactions]=useState([])
    const [search, setSearch] = useState('')
    return (
        <div>
            <input 
            type='text'
            placeholder='Search transactions'
            />
            <table className='table'>
                <th className='th'>
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
                </th>
            </table>
        </div>
    )
}

export default Table;