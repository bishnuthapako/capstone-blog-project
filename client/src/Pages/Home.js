import React from 'react'
import PostItem from './PostItem'

function Home({userPosts}) {
  console.log(userPosts, 'posts')


  return (
    <>
     {userPosts.map((post)=>(<PostItem key={post.id} userPost={post} />))}
    </>
  
);
}

export default Home