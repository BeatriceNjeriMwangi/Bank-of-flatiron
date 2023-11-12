import React, {useState} from "react";
//importing react

function Form({onAddTransaction, transactionCount}){
    const [newTransactions, setNewTrasaction] = useState({
        date: "",
        description: "",
        category: "",
        amount: "",
        
    })
    function handleChange(e){//handle change on the form
        setNewTrasaction({...newTransactions, [e.target.name]: e.target.value})
    }
    //adding a new trasaction
    function handleClick(){
        onAddTransaction(newTransactions)
        setNewTrasaction({
            date: "",
            description: "",
            category: "",
            amount: "",
        })
    }
    return(
        <div>
            <label>Date</label>
            <input type="date"
            name="date"
            placeholder="Date"
            value={newTransactions.date}
            //onChange={}
            />

            <label>Description</label>
            <input type="text"
            placeholder="Description"
            name="Description"
            value={newTransactions.description}
            //onChange={}
            />

            <label>Category</label>
            <input type="text"
            placeholder="Category"
            name="Category"
            value={newTransactions.category}
            //onChange={}
            />

            <label>Amount</label>
            <input type="text"
            placeholder="Amount"
            name="Amount"
            value={newTransactions.amount}
            //onChange={}
            />

            <button onClick={() => onAddTransaction(newTransactions)}>Add Transaction</button>

        </div>
    )
    }
export default Form;