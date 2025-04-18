import React from "react";
import "./style.css";
// import { useState } from "react";


// const [message, setMessage] = useState('');
const Login = ({newUser,handleChange,logNewUser,setMessage}) => {
    return (  
        <div className="card w-100 text-center border-white">
        <div className="row">
          <div className="col-12">
            <h5>Enter Username</h5>
          </div>
          <div className="d-flex justify-content-center py-1">
            <div className="col-4">
              
            <input type="text" name="username" value={newUser} onChange={(e)=>handleChange(e)}
              className="form-control mb-4"
              placeholder="username" autoComplete="off"
              // onChange={({currentTarget:input})=>setMessage(input.value)}
              // onChange={(e) => setMessage(e.currentTarget.value)}
              // onKeyDown={(e)=>(e.key === "Enter" ? logNewUser() :null)} 
               onKeyDown={(e)=>(e.key === "Enter" ? logNewUser() : null)}
              // onKeyDown={(e) => e.key === "Enter" && logNewUser()}
              />
            <button className="btn btn-success w-100" onClick={()=>logNewUser()}>Login</button>
            </div>
          </div>
        </div>
      </div>
      // <div className="container">
      //   <div className="row ">
      //     <div className="col-6 border border-2-primary d-inline  ">
      //           <img src="../currency.jpg" alt="no-image" className="w-100 h-auto" />
      //     </div>
      //     <div className="col-6  border border-2-primary d-inline "> 
      //       <h1 className="fw-bold text-center ">Login Page</h1>
      //       <div className="gap-3 w-45 p-3 h-20">
      //       <input type="text" required className=" rounded w-75 h-150 mt-5" id="phone"/>
      //       <input type="password" required className="rounded w-75 h-150  mt-2" id="phone"/>
      //       <a href="" className="nav-link">Forget Password?</a>
      //       </div>
      //       <button className="d-block m-5 rounded border border-none w-25" >login</button>
      //     </div>
      //   </div>
      // </div>
    );
}
 
export default Login;