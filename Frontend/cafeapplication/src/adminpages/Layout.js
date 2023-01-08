import React from 'react'
import { useNavigate } from 'react-router-dom';

import "../styles/AdminHome.css";
import toast from '../components/toast';


export default function Layout(props) {
    const navigate=useNavigate();
    const redir=(str)=>{
        navigate(str);
    }

    const logout=()=>{
        props.clearInt();
        localStorage.removeItem("isLogged")
        localStorage.removeItem("token");
        toast("successfully logged out");
        navigate("/");
    }
  return (
    <>
    <div className='container d-flex justify-content-around my-1'>
        <button type="button" className="btn btn-danger" onClick={()=>{
            redir("/admin/home")
        }}>Get All Orders</button>
        <button type="button" className="btn btn-danger" onClick={()=>{
           redir("/admin/orders")
        }}>Get Today's Orders</button>
        <button type="button" className="btn btn-danger" onClick={()=>{
            props.clearInt();
            redir("/admin/profile")
        }}>My Profile</button>
        
        <button type="button" className="btn btn-danger" onClick={logout}>Logout</button>
    </div>
    {/* <AdminOrders /> */}
    </>
  )
}
