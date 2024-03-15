import { useEffect, useState } from "react";
import FormatDate from "../utilities/FormatDate";

const TransactionDetails = ({ toggleDetails }) => {
    const [transaction, setTransaction]= useState(null);

    useEffect(() => {
        if (toggleDetails.id) {
            fetch(`http://localhost:8888/transactions/${toggleDetails.id}`)
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
                    Total Cost: ${(transaction.amount* transaction.costPerItemInDollars)}
                </li>
                <li>Date of Transaction: {FormatDate(transaction.date)}</li>
                <li>Store: {transaction.from}</li>
                <li>Category: {transaction.category}</li>
            </ul>
    </section>
  )
}

export default TransactionDetails;