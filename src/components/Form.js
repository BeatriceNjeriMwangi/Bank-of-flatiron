import React, {useState} from "react";

function Form({onAddTransaction, transactionCount}){
    const [newTransactions, setNewTrasaction] = useState({
        date: "",
        description: "",
        category: "",
        amount: "",
        
    })
    function handleChange(e){
        setNewTrasaction({...newTransactions, [e.target.name]: e.target.value})
    }
    
    return(
        <div>
            <label>Date</label>
            <input type="date"
            name="date"
            placeholder="Date"
            value={newTransactions.date}
            onChange={handleChange}/>

            <label>Description</label>
            <input type="text"
            placeholder="Description"
            name="Description"
            value={newTransactions.description}
            onChange={handleChange}/>

            <label>Category</label>
            <input type="text"
            placeholder="Category"
            name="Category"
            value={newTransactions.category}
            onChange={handleChange}/>

            <label>Amount</label>
            <input type="text"
            placeholder="Amount"
            name="Amount"
            value={newTransactions.amount}
            onChange={handleChange}/>

            <button onClick={() => onAddTransaction(newTransactions)}>Add Transaction</button>

        </div>
    )
    }
export default Form;