import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from 'react';
import { Routes, Route } from "react-router-dom";
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import NavBar from './Pages/NavBar';
import Home from './Pages/Home';

function App() {

  const [user, setUser]=useState(null)
console.log(user, 'user')
  useEffect(()=>{
    fetch("/me")
    .then((r)=>{
      if(r.ok){
        r.json()
        .then((user)=>setUser(user))
        // console.log(user, "user")
      }
    });
  },[]);

function handleLogin(user){
  setUser(user)
}

function handleLogout(){
  setUser(null);
}

  return (
    <>
    
          {/* <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<SignUp />} /> 
                <Route path="/login" element={<Login />} />
          </Routes> */}
  <div className="container bg-light vh-100">
  <NavBar user={user} onLogOut={handleLogout}/>

   <div className="row">
            <div className="container-fluid col-3 vh-100">

            {/* <h3>Welcome to my right sidebar section. Welcome to my sidebar section</h3> */}
            </div>
            
            <div className="container-fluid col-6 vh-100"> 
            {/* <h1>Welcome to my right sidebar section. Welcome to my sidebar section</h1> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<SignUp setUser={setUser}/>} /> 
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
          </Routes>
            </div>
              
            <div className="container-fluid col-3 vh-100">
              {/* <h3>Welcome to my right sidebar section. Welcome to my sidebar section</h3> */}

            </div>
    </div>
</div>
    </>
  );
}

export default App;
