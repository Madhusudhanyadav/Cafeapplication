import React from "react";
import "../styles/Place.css";
import { useState,useEffect } from 'react';
import axios from "axios";

export default function Place() {

  // States
  const [items,setItems] = useState([]);
  const [itemsColl,setItemsColl] = useState({});
  const [tb_no,setTb_no] = useState(0);
  const [c_name,setC_name] = useState("");
  const [phno,setPhno] = useState("");


  // Handle on change for phon
  const handleOnChange = (event)=>{
    console.log(event.target.parentElement.parentElement);
    if(event.target.name === "tb_no"){
      
      setTb_no(event.target.value);
    }
    else if(event.target.name === "c_name"){
      setC_name(event.target.value);
    }
    else if(event.target.name === "phno"){
      setPhno(event.target.value);
    }
    else{
      let tpColl=itemsColl;
      tpColl[event.target.id]=event.target.value;
      setItemsColl(tpColl);
      console.log(itemsColl);
    }
  }

  // Handle on click
  const handleOnClick=(event)=>{
   if(event.target.checked){
    event.target.parentElement.nextElementSibling.nextElementSibling.firstElementChild.removeAttribute('disabled',false);
   }
   else{
    event.target.parentElement.nextElementSibling.nextElementSibling.firstElementChild.value="";
    event.target.parentElement.nextElementSibling.nextElementSibling.firstElementChild.setAttribute('disabled',false);
   }
  //  console.log(event.target.parentElement.nextElementSibling.nextElementSibling.firstElementChild.className);
   

  }

  useEffect(()=>{
    axios.get("http://localhost:8080/user/get/items").then((response)=>{
      const tp=itemsColl;
      console.log(response.data);
      setItems(response.data);
      response.data.map((element)=>{
        
        
        // const obj = new Object();
        // console.log(`${element.id}`);
        tp[`${element.id}`]=0;
        // console.log(obj);
        // tp.push(obj);
        setItemsColl(tp);
        console.log(itemsColl);
      })
      
     
    })
    
  },[])

  

  return (
    <div className="container my-3">
      <form className="myform">
        <center><h1>Place your order</h1></center>
        <div className="input-group mb-3 px-3">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Your table no
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            name="tb_no"
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="input-group mb-3 px-3">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Your Name
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            name="c_name"
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="input-group mb-3 px-3">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Your Phone no
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            name="phno"
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="form-check mycheck m-3">
          {
            items.map((element)=>{
              return (
                  <div className="d-flex  justify-content-between m-2" key={element.id}>
                  <div>
                    <input className="form-check-input" type="checkbox" id="flexCheckDefault" onClick={handleOnClick}/>
                    <label className="form-check-label" >
                      {element.name}
                    </label>
                  </div>
          
           
            
                  <div>Price : {element.price}</div>
                  <div>Quantity : <input type={"number"} style={{width:"30%"}} id={element.id} className="" disabled onChange={handleOnChange}/></div>

                  <div>
                    <img src={element.image} alt="" style={{width:"5rem",height:"5rem",borderRadius:"5px"}}/>
                  </div>

                   </div>);
            })
          }

          {/* <div>
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
                Chicken Biryani
            </label>
          </div> */}
          
           
            
            {/* <div>Price : 600</div>
            <div>Quantity</div>

            <div>
              <img src="https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg" alt="" style={{width:"5rem",height:"5rem",borderRadius:"5px"}}/>
            </div> */}

        </div>
        
      </form>
    </div>
  );
}
