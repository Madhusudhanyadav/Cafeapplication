// TODO
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login(props) {
  const navigate=useNavigate();
  const [info,setInfo]=useState({email:"",pwd:""});

  const handleOnChange = (event)=>{
    // console.log(event.target.parentElement.parentElement);
    const tp=info;
    if(event.target.type==="email"){
      
      
      tp["email"]=event.target.value;
      
      console.log(info);

    }
    else{
      tp["pwd"]=event.target.value;
      console.log(info);
    }
    setInfo(tp);
  }

  const handleOnSubmit=()=>{
    axios.post("http://localhost:8080/admin/post/login",info).then((response)=>{
      console.log(response);
      if(response.data==="success"){
        props.toggle(true);
        localStorage.setItem("isLogged",info["email"]);
        navigate("/admin/");
      }
    }).catch((err)=>{
      console.log(err);
    })
  }
  return (
    <section className="vh-80" >
        <div className="container py-3 h-80">
          <div className="row d-flex justify-content-center align-items-center h-80">
            <div className="col col-xl-10">
              <div className="card" style={{borderRadius: '1rem',height:"32rem"}}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp" alt="login form" className="img-fluid" style={{borderRadius: '1rem 1rem 1rem 1rem',width:"80%",height:"80%"}}  />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-3" style={{color: '#ff6219'}} />
                          <span className="h1 fw-bold mb-0">Logo</span>
                        </div>
                        <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>
                        <div className="form-outline mb-4">
                          <input type="email" id="form2Example17" onChange={handleOnChange} className="form-control form-control-lg"  />
                          <label className="form-label" htmlFor="form2Example17">Email address</label>
                        </div>
                        <div className="form-outline mb-4">
                          <input type="password" id="form2Example27" onChange={handleOnChange} className="form-control form-control-lg" required />
                          <label className="form-label" htmlFor="form2Example27">Password</label>
                        </div>
                        <div className="pt-1 mb-4">
                          <button className="btn btn-dark btn-lg btn-block" onClick={handleOnSubmit} type="button">Login</button>
                        </div>
                        {/* <p className="mb-5 pb-lg-2"  style={{color: '#393f81'}}>Don't have an account? <a href="#!" styler={{color: '#393f81'}}>Register here</a></p> */}
                        
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
