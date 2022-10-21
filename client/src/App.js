import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import NavBar from './Pages/NavBar';
import Home from './Pages/Home';
import Post from './Pages/Post';
import CreatePost from './Pages/CreatePost';
import { UserContext } from "./UserContext"


function App() {

  
  const [user, setUser]=useState(null)


  useEffect(()=>{
    fetch("/me").then((res)=>{
      if(res.ok){
        res.json().then((data)=>setUser(data))
      }
    });
  },[])


  const [posts, setPosts]=useState([])
  // console.log(posts, 'post')
useEffect(()=>{
  fetch("/posts")
  .then((r)=>r.json())
  .then(setPosts)
},[])

function handleAddPost(newPost){
  setPosts((posts)=>[...posts, newPost])
}

// function handleAddPost(newMessage){
// let copyMessage = JSON.parse(JSON.stringify(posts))
// copyMessage.find((user)=>user.id===newMessage.user_id).posts.unshift(newMessage)
// setPosts(copyMessage)
// }

// const handleAddPost = (post)=>{
//   setPosts([...posts, post])
// }




function handleDeletePost(postToDelete){
  const updatedPosts = posts.filter((post)=>post.id !==postToDelete.id);
  setPosts(updatedPosts)
}

function handleUpdatePost(updatedPost){
  const updatedPosts = posts.map((post)=>post.id ===updatedPost.id ? updatedPost : post);
  setPosts(updatedPosts)

}


  return (
    <>
    <UserContext.Provider value={{user, setUser}}>
        
    <NavBar user={user} setUser={setUser}/>
  <div className='container-fluid'>
    <div className='container'>
<div className="container">
                <Routes>
                    <Route exact path="/" element={<Home posts={posts}/>} />
                    <Route exact path="/posts/:id" element={ <Post onDeletePost={handleDeletePost} onUpdatePost={handleUpdatePost} posts={posts} /> }/>
                    <Route exact path="/post" element={<CreatePost handleAddPost={handleAddPost} user={user} setUser={setUser}/>} /> 
                    <Route exact path="/signup" element={<SignUp setUser={setUser}/>} /> 
                    <Route exact path="/login" element={<Login onLogin={setUser} />} />
              </Routes> 
      </div>
    </div>
  </div>
</UserContext.Provider>
    </>
  );
}

export default App;
