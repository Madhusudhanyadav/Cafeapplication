import React from 'react'
import { useState,useEffect} from 'react';
import axios from 'axios';
export default function AdminOrders(props) {
    const [orders,setOrders]=useState([]);
    // const [count,setCount] = useState();


    const update=(event)=>{
        console.log(event.target);
        const url="http://localhost:8080/admin/update/status?cid="+event.target.id+"&st="+event.target.textContent+"ed";
        console.log(url)
        axios.get(url).then((response)=>{
            console.log(response);
        })
        event.target.parentElement.textContent="delivered";
    }
   useEffect(()=>{
    axios.get("http://localhost:8080/admin/get/orders").then((response)=>{
      // console.log(response.data);
      setOrders(response.data);
      // console.log(orders);
    })
    // console.log("hello");
    props.setInt(setInterval(async ()=>{
        
        await axios.get("http://localhost:8080/admin/get/orders").then((response)=>{
            console.log(response.data);
            setOrders(response.data);
      
        })
        // console.log("tick");
    },5000) )
    
    // clearInterval(myInterval);
   },[])


  return (
    <div className="container cont">
        <h1>Orders</h1>
    <table className="table table-striped">
    <thead>
        <tr>
        <th scope="col">Customer id</th>
        <th scope="col">Customer Name</th>
        <th scope="col">Phone No</th>
        <th scope="col">Order id</th>
        <th scope="col">Orders</th>
        <th scope="col">Price</th>
        <th scope="col">Status</th>
        </tr>
     </thead>
    <tbody>
        {
            orders.map((element,idx)=>{
                return (<tr key={idx}>
                    <th scope="row">{element.c_id}</th>
                    <td>{element.c_name}</td>
                    <td>{element.phno}</td>
                    <th>{element.ord_id}</th>
                    <td>{element.orderList.map((e,idx)=>{
                        return (<p key={idx}>
                        {e.item_name} : {e.quantity}
                        
                            
                        </p>);
                    })}</td>
                    <td>{element.amount}</td>
                    <td>{element.status === "ordered"?<div>Ordered  <button type="button" id={element.c_id} className="btn btn-primary my-3" onClick={update}>Deliver</button></div> :element.status}</td>
                    
                </tr>);
            })
        }
        
    </tbody>
    </table>
    </div>
  )
}
