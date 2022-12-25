import React from "react";
import "../styles/Place.css";
import { useState,useEffect } from 'react';
import axios from "axios";
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";
import { useNavigate } from "react-router-dom";




export default function Place(props) {

  // Navigate
  const navigate = useNavigate();

  // States
  const [items,setItems] = useState([]);
  // no of items for each item id
  const [itemsColl,setItemsColl] = useState({});
  const [tb_no,setTb_no] = useState(0);
  const [c_name,setC_name] = useState("");
  const [phno,setPhno] = useState("");
  const [ord_no,setOrd_no]=useState(0);

  // Toast messages
  const toast=(text)=>{
    Toastify({
      text: text,
      duration: 3000,
      
      offset: {
        // horizontal axis - can be a number or a string indicating unity. eg: '2em'
        y: 50 // vertical axis - can be a number or a string indicating unity. eg: '2em'
      },
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    }).showToast();
   }

  // Handle on change for phon
  const handleOnChange = (event)=>{
    // console.log(event.target.parentElement.parentElement);
    if(event.target.name==="ord_no"){
      
      props.setOrderId(event.target.value);
      setOrd_no(event.target.value);
    }
    else if(event.target.name === "tb_no"){
      
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
    event.target.parentElement.nextElementSibling.nextElementSibling.firstElementChild.value="1";
    let tpColl=itemsColl;
    tpColl[event.target.parentElement.nextElementSibling.nextElementSibling.firstElementChild.id]=1;
    setItemsColl(tpColl);
    console.log(itemsColl);
   }
   else{
    event.target.parentElement.nextElementSibling.nextElementSibling.firstElementChild.value="";
    let tpColl=itemsColl;
    tpColl[event.target.parentElement.nextElementSibling.nextElementSibling.firstElementChild.id]=0;
    setItemsColl(tpColl);
    console.log(itemsColl);
    event.target.parentElement.nextElementSibling.nextElementSibling.firstElementChild.setAttribute('disabled',false);
   }
  }

 // form submission
  const handleOnSubmit = (event)=>{
    event.preventDefault();
    if(event.target.className === "myform2"){
      const url="http://localhost:8080/user/get/status?ord_no="+ord_no;
      
      axios.get(url).then((response)=>{
        toast(response.data);
      })
      console.log(event.target.className);
    }
    else{
      let currOrder=[];
      for (const key in itemsColl) {
        if(itemsColl[key]!==0){
          currOrder.push({"id":`${key}`,"quantity":`${itemsColl[key]}`});
        }
        
      }
      console.log(currOrder);
      // alert("submitted");
      let obj={
        "tb_no":tb_no,
        "c_name":c_name,
        "phno":phno,
        "items":currOrder
      }
      // toast("hello");
      
      axios.post("http://localhost:8080/user/post/order",obj).then((response)=>{
        toast("Your order no is "+response.data);
        // navigate("/login");

        // console.log(response);
      }).catch((err)=>{
        console.log(err);
      })
      event.target.reset();
      let elements=document.getElementsByClassName("checkBox");
      for(let ele of elements){
        ele.setAttribute("disabled",true);
        // console.log(ele);
      }
      // console.log(elements);
    }
  }
  useEffect(()=>{
    axios.get("http://localhost:8080/user/get/items").then((response)=>{
      let tp=itemsColl;
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
        return 0;
      })
      
     
    })
    
  },[itemsColl])

  

  return (
    <div className="container my-3">
      <form className="myform" method="post" onSubmit={handleOnSubmit}>
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
                  <div>Quantity : <input type={"number"} style={{width:"30%"}} id={element.id} className="checkBox" disabled onChange={handleOnChange}/></div>

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
        <div className="col-12">
          <center>
          <button className="btn btn-primary m-3" type="submit">Place Order</button>
          </center>
        </div>
      </form>
      <form className="myform2" onSubmit={handleOnSubmit}>
        <center><h2>Check Status</h2></center>
        <div className="input-group mb-3 px-3">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Your Order no
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            name="ord_no"
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="col-12">
          <center>
          <button className="btn btn-primary m-3" type="submit">Get Status</button>
          </center>
        </div>
      </form>

      <div className="myform">
        <center><h2>Get Bill</h2></center>
        <div className="input-group mb-3 px-3">
          <span className="input-group-text" id="inputGroup-sizing-default">
                Your Order no
              </span>
          <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              name="ord_no"
              onChange={handleOnChange}
              
              />
          </div>
          <center>
            <button className="btn btn-primary m-3" onClick={()=>{
              navigate("/user/bill")
            }}>Get Bill</button>
          </center>
      </div>

      
    </div>
  );
}
