import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import "../styles/Bill.css";

export default function Bill(props) {
    const [bill,setBill] = useState({orderList:[],amount:0,gst:0});

    useEffect(()=>{
        const url = "http://localhost:8080/user/get/bill?ord_no="+props.orderId;
        axios.get(url).then((response) => {
            // console.log(response.data);
            setBill(response.data);
        })
    },[props.orderId])
  return (
    <div className='container myCont my-3'>
        
      <h1>Bill</h1>
      <h4><pre>Order id          :  {bill.ord_id}</pre></h4>
      <h4><pre>Customer id       :  {bill.c_id}</pre></h4>
      <h4><pre>Customer name     :  {bill.c_name}</pre></h4>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">ItemName </th>
            <th scope="col">Quantity</th>
            <th scope="col">Item Price</th>
            <th scope='col'>CGST(%)</th>
            <th scope='col'>SGST(%)</th>
            <th scope='col'>Total</th>

          </tr>
        </thead>
        <tbody>
          
      {
        
        bill.orderList.map((element,idx)=>{
          // console.log(element,idx);
          return <tr key={idx}>
          <th scope="row">{idx+1}</th>
            <td>{element.item_name}</td>
            <td>{element.quantity}</td>
            <td>{element.price}</td>
            <td>{bill.gst}</td>
            <td>{bill.gst}</td>
            <td>{(element.price*element.quantity) + element.quantity*((2*bill.gst / 100) *element.price * element.quantity)}</td>
          </tr>
        })
      }
      <tr>
        <th scope='row' colSpan={3}>Total </th>
        <th scope='row'>{bill.amount}</th>
        <th scope='row'>{bill.gst}</th>
        <th scope='row'>{bill.gst}</th>

        <th scope='row' >{bill.amount + ((2*bill.gst/100)*bill.amount)}</th> 
        
      </tr>
      </tbody>
      </table>
      <center><h4>Thank You And visit again</h4></center>
    </div>
  )
}
