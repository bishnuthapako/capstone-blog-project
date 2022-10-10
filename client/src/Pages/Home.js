import React, { useEffect, useState } from 'react'
import PostItem from './PostItem'

function Home() {
  const [posts, setPosts]=useState([])
  console.log(posts, 'art')
  useEffect(()=>{
    fetch("/posts")
    .then((res)=>res.json())
    .then((data)=>{
      // console.log(data, 'data')
      setPosts(data)})
  },[])


  return (
    <main>
      {posts.map((post)=>(<PostItem key={post.id} post={post} />)
    )}
    </main>
  
);
}

export default Home