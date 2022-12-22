// import React from 'react';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";

const toast=(text)=>{
    Toastify({
      text: text,
      duration: 3000,
      
      offset: {
        // horizontal axis - can be a number or a string indicating unity. eg: '2em'
        y: 100 // vertical axis - can be a number or a string indicating unity. eg: '2em'
      },
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    }).showToast();
   }

   export default toast;
