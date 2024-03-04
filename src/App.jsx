import { useState, useEffect } from 'react';

import Transactions from './components/Transactions';
import './App.css'

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8888/transactions/")
      .then((res) => res.json())
      .then((data) => setTransactions(data.transactions));
  },[])

  return (
    <section>
      {console.log(transactions)}
    </section>
  )
}

export default App
