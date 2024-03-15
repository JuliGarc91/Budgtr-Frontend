import { Link, useLocation } from "react-router-dom";
import Header from "./Header";

const NavBar = () => {
  const location = useLocation();

  // Check if the current path matches '/edit/:id'
  const isEditPath = location.pathname.startsWith('/edit/');
  return (
    <>
    {/* <Header /> */}
    <nav>
      <h3>
        <Link to="/">Home </Link>
        {!isEditPath && (
          <Link to="/new">
            | Add New Transaction Form&nbsp;
          </Link>
        )}
        <Link to="/transactions">
          | View All Transactions 
        </Link>
      </h3>
    </nav>
    </>
  )
}

export default NavBar;