import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = ()=>{

    return (
        <>
  {/* Navbar */}
  <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
    {/* Container wrapper */}
    <div className="container-fluid">
      {/* Toggle button */}
      <button
        data-mdb-collapse-init=""
        className="navbar-toggler"
        type="button"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars" />
      </button>
      {/* Collapsible wrapper */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {/* Left links */}
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <NavLink className="nav-link" to="/allitempage">
              AllItem
            </NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link" to="/allstaffpage">
              Allstaff
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/addstaffpage">
              Addstaff
            </NavLink>
          </li>
        </ul>
        {/* Left links */}
      </div>
      {/* Collapsible wrapper */}
      {/* Right elements */}
    </div>
    {/* Container wrapper */}
  </nav>
  {/* Navbar */}
</>

    )
}

export default Navbar