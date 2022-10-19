import React, {useState} from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal'
import { useNavigate } from "react-router-dom";


function DeletePost({post_id, post, onUpdatePost, posts, setPosts, onDeletePost}) {
    const {id, minutes_to_read, date, title, content, author}=post
    // console.log(date, 'date')

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
navigate("/")
   

}


const [titles, setTitles]=useState(title)
const [contents, setContents]=useState(content)

function updateSubmit(e){
e.preventDefault();

const formData = {
  title: titles,
  content: contents
}

fetch(`/posts/${post.id}`,{
  method: "PATCH",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(formData)
}).then((res)=>res.json())
.then((update)=>{
  onUpdatePost(update)
  navigate("/")
})

}


  return (<>
  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>

          <Form onSubmit={updateSubmit}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={2} placeholder="New post title here" name="titles" value={titles} onChange={(e)=>setTitles(e.target.value)} required/>
              </Form.Group>

              <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Control as="textarea" rows={5} placeholder="Write your post content here" name="contents" value={contents} onChange={(e)=>setContents(e.target.value)}  required/>
              </Form.Group>
                    <Button variant='secondary' className='mt-3' onClick={handleClose}>Close</Button>{' '}
                    <Button type='submit' variant='primary' className='mt-3' onClick={handleClose}>update</Button>
          </Form>
        </Modal.Body>
  </Modal> 
    <div className='post-section-edit'><button type="button" className="btn btn-link" onClick={handleShow}><FaEdit /></button></div>
  <div className='post-section-delete'><button type="button" className="btn btn-link" onClick={()=>handleDeleteClick(post_id)}><MdDelete /></button></div>
  </>
  )
}

export default DeletePost