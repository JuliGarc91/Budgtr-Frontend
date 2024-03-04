import { useState } from "react";

const Transactions = ({ transactions, setTransactions }) => {
    if (transactions.length === 0) return null; // transactions is an array of objects - if no objects then should return null
  return (
    <section>
        <h1>Transactions Index</h1>
        {transactions.map(({ id, itemName, amount, costPerItemInDollars, date, from, category })=>
        (
        <div key={id}>
            <h3>{itemName} - price: ${costPerItemInDollars.toFixed(2)}</h3>
            Total Cost: {(amount*costPerItemInDollars).toFixed(2)}
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