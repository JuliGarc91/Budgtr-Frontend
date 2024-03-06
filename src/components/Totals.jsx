import { useState } from "react";

const Totals = ({ transactions }) => {
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState('');
  
    const totalSpent = transactions ? transactions.reduce((acc, curr) => {
      return acc + (curr.costPerItemInDollars * curr.amount)
    }, 0) : 0;

    const handleChange = (event) => {
        const userInput = +(event.target.value);
        const fundsLeft = userInput - totalSpent;

        setInputValue(event.target.value);
        setResult(fundsLeft)
    }
  return (
    <div>
          <label htmlFor="funds">
            <h2>Total Funds: $
            <input
              type="number"
              name="funds"
              id="funds"
              value={inputValue}
              onChange={handleChange}
            /></h2>
          </label>
        <h2>Total Amount Spent: ${totalSpent}</h2>
        <h2 className={result > 100 ? "greenish" : result >= 0 ? "yellowish" : "reddish"}>
            Total Funds Left: ${result}
        </h2>
    </div>
  )
}

export default Totals