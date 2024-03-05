import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Transactions from './components/Transactions';
import TransactionDetails from './components/TransactionDetails';
import EditTransaction from './components/EditTransaction';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [toggleDetails, setToggleDetails] = useState({
    show: false,
    id: null
  });
  const [toggleForm, setToggleForm] = useState({
    show: false,
    id: null
  })
  const [edit, setEdit] = useState({ show: false, id: null })

  useEffect(() => {
    fetch("http://localhost:8888/transactions/")
      .then((res) => res.json())
      .then((data) => setTransactions(data.transactions));
  },[])

  return (
    <section>
      <Routes>
        {/* index */}
        <Route path="/transactions" element={<Transactions transactions={transactions} setTransactions={setTransactions} setToggleDetails={setToggleDetails}/>}/>
        {/* show one */}
        <Route path="/transactions/:id" element={<TransactionDetails toggleDetails={toggleDetails}/>}/>
        {/* edit one */}
        <Route path="edit/transactions/:id" element={toggleForm && <EditTransaction setTransactions={setTransactions} setToggleForm={setToggleForm}/>}/>
      </Routes>
    </section>
  )
}

export default App
