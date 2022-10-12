import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { makeEmojiList } from '../Components/MakeEmojiPage'


const initialState={
  post: null,
  error: null,
  status: "pending"
}

function Post() {

const [{post, error, status}, setState]=useState(initialState)
const { id } =useParams();

useEffect(()=>{
  setState(initialState)
  fetch(`/posts/${id}`).then((res)=>{
    if(res.ok){
      res.json().then((post)=>
      setState({post, error:null, status:"resolved"})
      );
    } else {
      res.json().then((message)=>
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
const emojis = makeEmojiList(minutes_to_read)


  return (
    <>
    <div className="container-fluid">
    <article className="mt-4 p-5 bg-white text-green rounded post-section">
    {/* <img src="" alt="Avatar" className="avatar"> */}
    <div className='avatar-group'>
      <img src="https://www.w3schools.com/howto/img_avatar.png" alt='avatar' about='avatar' className='post-avatar'/>
    </div>
    <div className='author-pic'>
      <h3>{author}</h3>
    </div>
    <small className='min-read'>
          <p>{date} . {emojis} {minutes_to_read} min read</p>
    </small>
      <div className='p-5 posts'>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    </article>
    <h3>Top comment section</h3>
    {/* ************************Create-Comments-Here */}
    <div className='mt-2 p-3 bg-white form-group comment-group'>
        <div className='comment-avatar'>
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt='user_avatar' about='avatar' className='post-avatar'/>
        </div>
        <div className='form-comment' >
          <textarea className="form-control" rows="3" id="comment" placeholder='Add to the discussion' />
          <button className='btn btn-primary mt-2' type='submit'>Submit</button>
        </div>
    </div>
    {/* *********************************Add-Comments section */}
    <div className='mt-2 p-3 bg-white post-comment'>
      <div className='comments-avatar'>
          <img src="https://www.w3schools.com/howto/img_avatar.png" about='avatar' className='post-avatar'/>
        </div>
          <div className='users-avatar'>
                <h3>{author}</h3>
           </div>
        <div className='comment-body'>
          <p>Welcome guys, I am going to show you how to write SEO optimized articles on google docs using SEO Writing Assistant which helps to write SEO friendly contents even on</p>
        </div>
    </div>   
     {/************************* */}
     <div className='mt-2 p-3 bg-white'>
      
        <div className='jjj'>
          <p>Welcome guys, I am going to show you how to write SEO optimized articles on google docs using SEO Writing Assistant which helps to write SEO friendly contents even on</p>
        </div>
    </div>  
    </div>
    </>
  )
}

export default Post