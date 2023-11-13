import React, { useState } from "react";

function Form({ onAddTransaction }) {
  const [newTransaction, setNewTransaction] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  });

  function handleChange(e) {
    setNewTransaction({ ...newTransaction, [e.target.name]: e.target.value });
  }

  function handleClick() {
    // Validate the input fields before adding a transaction
    if (
      newTransaction.date &&
      newTransaction.description &&
      newTransaction.category &&
      newTransaction.amount
    ) {
      onAddTransaction(newTransaction);
      setNewTransaction({
        date: "",
        description: "",
        category: "",
        amount: "",
      });
    } else {
      alert("Please fill in all fields");
    }
  }

  return (
    <div>
      <label>Date</label>
      <input
        type="date"
        name="date"
        placeholder="Date"
        value={newTransaction.date}
        onChange={handleChange}
      />

      <label>Description</label>
      <input
        type="text"
        placeholder="Description"
        name="description"
        value={newTransaction.description}
        onChange={handleChange}
      />

      <label>Category</label>
      <input
        type="text"
        placeholder="Category"
        name="category"
        value={newTransaction.category}
        onChange={handleChange}
      />

      <label>Amount</label>
      <input
        type="text"
        placeholder="Amount"
        name="amount"
        value={newTransaction.amount}
        onChange={handleChange}
      />

      <button onClick={handleClick}>Add Transaction</button>
    </div>
  );
}

export default Form;
