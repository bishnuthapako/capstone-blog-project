import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { makeEmojiList } from '../Components/MakeEmojiPage'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


const initialState={
  post: null,
  error: null,
  status: "pending"
}

function Post({deletePost, postTile, postContent, onUpdatePost, setUser, setUserPosts, userPosts, postId}) {

//  console.log(postId, 'content')



// ********* modal popup
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

// ******************** modal end




// // ******************** Edit Form
const [blogTitle, setBlogTitle]=useState(postTile)
const [blogContent, setBlogContent]=useState(postContent)

function handleUpdateSubmit(e){
e.preventDefault();

const inputData = {
  blogTitle: blogTitle,
  blogContent: blogContent
}

fetch(`/posts/${postId}`,{
  method: "PATCH",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(inputData)
}).then((res)=>res.json())
.then((update)=>onUpdatePost(update))

}

function handleInputForm(e){
const {name, value}=e.target
if(name==="blogTitle"){
  setBlogTitle(value)
} else{
  setBlogContent(value)
}


// const {name, value}=e.target;
// console.log(value, 'value')
// setUserPostTiles("")
// const copyUserPost = JSON.parse(JSON.stringify(userPosts))
// const currentPost = 

// if(name==="postTile"){
//   const modifyUserPost = copyUserPost.map((post)=>{
//     if(post.id ===postId){
//       post.title = value
//       return post
//     } 
//     return post
//   })
// setUserPosts(modifyUserPost)
}



// ******************* Edit-form-end

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

function handlePostDelete(id){
  fetch(`/posts/${id}`,{
    method: "DELETE",
  })
  deletePost(id)
}


  return (
    <>
   
    <div className="container-fluid">
    <article className="mt-4 p-5 bg-white text-green rounded post-section">
    {/* <img src="" alt="Avatar" className="avatar"> */}
    <div className='avatar-group'>
      <img src="https://www.w3schools.com/howto/img_avatar.png" alt='My Awesome Image' className='post-avatar'/>
    </div>
    <div className='author-pic'>
      <h3>{author}</h3>
    </div>
    <div className='post-section-edit'><button type="button" className="btn btn-link" onClick={handleShow}><FaEdit /></button></div>
    <div className='post-section-delete'><button type="button" className="btn btn-link" onClick={()=>handlePostDelete(postId)}><MdDelete /></button></div>
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
    {/* ************************* */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>

          <Form onSubmit={handleUpdateSubmit}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={2} placeholder="New post title here" name="blogTitle" value={blogTitle} onChange={handleInputForm} required/>
              </Form.Group>

              <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Control as="textarea" rows={5} placeholder="Write your post content here" name="blogContent" value={blogContent} onChange={handleInputForm} required/>
              </Form.Group>
                    <Button variant='secondary' className='mt-3' onClick={handleClose}>Close</Button>{' '}
                    <Button type='submit' variant='primary' className='mt-3' onClick={handleClose}>update</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Post