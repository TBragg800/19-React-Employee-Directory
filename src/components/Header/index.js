import React from "react";


function Header() {
return (
  <nav className="navbar navbar-light bg-light">
    <h2>Employee Directory</h2>
    <form className="form-inline">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
    </form>
  </nav>
  )
}

export default Header;