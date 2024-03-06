import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Transactions from './components/Transactions';
import TransactionDetails from './components/TransactionDetails';
import TransactionForm from './components/TransactionForm';
import NavBar from './components/static/NavBar';
import Home from './components/static/Home';
import Totals from './components/Totals';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [toggleDetails, setToggleDetails] = useState({
    show: false,
    id: null
  });
  const [toggleForm, setToggleForm] = useState({
    show: false,
    id: null
  });
  const [edit, setEdit] = useState({ show: false, id: null });

  useEffect(() => {
    fetch("http://localhost:8888/transactions/")
      .then((res) => res.json())
      .then((data) => setTransactions(data.transactions));
  },[]);
  
  return (
    <section>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home transactions={transactions}/>}/>
        {/* index route */}
        <Route path="/transactions" element=
          {<section>
          {/* Form on same view as index */}
          <Totals transactions={transactions}/>
            <div>
              {!toggleForm && 
              <button onClick={() => setToggleForm(true)}>
                Add New Transaction
              </button>}
              { (edit.show || toggleForm) && <TransactionForm setTransactions={setTransactions} setToggleForm={setToggleForm} edit={edit} setEdit={setEdit} /> }
            </div>

            {/* Show All (Index) */}
            <Transactions transactions={transactions} setTransactions={setTransactions} setToggleDetails={setToggleDetails} edit={edit} setEdit={setEdit}/>
          </section>
      }/>
        
        {/* Show One Route*/}
        <Route path="/transactions/:id" element={<TransactionDetails toggleDetails={toggleDetails}/>}/>
        {/* Edit One Route */}
        <Route path="edit/transactions/:id" element={<TransactionForm setTransactions={setTransactions} setToggleForm={setToggleForm} edit={edit}       setEdit={setEdit}/>}/>
        {/* Create New Route */}
        <Route path="new/transactions/" element={<TransactionForm setTransactions={setTransactions} setToggleForm={setToggleForm} edit={edit} setEdit={setEdit}/>}/>
      </Routes>
    </section>
  )
}

export default App
