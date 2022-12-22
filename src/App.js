import "./App.css";
import React from 'react';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Place from "./userpages/Place";
// import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Protected from "./components/Protected";

import Layout from "./adminpages/Layout";
import AdminOrders from "./adminpages/AdminOrders";
import Profile from "./adminpages/Profile";
import AdminOrdersByDate from "./adminpages/AdminOrdersByDate";



function App() {
  const [isLoggedIn,setLoggedIn]=useState(localStorage.getItem("isLogged")===null?false:true);

  const toggle=(value)=>{
    setLoggedIn(value);
  }
  console.log(isLoggedIn);
  return (
    <div>
      
      
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar title="Cafe Application"/>}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login toggle={toggle}/>} />
            <Route path="user/order" element={<Place />} /> 
            <Route path="admin/" element={<Protected isLoggedIn={isLoggedIn}>
                <Layout />
               
              </Protected>} /> 
               
            <Route path="/admin/home" element={<Protected isLoggedIn={isLoggedIn}>
                <Layout />
                <AdminOrders  />
               
              </Protected>} />
            <Route path="/admin/orders" element={<Protected isLoggedIn={isLoggedIn}>
                <Layout />
                <AdminOrdersByDate />
               
            </Protected>} />
              <Route path="/admin/profile" element={<Protected isLoggedIn={isLoggedIn}>
                <Layout />
                <Profile />
               
              </Protected>} />
            
          </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
