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

  return (
    <>
    <NavBar user={user} setUser={setUser}/>
    <main>
      {user ? (
          <Routes>
                <Route path="/" element={<Home user={user}/>} />
          </Routes>
        ) : (
          <Routes>
                <Route path="/signup" element={<SignUp setUser={setUser} />} /> 
                <Route path="/login" element={<Login setUser={setUser} />} />
                <Route path="/" element={<Home />} />
          </Routes>
        )}
    </main>
    </>
  );
}

export default App;
