import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import "../styles/Navbar.css";

export default function Navbar(props) {
  
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor: "rgb(251, 226, 0)"}}>
        <div className="container-fluid">
          <Link onClick={()=>{props.clearInt()}} className="navbar-brand" to={"/"}>{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-3">
              <Link to={"/"} onClick={()=>{props.clearInt()}} className="icon icon-fill"><i className="fa fa-home" style={{color:"black"}} data-bs-toggle="tooltip" data-bs-placement="bottom" title="Home"></i></Link>
              </li>
              <li className="nav-item mx-3">
              <Link to={"/about"} onClick={()=>{props.clearInt()}} className="icon icon-enter"><i className="fa fa-user" style={{color:"black"}} data-bs-toggle="tooltip" data-bs-placement="bottom" title="About"></i></Link>
              </li>
              <li className="nav-item mx-3">
              <Link to="/login" onClick={()=>{props.clearInt()}} className="icon icon-collapse"><i className="fa fa-sign-in" style={{color:"black"}}  data-bs-toggle="tooltip" data-bs-placement="bottom" title="Login"></i></Link>
              </li>
              <li className="nav-item mx-3">
              <Link to={"/contact"} onClick={()=>{props.clearInt()}} className="icon icon-rotate"><i className="fa fa-phone" style={{color:"black"}} data-bs-toggle="tooltip" data-bs-placement="bottom" title="Contact"></i></Link>
              </li>

            </ul>
            
          </div>
        </div>
      </nav>
      <Outlet />
      </>
  )
}
