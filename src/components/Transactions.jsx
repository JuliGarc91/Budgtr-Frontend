import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {formatDate } from "../utilities/dateFormater"

const Transactions = ({ transactions, setTransactions, setToggleDetails, setEdit, trigger }) => {
    const [show, setShow] = useState({}); // added this to give option to hide / show details of transaction
    const navigate = useNavigate();

    if (transactions.length === 0) return null; // transactions is an array of objects - if no objects then should return null
    const deleteTransaction = (id) => {
        const options = {
            method: "DELETE",
        };
        fetch(`http://localhost:8888/transactions/${id}`, options)
        .then((res) => res.json())
        .then((data)=> setTransactions(data.transactions))
        .catch((error) => {
            console.error('Error deleting transaction:', error.message);
            // Handle error (e.g., display error message to user)
        });
    };

    const handleShowDetails = (id) => {
        setShow(currentState =>({
            ...currentState, [id]: !currentState[id]
        }));
    };

    const navigateToDetails = (id) => {
        setToggleDetails({ show: true, id });
        navigate(`/transactions/${id}`);
    };

    const navigateToEdit = (id) => {
        navigate(`/edit/${id}`);
        setEdit({ show: true, id })
    };

    // const formatDate = (dateISOString) => {
    //     const date = new Date(dateISOString);
    //     return date.toLocaleDateString();
    // }

    // so user can see most recent transactions entered or modified
    const reversedTransactions = [...transactions].reverse();

  return (
    <section className="transactions">
        
        {reversedTransactions.map(({ id, itemName, amount, costPerItemInDollars, date, from, category })=>
        (
        <div key={id}>
            <h3>💸 {itemName} - price: ${costPerItemInDollars}</h3>
            {show[id] && (
            <ul>
                <li>
                    Total Cost: {(amount*costPerItemInDollars).toFixed(2)}
                </li>
                <li>Date of Transaction: {formatDate(date)}</li>
                <li>Store: {from}</li>
                <li>Category: {category}</li>
            </ul>
            )}
        <div className="btn-div">
            <button onClick={()=>handleShowDetails(id)}>
                {show[id] ? ' Hide Details ' : ' Show Details '}
            </button>
            <button onClick={() => navigateToDetails(id)}>
                 Go To Details 
            </button>
            <button onClick={()=> navigateToEdit(id)}>
                 Edit Transaction 
            </button>
            <button onClick={()=>deleteTransaction(id)}className="delete-btn">
                 Delete 
            </button>
        </div>
        </div>
        ))}
    </section>
  )
}

export default Transactions;

/*
keys in data look like this:
    {
        id: 4,
        itemName: 'Blue Yarn',
        amount: 3,
        costPerItemInDollars: 4,
        date: 'January 10 2024',
        from: "Arts and Crafts Store",
        category: "textiles",
    }
*/