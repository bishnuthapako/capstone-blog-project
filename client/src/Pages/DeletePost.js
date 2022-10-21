import React, {useState} from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal'



function DeletePost({post_id, post, onUpdatePost, onDeletePost}) {
    const {id, title, content}=post
  

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


function handleDeleteClick(id){
  fetch(`/posts/${id}`,{
    method: "DELETE"
})
onDeletePost(id)

   

}

function handleInputUpdate(e){

  const copyPost = {...post}
        copyPost[e.target.name]=e.target.value
      onUpdatePost(copyPost)
}



function updateSubmit(e){
e.preventDefault();

const formData = {
  title: title,
  content: content
}

fetch(`/posts/${post.id}`,{
  method: "PATCH",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(formData)
}).then((res)=>res.json())
.then((data)=>{

    onUpdatePost(data)

})

}


  return (<>
  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>

          <Form onSubmit={updateSubmit}>
            <input type="text" className="form-control mb-3" placeholder="New post title here" name="title" value={post.title} onChange={handleInputUpdate}></input>
            <textarea className="form-control" rows="5" id="comment" name="content" value={post.content} onChange={handleInputUpdate}></textarea>
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