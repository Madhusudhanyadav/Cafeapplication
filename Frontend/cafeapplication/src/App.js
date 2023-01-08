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
import Bill from "./userpages/Bill";



function App() {
  const [isLoggedIn,setLoggedIn]=useState(localStorage.getItem("isLogged")===null?false:true);
  const [orderId,setOrderId]=useState(152);
  const [inter,setInter]=useState(0); // Admin Order set interval helper state
  const [inter2,setInter2] = useState(0); // Admin Order by date set interval helper state
  

  const toggle=(value)=>{
    setLoggedIn(value);
  }

  const setInt = (id)=>{
    setInter(id);
  }

  const setInt2 = (id) =>{
    setInter2(id);
  }

  const clearIntById = (id) => {
    if(id === 1){
      if(inter>0){
      
        clearInterval(inter); 
        setInter(-1);
        console.log(inter,inter2);
        
      }
    }
    else{
      if(inter2 > 0){
        clearInterval(inter2);
        setInter2(-1);
      console.log(inter,inter2);

      }
    }
  }


  const clearInt = () =>{
    console.log(inter,inter2);
    if(inter>0){
      
      clearInterval(inter); 
      setInter(-1);
    }
    if(inter2 > 0){
      clearInterval(inter2);
      setInt2(-1);
    }
    
  }

  console.log(isLoggedIn);
  
  return (
    <div>
      
      
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar title="Cafe Application" clearInt={clearInt}/> }>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login toggle={toggle}/>} />
            <Route path="user/order" element={<Place setOrderId={setOrderId}/>} /> 
            <Route path="admin/" element={<Protected isLoggedIn={isLoggedIn}>
                <Layout clearInt={clearInt}/>
               
              </Protected>} /> 
               
            <Route path="/admin/home" element={<Protected isLoggedIn={isLoggedIn} >
                <Layout clearInt={clearInt}/>
                <AdminOrders setInt={setInt} clearIntById={clearIntById}/>
               
              </Protected>} />
            <Route path="/admin/orders" element={<Protected isLoggedIn={isLoggedIn}>
                <Layout clearInt={clearInt}/>
                <AdminOrdersByDate setInt2={setInt2} clearIntById={clearIntById}/>
               
            </Protected>} />
              <Route path="/admin/profile" element={<Protected isLoggedIn={isLoggedIn}>
                <Layout clearInt={clearInt}/>
                <Profile clearInt={clearInt}/>
               
              </Protected>} />
            
            <Route path="/user/bill" element={<Bill orderId={orderId} />} />
            
          </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
