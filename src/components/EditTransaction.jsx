import { useEffect, useState } from 'react'

const EditTransaction = ({ setTransactions, setToggleForm }) => {
    const [transaction, setTransaction]=useState({
        itemName: "",
        amount: 0,
        costPerItemInDollars: 0,
        date: "",
        from: "",
        category: "",
    });

    
  return (
    <section>EditTransaction</section>
  )
}

export default EditTransaction