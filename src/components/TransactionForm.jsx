import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import "../App.css"

const TransactionForm = ({ setTransactions, edit, setEdit, transactions, trigger, setTrigger }) => {

  const navigate = useNavigate();
  const {id} = useParams();

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
    };
    
    const handleSubmit = (event) => {
      event.preventDefault();
    
      if (edit.id) {
        const options = {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(transaction),
        };
        fetch(`http://localhost:8888/transactions/${edit.id}`, options)
          .then((res) => res.json())
          .then((data) => {
            setTransaction(data.transactions);
            setEdit({ id: null });
            setTrigger(!trigger);
            // navigate(`/transactions/${id}`)
          })
          .then(() => navigate(`/transactions/${id}`))
          .catch(error => console.error('Error:', error));
      } else {
        const options = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(transaction),
        };
        fetch('http://localhost:8888/transactions/', options)
          .then((res) => res.json())
          .then((data) => {
            setTransaction(data.transactions);
            setTrigger(!trigger); 
          })
          .then(() => navigate(`/transactions`))
          .catch(error => console.error('Error:', error));
      }
    };
    
    const handleCancel = () => {
      setEdit({ show:false, id: null });
    };

    useEffect(() => {
      if (edit.show && edit.id) {
          fetch(`http://localhost:8888/transactions/${edit.id}`)
              .then((res) => res.json())
              .then((data) => {
                  setTransaction(data);
              })
              .catch(error => console.error('Error:', error));
      }
  }, [edit.show, edit.id]);
  
  return (
    <section>
      <h3>Transaction Form:</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="itemName">
          Item Name:
          <input
            type="text"
            id="itemName"
            name="itemName"
            value={transaction.itemName}
            onChange={handleChange}
            required
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
            required
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
            required
          />
        </label>
        <label htmlFor="date">
          Date:
        <input
          type="date"
          id="date"
          name="date"
          value={transaction.date}
          onChange={handleChange}
          required
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
            required
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
            required
          />
        </label>
        <button type="submit">Submit</button>
        <button onClick={handleCancel}>Cancel</button>
      </form>
    </section>
  )
}

export default TransactionForm;