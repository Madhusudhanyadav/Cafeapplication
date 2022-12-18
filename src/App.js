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


function App() {
  
  return (
    <div>
      
      
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar title="Cafe Application"/>}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="user/order" element={<Place />} /> 
          </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
