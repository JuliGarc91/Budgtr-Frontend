import { useState, useEffect } from 'react';
import './App.css'
import Transactions from './components/Transactions';
import TransactionDetails from './components/TransactionDetails';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [toggleDetails, setToggleDetails] = useState({
    show: false,
    id: null
  });

  useEffect(() => {
    fetch("http://localhost:8888/transactions/")
      .then((res) => res.json())
      .then((data) => setTransactions(data.transactions));
  },[])

  return (
    <section>
      <Transactions transactions={transactions} setTransactions={setTransactions}/>
      {toggleDetails.show && <TransactionDetails toggleDetails={toggleDetails}/>}
    </section>
  )
}

export default App
