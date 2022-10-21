import React, {useEffect, useState} from 'react'
import { makeEmojiList } from '../Components/MakeEmojiPage'
import Comments from './Comments';
import CreateComments from './CreateComments';
import { useParams } from 'react-router-dom'
import DeletePost from './DeletePost';
// import EditForm from './EditForm';


const initialState={
  post: null,
  error: null,
  status: "pending"
}

function Post({currentPost, posts, onUpdatePost, onDeletePost}) {
   const [comment, setComment]=useState([])

        useEffect(()=>{
          fetch("/comments").then((res)=>{
            if(res.ok){
              res.json().then((data)=>setComment(data))
            }
          });},[])


  

  const [{post, error, status}, setState]=useState(initialState)
  const { id } =useParams();

  useEffect(()=>{
      setState(initialState)
        fetch(`/posts/${id}`).then((r)=>{
        if(r.ok){
          r.json().then((post)=>
          setState({ post, error:null, status:"resolved" })
          );
        } else {
          r.json().then((message)=>
          setState({post: null, error: message.error, status: "rejected"})
          );
        }
  });
},[id]);

if (status === "pending") return <h1>Loading...</h1>
if (status==="rejected"){
  if(error === "Maximum pageview limit reached"){
    return <h3>Payroll</h3>;
  }else{
    return <h3>{error}</h3>
  }
}



const {title, author, date, content, minutes_to_read }=post;
const emojis = makeEmojiList("minutes_to_read")


  return (
    <>
<div className="container-fluid">
    <article className="mt-4 p-5 bg-white text-green rounded post-section">
      <div className='avatar-group'>
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt='My Awesome Image' className='post-avatar'/>
      </div>
      <div className='author-pic'>
       
            <h3>{author}</h3>
      </div>
    {posts.map((newPost)=><DeletePost
            key={newPost.id}
            post_id={newPost.id}
            onUpdatePost={onUpdatePost}
            // setPosts={setPosts}
            // posts={posts}
            currentPost={currentPost}
            post={newPost}
            onDeletePost={onDeletePost}
    />)}
    
    <small className='min-read'>
          <p>{date} . {emojis} {minutes_to_read} min read</p>
    </small>
   
      <div className='p-5 posts'>
              <hr/>
              <h1>{title}</h1>
              <p>{content}</p>
      </div>
   
    </article>
    <h3>Top comment section</h3>
    {/* ************************Create-Comments-Here */}
    <CreateComments />
    {/* *********************************Add-Comments section */}
      {comment.map((comment)=>
              <Comments 
              key={comment.id}
              comment={comment}
              />
      )}
</div>
  </>
  )
}

export default Post