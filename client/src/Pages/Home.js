import React from 'react'
import PostItem from './PostItem'

function Home({posts}) {
  console.log(posts, 'posts')


  return (
    <>
     {posts.map((post)=>(<PostItem key={post.id} post={post} />)
    )}
    </>
  
);
}

export default Home