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
    <div className="totals">
          <label htmlFor="funds">
            <h3>💰 Total Funds: $
              <input
                type="number"
                name="funds"
                id="funds"
                value={inputValue}
                onChange={handleChange}
              />
            </h3>
          </label>
        <h3>Total Amount Spent: ${totalSpent}</h3>
        <h3 className={result > 100 ? "greenish" : result >= 0 ? "yellowish" : "reddish"}>
        🐷 Total Funds Left: ${result}
        </h3>
    </div>
  )
}

export default Totals