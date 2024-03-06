import { useState } from "react";
import Totals from "../Totals";

const Home = ({ transactions }) => {
  // const [inputValue, setInputValue] = useState('');
  // const [result, setResult] = useState('');

  // const totalSpent = transactions.reduce((acc, curr) => {
  //   return acc + (curr.costPerItemInDollars * curr.amount)
  // }, 0);
  return (
    <section>
      Home
      <Totals transactions={transactions}/>
    </section>
  )
}

export default Home