import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import "../App.css"
import TransactionDetails from './TransactionDetails';

const TransactionForm = ({ setTransactions, setToggleForm, edit, setEdit }) => {
    const [transaction, setTransaction]=useState({
        itemName: "",
        amount: 0,
        costPerItemInDollars: 0,
        date: "",
        from: "",
        category: "",
    });

    const handleChange = (event) => {
      setTransaction({ ...transaction, [event.target.id]: event.target.value })
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      if (edit.show) {
        const options = {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(transaction),
        };
        fetch(`http://localhost:8888/transactions/${edit.id}`, options)
          .then((res) => res.json())
          .then((data)=> setTransaction(data.transactions))
          .then(() => setToggleForm(false))
          .then(() => setEdit({ show:false, id: null }));
      } else {
        const options = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(transaction),
        };
        fetch('http://localhost:8888/transactions/', options)
          .then((res) => res.json())
          .then((data) => setTransactions(data.transactions))
          .then(() => setToggleForm(false))
          .then(() => setEdit({ show: false, id: null }));
      }
    };

    const handleCancel = () => {
      setEdit({ show:false, id: null });
      setToggleForm(false);
    }

    useEffect(()=> {
      if (edit.show) {
        fetch(`http://localhost:8888/transactions/${edit.id}`)
        .then((res) => res.json())
        .then((data)=> setTransaction(data));
      }
    }, [edit.id]);

  return (
    <section >
      <h2>Transaction Form:</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="itemName">
          Item Name:
          <input
            type="text"
            id="itemName"
            name="itemName"
            value={transaction.itemName}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="amount">
          Quantity:
          <input
            type="number"
            id="amount"
            name="amount"
            value={transaction.amount}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="costPerItemInDollars">
          Cost: $
          <input
            type="number"
            id="costPerItemInDollars"
            name="costPerItemInDollars"
            value={transaction.costPerItemInDollars}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="date">
          Date:
        <input
          type="text"
          id="date"
          name="date"
          value={transaction.date}
          onChange={handleChange}
        />
        </label>
        <label htmlFor="from">
          Store:
          <input
            type="text"
            id="from"
            name="from"
            value={transaction.from}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="category">
          Category:
          <input
            type="text"
            id="category"
            name="category"
            value={transaction.category}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
        <button onClick={handleCancel}>Cancel</button>
      </form>
    </section>
  )
}

export default TransactionForm;