import { Link, useLocation } from "react-router-dom";
import Header from "./Header";

const NavBar = () => {
  const location = useLocation();

  // Check if the current path matches '/edit/:id'
  const isEditPath = location.pathname.startsWith('/edit/');
  return (
    <>
    <Header />
    <nav>
        <Link to="/">Home </Link>
        <Link to="/transactions">| View All Transactions </Link>
        {!isEditPath && (
          <Link to="/new">| New Transaction Form</Link>
        )}
    </nav>
    </>
  )
}

export default NavBar;