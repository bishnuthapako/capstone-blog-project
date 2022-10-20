import React, {useState} from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal'
import { useNavigate } from "react-router-dom";


function DeletePost({post_id, post, onUpdatePost, onDeletePost}) {
    // const {id, minutes_to_read, date, title, content, author}=post
    // console.log(post, 'post')

    // console.log(minutes_to_read, 'minutes')



    let navigate = useNavigate()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


function handleDeleteClick(id){
  fetch(`/posts/${id}`,{
    method: "DELETE"
})
onDeletePost(id)
// navigate("/")
   

}

function handleInputUpdate(e){
  // const copyPost = JSON.parse(JSON.stringify(post))
  const copyPost = {...post}

  // copyPost.map((newPost)=>{
  //   if(newPost.id === post_id){
        // debugger
        copyPost[e.target.name]=e.target.value
  //       return newPost
  //     } else{
  //       return newPost
  //     }
  // })
  onUpdatePost(copyPost)
}

// const [titles, setTitles]=useState(title)
// const [contents, setContents]=useState(content)

function updateSubmit(e){
e.preventDefault();

const formData = {
  title: post.title,
  content: post.content
}

fetch(`/posts/${post.id}`,{
  method: "PATCH",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(formData)
}).then((res)=>res.json())
.then((data)=>{
  // console.log(data, 'data')
  // const copyPost = JSON.parse(JSON.stringify(posts))
  // copyPost.map((newPost)=>{
  //   if(newPost.id === update.id){
  //       // debugger
  //       // newPost[e.target.name]=e.target.value
  //       return update
  //     } else{
  //       return newPost
  //     }
  // })
    onUpdatePost(data)

  // onUpdatePost(update)
  // navigate("/")
})

}


  return (<>
  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>

          <Form onSubmit={updateSubmit}>
             
                    <input type="textarea" placeholder="New post title here" name="title" value={post.title} onChange={handleInputUpdate}  required/>
   
             
                  <input type="textarea" placeholder="Write your post content here" name="content" value={post.content} onChange={handleInputUpdate} required/>
            
                    <Button variant='secondary' className='mt-3' onClick={handleClose}>Close</Button>{' '}
                    <Button type='submit' variant='primary' className='mt-3' onClick={handleClose}>update</Button>
          </Form>
        </Modal.Body>
  </Modal> 
    <div className='post-section-edit'><button type="button" className="btn btn-link" onClick={handleShow}><FaEdit /></button></div>
  <div className='post-section-delete'><button type="button" className="btn btn-link" onClick={()=>handleDeleteClick(post.id)}><MdDelete /></button></div>
  </>
  )
}

export default DeletePost