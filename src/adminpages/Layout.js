import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../styles/AdminHome.css";


export default function Layout() {
    const navigate=useNavigate();
    const redir=(str)=>{
        navigate(str);
    }

    const logout=()=>{
        localStorage.removeItem("item")
        navigate("/");
    }
  return (
    <>
    <div className='container d-flex justify-content-around my-1'>
        <button type="button" className="btn btn-danger" onClick={()=>{
            redir("/admin/home")
        }}>Orders</button>
        <button type="button" className="btn btn-danger">My Profile</button>
        <button type="button" className="btn btn-danger">Manage</button>
        <button type="button" className="btn btn-danger" onClick={logout}>Logout</button>
    </div>
    {/* <AdminOrders /> */}
    </>
  )
}
