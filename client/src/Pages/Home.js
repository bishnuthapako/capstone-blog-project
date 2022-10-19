import React from 'react'
import PostItem from './PostItem'

function Home({posts}) {
  // console.log(userPosts, 'posts')

// const postsDetails = posts.length > 0 ? posts.map((post)=><PostItem
// key={post.id}
// articles = {post}
// />)

  return (
    <>
      {posts.length > 0 ? posts.map((post)=><PostItem key={post.id} articles = {post}/>): 
      <h2>No Posts Found</h2>
      }
    </>

);
}

export default Home