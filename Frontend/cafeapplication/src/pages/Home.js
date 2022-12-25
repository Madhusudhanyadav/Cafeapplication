import axios from 'axios';
import React from 'react';
import  { useState,useEffect } from 'react';
import "../styles/Home.css";
// import TypewriterComponent from 'typewriter-effect';
import {  Link, Outlet } from 'react-router-dom';


export default function Home() {
    const [imageList,setImageList]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8080/home/get").then((response)=>{
            console.log(response.data);
            setImageList(response.data);
        })
    },[]);

  
  return (
    <>

{/* <div className="typeWriter">
<TypewriterComponent
  
  onInit={(typewriter)=> {

  typewriter
   
  .typeString("GeeksForGeeks")
  
  .pauseFor()
  .deleteAll()
  .typeString("Welcomes You")
  .start();
  }}

  
  />
  </div> */}

      
    <div className="container d-flex justify-content-center mycontainer">
        
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={3} aria-label="Slide 3" />
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={4} aria-label="Slide 3" />
      </div>
      <div className="carousel-inner my-3">
        {
          imageList.map((element)=>{
            return (element.id===1?<div className="carousel-item active" key={element.id}>
                      <img src={element.url} style={{width:"30rem",height:"20rem"}}  className="d-block w-100" alt="..." />
                  </div>:<div className="carousel-item " key={element.id}>
                      <img src={element.url} style={{width:"30rem",height:"20rem"}} className="d-block w-100" alt="..." />
                  </div>);
          
          })
        }
        {/* <div className="carousel-item active">
          <img src="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000" style={{height:"30rem",width:"30rem"}} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg?w=2000" style={{height:"30rem",width:"30rem"}} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000" style={{height:"30rem",width:"30rem"}} className="d-block w-100" alt="..." />
        </div> */}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    
    </div>

    
  </div>

    <div className="container d-flex justify-content-around my-3">
      <Link to={"/user/order"} ><button type="button" className="btn btn-primary">Place Order</button></Link>
      {/* <button type="button" className="btn btn-primary">Get bill</button> */}
    </div>
    <Outlet />
  </>
  );
}
