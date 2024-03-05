import { useEffect, useState } from 'react'
import "../App.css"
import TransactionDetails from './TransactionDetails';

const EditTransaction = ({ setTransactions, setToggleForm }) => {
    const [transaction, setTransaction]=useState({
        itemName: "",
        amount: 0,
        costPerItemInDollars: 0,
        date: "",
        from: "",
        category: "",
    });

  return (
    <section>
      <h2>Edit Transaction:</h2>
      <form>
        <label htmlFor="itemName">
          Item Name:
          <input
            type="text"
            id="itemName"
            name="itemName"
            value={transaction.itemName}
          />
        </label>
        <label htmlFor="amount">
          Quantity:
          <input
            type="number"
            id="amount"
            name="amount"
            value={transaction.amount}
          />
        </label>
        <label htmlFor="costPerItemInDollars">
          Cost: $
          <input
            type="number"
            id="costPerItemInDollars"
            name="costPerItemInDollars"
            value={transaction.costPerItemInDollars}
          />
        </label>
        <label htmlFor="date">
          Date:
        <input
          type="text"
          id="date"
          name="date"
          value={transaction.date}
        />
        </label>
        <label htmlFor="from">
          Store:
          <input
            type="text"
            id="from"
            name="from"
            value={transaction.from}
          />
        </label>
        <label htmlFor="category">
          Category:
          <input
            type="text"
            id="category"
            name="category"
            value={transaction.category}
          />
        </label>
      </form>
    </section>
  )
}

export default EditTransaction