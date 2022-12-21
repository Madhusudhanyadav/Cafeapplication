import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import "../styles/Navbar.css";

export default function Navbar(props) {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor: "rgb(251, 226, 0)"}}>
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-3">
              <Link to={"/"} className="icon icon-fill"><i className="fa fa-home"><span className='tooltiptext'>Home</span></i></Link>
              </li>
              <li className="nav-item mx-3">
              <Link to={"/about"} className="icon icon-enter"><i className="fa fa-user"><span className='tooltiptext'>About</span></i></Link>
              </li>
              <li className="nav-item mx-3">
              <Link to="/login" className="icon icon-collapse"><i className="fa fa-sign-in"><span className='tooltiptext'>Login</span></i></Link>
              </li>
              <li className="nav-item mx-3">
              <Link to={"/contact"} className="icon icon-rotate"><i className="fa fa-phone"><span className='tooltiptext'>Contact</span></i></Link>
              </li>

            </ul>
            
          </div>
        </div>
      </nav>
      <Outlet />
      </>
  )
}
