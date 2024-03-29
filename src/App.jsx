import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Transactions from './components/Transactions';
import TransactionDetails from './components/TransactionDetails';
import TransactionForm from './components/TransactionForm';
import NavBar from './components/static/NavBar';
import Home from './components/static/Home';
import Totals from './components/Totals';
import Header from './components/static/Header';
import Footer from './components/static/Footer';
import NotFound from './components/static/NotFound';


const API = import.meta.env.VITE_BASE_API_URL;


function App() {
  const [transactions, setTransactions] = useState([]);
  const [toggleDetails, setToggleDetails] = useState({
    show: false,
    id: null
  });
  const [edit, setEdit] = useState({ show: false, id: null });
  // const [trigger, setTrigger] = useState(false);

  // useEffect(() => {
  //   console.log('useEffect fetch transactions');
  //   fetch(`${API}/transactions/`)
  //     .then((res) => res.json())
  //     .then((data) => setTransactions(data.transactions));
  // },[trigger]);
  useEffect(() => {
    console.log('useEffect fetch transactions');
    fetch(`${API}/transactions/`)
      .then((res) => res.json())
      .then((data) => {
        setTransactions(data.transactions); // Update transactions directly
      })
      .catch(error => console.error('Error fetching transactions:', error));
  }, [setTransactions]);
  
  
  return (
    <>
    <Header />
    <main>
      <NavBar />
      <Routes>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/" element={<Home transactions={transactions}/>}/>
        <Route path="/transactions" element=
          {<section className='transactions-section'>
          {/* Show All (Index) */}
            <Totals transactions={transactions}/>
            <Transactions transactions={transactions} setTransactions={setTransactions} setToggleDetails={setToggleDetails} edit={edit} setEdit={setEdit}/>
          </section>
        }/>
        {/* Show One Route*/}
        <Route path="/transactions/:id" element={<TransactionDetails toggleDetails={toggleDetails}/>}/>
        {/* Edit One Route */}
        <Route path="/edit/:id" element={
        <section className='transaction-form'>
          <h1>&nbsp;💳 Edit Transaction 💳&nbsp;</h1>
          <TransactionForm setTransactions={setTransactions} edit={edit} setEdit={setEdit} transactions={transactions} />
        </section>
        }
        />
        {/* Create New Route */}
        <Route path="/new" element={
        <section className='transaction-form'>
          <h1>💳 Add New Transaction</h1>
          <TransactionForm setTransactions={setTransactions} edit={edit} setEdit={setEdit} transactions={transactions} />
        </section>
        }
        />
      </Routes>
    </main>
    <Footer />
    </>
  )
}

export default App;