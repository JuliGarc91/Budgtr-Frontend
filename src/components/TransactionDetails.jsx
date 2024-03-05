import { useEffect, useState } from "react";

const TransactionDetails = ({ toggleDetails }) => {
    const [transaction, setTransaction]= useState();

    useEffect(() => {
        fetch(`http://localhost:8888/transactions/${toggleDetails.id}`)
            .then(res => res.json())
            .then(data => {
                setTransaction(data)
            })
            .catch(error => console.error('Error fetching transaction:', error));
    }, [toggleDetails.id])// add toggle single trans id in dependency with useState in app.jsx

    if (!transaction) return null;
  return (
    <section>
        <h3>{transaction.itemName} - price: ${transaction.costPerItemInDollars.toFixed(2)}</h3>
            <ul>
                <li>
                    Total Cost: {(transaction.amount* transaction.costPerItemInDollars).toFixed(2)}
                </li>
                <li>Date of Transaction: {transaction.date}</li>
                <li>Store: {transaction.from}</li>
                <li>Category: {transaction.category}</li>
            </ul>
    </section>
  )
}

export default TransactionDetails