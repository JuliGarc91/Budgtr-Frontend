import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TransactionDetails = ({ toggleDetails }) => {
    const [transaction, setTransaction]= useState(null);
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:8888/transactions/${id}`)
                .then(res => res.json())
                .then(data => {
                    setTransaction(data);
                })
                .catch(error => console.error('Error fetching transaction:', error));
        }
    }, [toggleDetails.id]);    

    if (!transaction) return null;

  return (
    <section className="details">
        <h3>💸 {transaction.itemName} - price: ${transaction.costPerItemInDollars}</h3>
            <ul>
                <li>
                    <strong>Total Cost:</strong> ${(transaction.amount* transaction.costPerItemInDollars).toFixed(2)}
                </li>
                <li><strong>Date of Transaction: </strong>{transaction.date}</li>
                <li><strong>Store:</strong> {transaction.from}</li>
                <li><strong>Category:</strong> {transaction.category}</li>
            </ul>
    </section>
  )
}

export default TransactionDetails;