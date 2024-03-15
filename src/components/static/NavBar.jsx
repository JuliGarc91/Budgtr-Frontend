import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  // Check if the current path matches '/edit/:id'
  const isEditPath = location.pathname.startsWith('/edit/');
  
  return (
    <nav>
      <h3> 
        <>
          {!isEditPath && (
            <Link to="/">Home </Link>
          )}
          {!isEditPath && (
            <>
              <Link to="/new">
                | Add New Transaction Form&nbsp;
              </Link>
              <Link to="/transactions">
                | View All Transactions 
              </Link>
            </>
          )}
          {isEditPath && (
            <>
            {/* disabled links instead of hiding them (bc of requirement to have navbar links in all views) to prevent folowing bug: if user navigates away from edit form without canceling New Transaction Form doesn't work properly */}
              <a href="#" style={{ pointerEvents: 'none', color: 'gray', textDecoration: 'none' }}>Home </a>
              <a href="#" style={{ pointerEvents: 'none', color: 'gray', textDecoration: 'none' }}>| Add New Transaction Form&nbsp;</a>
              <a href="#" style={{ pointerEvents: 'none', color: 'gray', textDecoration: 'none' }}>| View All Transactions</a>
            </>
          )}
        </> 
      </h3>
    </nav>
  );
};

export default NavBar;
