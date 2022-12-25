// TODO
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import toast from "../components/toast";
import { Link } from 'react-router-dom';
import "../styles/Bill.css";
// import { Link } from 'react-router-dom'

export default function Contact() {
  const [feedback,setFeedback]=useState({});

  const handleOnChange = (event)=>{
    
    const tp=feedback;
    if(event.target.placeholder === "Name"){
      tp["Name"]=event.target.value;
    }
    else if(event.target.placeholder === "Email"){
      tp["Email"]=event.target.value;
    }
    else if(event.target.placeholder === "Subject"){
      tp["Subject"]=event.target.value;
    }
    else if(event.target.placeholder === "message"){
      tp["message"]=event.target.value;
    }
    setFeedback(tp);
    // console.log(feedback);
  }

  const handleOnSubmit = (event)=>{
    event.preventDefault();
    axios.post("http://localhost:8080/home/post/feedback",feedback).then((response)=>{
      toast("successfully submitted");
    })
    event.target.reset();
  }
  return (
    <div className='myCont1 container my-3'>
      <center><h1>Contact us</h1></center>
      <div className="row">
      <div className='col-8'>
        <form method='post' onSubmit={handleOnSubmit}>
          <h2>Get in touch</h2>
          <div className='d-flex'>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Name" aria-describedby="basic-addon1" onChange={handleOnChange} required/>
            </div>
            <div className="input-group mb-3">
              
              <input type="text" className="form-control" placeholder="Email"  aria-describedby="basic-addon1" onChange={handleOnChange} required/>
            </div>
          </div>
          
          <div className="input-group mb-3">
             
            <input type="text" className="form-control" placeholder="Subject"  aria-describedby="basic-addon1" onChange={handleOnChange} required/>
          </div>
          <div className="input-group">
            <textarea placeholder="message" className="form-control" rows={5} aria-label="With textarea" onChange={handleOnChange} required></textarea>
          </div>
          <button type="submit" className="btn btn-primary m-3">Submit</button>
          
        </form>
       
      </div>
      <div className='mycont2 col-4'>
        <div className="my-3 container">
          <h5>Contact us</h5>
          
          <pre><i class='fas fa-map-marker-alt'></i>   Address : </pre>
          <pre><i class='fas fas fa-phone'></i>   PhNo : +916281662141</pre>
          <pre><i class='fas fas fa-location-arrow'></i>   Email : madhugangaboina001@gmail.com</pre>
          
        </div>
        <div className='container icont'> 

        <a href="" ><img className='icons' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1200px-Instagram-Icon.png' style={{height:"30px",width:"30px"}}></img></a>
        <a href="https://wa.me/6281662141" ><img className='icons' src='https://cdn-icons-png.flaticon.com/512/134/134937.png' style={{height:"30px",width:"30px"}}></img></a>

        
        </div>
      </div>
      </div>
    </div>
  )
}
