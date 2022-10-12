import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState, createContext} from 'react';
import { Routes, Route } from "react-router-dom";
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import NavBar from './Pages/NavBar';
import Home from './Pages/Home';
import Post from './Pages/Post';
import CreatePost from './Pages/CreatePost';

// import { Link } from 'react-router-dom';
import LeftSideBar from './Pages/LeftSideBar';

const UsersContext = createContext();

function App() {

  const [user, setUser]=useState(null)
  const [posts, setPosts]=useState([])
  const [error, setError]=useState([])

  useEffect(()=>{
    fetch("/me").then((response)=>{
      if(response.ok){
        response.json().then((data)=>setUser(data))
      }
    });
  },[])

  useEffect(()=>{
    fetch("/posts")
    .then((res)=>res.json())
    .then((data)=>{

      if(data.error){
        setError(data.error)
      } else {
        setPosts(data)
      }
      // console.log(data, 'data')
    })
      .catch((errorData)=>setError(errorData))
  },[])


function handleLogout(){
  setUser(null);
}

  return (
    <>
    <UsersContext.Provider value={user}>
        
<div className="bodycolor">
    <div className='container'>
                  <div className='container-fluid'>
                        <NavBar user={user} onLogOut={handleLogout}/>
                  </div>                 
     
       
        <div className="row">
              <div className="col-2 mt-3">
                <LeftSideBar />
                    {/* <button className='btn bg-light'>How To Write Optimized Articles With Minimum Efforts</button> */}
              </div>
                
              <div className="col-8"> 
                <Routes>
                    <Route exact path="/" element={<Home posts={posts}/>} />
                    <Route exact path="/posts/:id" element={<Post />}/>
                    <Route exact path="/post" element={<CreatePost user={user} setUser={setUser}/>} /> 
                    <Route exact path="/signup" element={<SignUp setUser={setUser}/>} /> 
                    <Route exact path="/login" element={<Login onLogin={setUser} />} />
              </Routes>
              </div>        
              <div className="col-2">
                  <button className='btn bg-light mt-3'> rightbar. How To Write Optimized Articles With Minimum Efforts</button>
              </div>
      </div>
    </div>
</div>
</UsersContext.Provider>
    </>
  );
}

export default App;
