import React from 'react'
import PostItem from './PostItem'

function Home({posts}) {
 

  return (
    <>
      {posts.length > 0 ? posts.map((post)=><PostItem key={post.id} articles = {post}/>): 
      <h2>No Posts Found</h2>
      }
    </>

);
}

export default Home