import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
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
      <Routes>
        {/* index */}
        <Route path="/transactions" element={<Transactions transactions={transactions} setTransactions={setTransactions}/>} />
        {/* show one */}
        <Route path="/transactions/:id" element={toggleDetails.show && <TransactionDetails toggleDetails={toggleDetails}/>} />
      </Routes>
    </section>
  )
}

export default App
