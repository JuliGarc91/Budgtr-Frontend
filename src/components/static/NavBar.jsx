import { Link } from "react-router-dom"
import Home from "./Home"

const NavBar = () => {
  return (
    <>
    <header>
      <h1>Budgtr</h1>
    </header>
    <nav>
        <Link to="/">Home |</Link>
        <Link to="/transactions"> View All Transactions |</Link>
        <Link to="/new/transactions/"> Navigate to Transaction Form</Link>
    </nav>
    </>
  )
}

export default NavBar;