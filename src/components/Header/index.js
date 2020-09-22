import React from "react";


function Header() {
return (
  <nav className="navbar fixed-top navbar-light bg-light">
    <a className="navbar-brand">Employee Directory</a>
    <form className="form-inline">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
    </form>
  </nav>
  )
}

export default Header;