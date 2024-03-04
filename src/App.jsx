import { useState, useEffect } from 'react';
import './App.css'
import Transactions from './components/Transactions';

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8888/transactions/")
      .then((res) => res.json())
      .then((data) => setTransactions(data.transactions));
  },[])

  return (
    <section>
      <Transactions transactions={transactions} setTransactions={setTransactions}/>
    </section>
  )
}

export default App
