import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from 'react';
import { Routes, Route } from "react-router-dom";
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import NavBar from './Pages/NavBar';
import Home from './Pages/Home';

function App() {

  // const [user, setUser]=useState(null)

  // useEffect(()=>{
  //   fetch("/me")
  //   .then((r)=>{
  //     if(r.ok){
  //       r.json()
  //       .then((user)=>setUser(user))
  //       // console.log(user, "user")
  //     }
  //   });
  // },[]);

  return (
    <>
    <NavBar />
          {/* <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<SignUp />} /> 
                <Route path="/login" element={<Login />} />
          </Routes> */}
  <div className="container bg-light vh-100">
   <div className="row">
            <div className="container-fluid col-3 vh-100">

            <h1>Welcome to my right sidebar section. Welcome to my sidebar section</h1>
            </div>
            
            <div className="container-fluid col-6 vh-100"> 
            {/* <h1>Welcome to my right sidebar section. Welcome to my sidebar section</h1> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<SignUp />} /> 
                <Route path="/login" element={<Login />} />
          </Routes>
            </div>
              
            <div className="container-fluid col-3 vh-100">
              <h1>Welcome to my right sidebar section. Welcome to my sidebar section</h1>

            </div>
    </div>
</div>
    </>
  );
}

export default App;
