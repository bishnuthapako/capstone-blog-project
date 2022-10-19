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



export const UsersContext = createContext();

function App() {

  const [user, setUser]=useState(null)


  useEffect(()=>{
    fetch("/me").then((res)=>{
      if(res.ok){
        res.json().then((data)=>setUser(data))
      }
    });
  },[])

  // if (!user) return <Login onLogin={setUser} />

  const [posts, setPosts]=useState([])
  // console.log(posts, 'post')
useEffect(()=>{
  fetch("/posts")
  .then((r)=>r.json())
  .then(setPosts)
},[])

// function handleAddPost(newPost){
//   setPosts((posts)=>[...posts, newPost])
// }

// function handleAddPost(newMessage){
// let copyMessage = JSON.parse(JSON.stringify(posts))
// copyMessage.find((user)=>user.id===newMessage.user_id).posts.unshift(newMessage)
// setPosts(copyMessage)
// }

const handleAddPost = (post)=>{
  setPosts([...posts, post])
}




// function handleDeletePost(postToDelete){
//   const updatedPosts = posts.filter((post)=>post.id !==postToDelete.id);
//   setPosts(updatedPosts)
// }

// function handleUpdatePost(updatedPost){
//   const updatedPosts = posts.map((post)=>post.id ===updatedPost.id ? updatedPost : post);
//   setPosts(updatedPosts)
// }

const [isUpdate, setIsUpdate]=useState(false)

const handleUpdatePost = (post)=>{
 let articles = posts
articles.unshift(post)
 setPosts(articles)
 setIsUpdate(true)
}

// function handleUpdatePost(update){
//   let updateArray = JSON.parse(JSON.stringify(posts))
//   const findUser = updateArray.find((user)=>user.id===update.user_id)
//   const newMessage = findUser.posts.map((post)=>{
//     if(post.id===update.id){
//       return update
//     }else{
//       return post
//     }
//   })
//   findUser.posts=newMessage
//   setPosts(updateArray.map((user)=>user.id===findUser.id? findUser : user))
// }

  return (
    <>
    <UsersContext.Provider value={{user}}>
        
    <NavBar user={user} setUser={setUser}/>
  <div className='container-fluid'>
    <div className='container'>
<div className="container">
                <Routes>
                    <Route exact path="/" element={<Home posts={posts}/>} />
                    <Route exact path="/posts/:id" element={ <Post onDeletePost={handleUpdatePost} setPosts={setPosts} onUpdatePost={handleUpdatePost} posts={posts} /> }/>
                    <Route exact path="/post" element={<CreatePost handleAddPost={handleAddPost} user={user} setUser={setUser}/>} /> 
                    <Route exact path="/signup" element={<SignUp setUser={setUser}/>} /> 
                    <Route exact path="/login" element={<Login onLogin={setUser} />} />
              </Routes> 
      </div>
    </div>
  </div>
</UsersContext.Provider>
    </>
  );
}

export default App;
