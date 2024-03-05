import { useState } from "react";

const Transactions = ({ transactions, setTransactions }) => {
    const [show, setShow] = useState({}); // added this to give option to hide / show details of transaction
    if (transactions.length === 0) return null; // transactions is an array of objects - if no objects then should return null
    const handleShowDetails = (id) => {
        setShow(currentState =>({
            ...currentState, [id]: !currentState[id]
        }));
    };
  return (
    <section>
        <h1>Transactions Index</h1>
        {transactions.map(({ id, itemName, amount, costPerItemInDollars, date, from, category })=>
        (
        <div key={id}>
            <h3>{itemName} - price: ${costPerItemInDollars.toFixed(2)}</h3>
            {show[id] && (
            <ul>
                <li>
                    Total Cost: {(amount*costPerItemInDollars).toFixed(2)}
                </li>
                <li>Date of Transaction: {date}</li>
                <li>Store: {from}</li>
                <li>Category: {category}</li>
            </ul>
            )}
            <button onClick={()=>handleShowDetails(id)}>{show[id] ? 'Hide Details' : 'Show Details'}</button>
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