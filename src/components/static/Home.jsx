import { useState } from "react";

const Home = ({transactions}) => {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  const totalSpent = transactions.reduce((acc, curr) => {
    return acc + (curr.costPerItemInDollars * curr.amount)
}, 0);
  return (
    <section>
      Home
        <h1>Transactions Index</h1>
          <label htmlFor="funds">
            <h2>Total Funds: $
            <input
              type="number"
              name="funds"
              id="funds"
            /></h2>
          </label>
        <h2>Total Amount Spent: ${totalSpent}</h2>
        <h2>Total Funds Left: $</h2>
    </section>
  )
}

export default Home