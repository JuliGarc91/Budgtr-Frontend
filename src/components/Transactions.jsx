import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_BASE_API_URL;
const Transactions = ({ transactions, setTransactions, setToggleDetails, setEdit }) => {
    const [show, setShow] = useState({}); // added this to give option to hide / show details of transaction
    const navigate = useNavigate();

    if (!transactions || transactions.length === 0) return null; // transactions is an array of objects - if no objects then should return null
    const deleteTransaction = (id) => {
        const options = {
            method: "DELETE",
        };
        fetch(`${API}/transactions/${id}`, options)
        .then((res) => res.json())
        .then((data)=> setTransactions(data.transactions))
        .catch((error) => {
            console.error('Error deleting transaction:', error.message);
        });
    };

    const handleShowDetails = (id) => {
        setShow(currentState =>({
            ...currentState, [id]: !currentState[id]
        }));
    };

    const navigateToDetails = (id) => {
        setToggleDetails({ show: true, id });
        navigate(`/transactions/${id}`);
    };

    const navigateToEdit = (id) => {
        navigate(`/edit/${id}`);
        setEdit({ show: true, id })
    };

    const formatDate = (dateString) => {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const [year, month, day] = dateString.split('-');
        return `${months[parseInt(month) - 1]} ${parseInt(day)}, ${year}`;
    };
    
    
    const reversedTransactions = [...transactions].reverse();

  return (
    <section className="transactions">
        
        {reversedTransactions.map(({ id, itemName, amount, costPerItemInDollars, date, from, category })=>
        (
        <div key={id}>
            <h3>💸 {itemName} - price: ${costPerItemInDollars}</h3>
            {show[id] && (
            <ul>
                <li>
                    <strong>Total Cost:</strong> ${(amount*costPerItemInDollars).toFixed(2)}
                </li>
                <li><strong>Date of Transaction:</strong> {formatDate(date)}</li>
                <li><strong>Store:</strong> {from}</li>
                <li><strong>Category:</strong> {category}</li>
            </ul>
            )}
        <div className="btn-div">
            <button onClick={()=>handleShowDetails(id)}>
                {show[id] ? ' Hide Details ' : ' Show Details '}
            </button>
            <button onClick={() => navigateToDetails(id)}>
                 Go To Details 
            </button>
            <button onClick={()=> navigateToEdit(id)}>
                 Edit Transaction 
            </button>
            <button onClick={()=>deleteTransaction(id)}className="delete-btn">
                 Delete 
            </button>
        </div>
        </div>
        ))}
    </section>
  )
}

export default Transactions;

/*
keys in data look like this:
    {
        id: 4,
        itemName: 'Blue Yarn',
        amount: 3,
        costPerItemInDollars: 4,
        date: new Date('2024-01-10'),
        from: "Arts and Crafts Store",
        category: "textiles",
    }
*/