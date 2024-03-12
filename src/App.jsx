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
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    console.log('useEffect fetch transactions');
    fetch("http://localhost:8888/transactions/")
      .then((res) => res.json())
      .then((data) => setTransactions(data.transactions));
  },[trigger]);
  
  return (
    <section>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home transactions={transactions}/>}/>
        {/* index route */}
        <Route path="/transactions" element=
          {<section className='transactions-section'>
          {/* Show All (Index) */}
          <Transactions transactions={transactions} setTransactions={setTransactions} setToggleDetails={setToggleDetails} edit={edit} setEdit={setEdit} trigger={trigger}/>
          {/* Form on same view as index */}
            {/* <div>
              {!toggleForm && 
              <button onClick={() => setToggleForm(true)}>
                Add New Transaction
              </button>}
              { (edit.show || toggleForm) && <TransactionForm setTransactions={setTransactions} setToggleForm={setToggleForm} edit={edit} setEdit={setEdit} transactions={transactions} setTrigger={setTrigger} trigger={trigger} /> }
            </div> */}
          <Totals transactions={transactions}/>
          </section>
      }/>
        
        {/* Show One Route*/}
        <Route path="/transactions/:id" element={<TransactionDetails toggleDetails={toggleDetails}/>}/>
        {/* Edit One Route */}
        <Route path="/edit/:id" element={<TransactionForm setTransactions={setTransactions} setToggleForm={setToggleForm} edit={edit} setEdit={setEdit} transactions={transactions} setTrigger={setTrigger} trigger={trigger}/>}/>
        {/* Create New Route */}
        <Route path="/new" element={<TransactionForm setTransactions={setTransactions} setToggleForm={setToggleForm} edit={edit} setEdit={setEdit} transactions={transactions} setTrigger={setTrigger} trigger={trigger}/>}/>
      </Routes>
    </section>
  )
}

export default App
