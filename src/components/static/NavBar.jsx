import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav>
        <Link to="/">Home |</Link>
        <Link to="/transactions">View All Transactions |</Link>
        <Link to="/new/transactions/"> Navigate to Transaction Form</Link>
    </nav>
  )
}

export default NavBar