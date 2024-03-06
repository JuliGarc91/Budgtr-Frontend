import { Link } from "react-router-dom";
import Header from "./Header";

const NavBar = () => {
  return (
    <>
    <Header />
    <nav>
        <Link to="/">Home |</Link>
        <Link to="/transactions"> View All Transactions |</Link>
        <Link to="/new/transactions/"> Navigate to Add New Transaction Form</Link>
    </nav>
    </>
  )
}

export default NavBar;