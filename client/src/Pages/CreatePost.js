import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";


function CreatePost({handleAddPost, user}) {

  let navigate = useNavigate()

 const [title, setTitle]=useState("")
 const [content, setContent]=useState("")
 const [minutesToRead, setMinutesToRead]=useState("")
 const [isLoading, setIsLoading]=useState(false)


function handleSubmit(e){
  e.preventDefault();
  setIsLoading(true)
  fetch("/posts",{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      content,
      user_id: user.id,
      minutes_to_read: minutesToRead
    }),
  }).then((r)=>r.json())
  .then((newPost)=>{
    handleAddPost(newPost)
    navigate("/")
  })
}


  return (
    <>
<Form onSubmit={handleSubmit}>  
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={2} 
        placeholder="New post title here" 
        name="title" 
        value={title} 
        onChange={(e)=>setTitle(e.target.value)}/>
    </Form.Group>
      {/* <div className='tags-input'> */}
      {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control type="text" placeholder="Add Tags" required />
      </Form.Group>
      </div> */}
    
 
    
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={2} 
        placeholder="Minutes to read" 
        name="minutesToRead" 
        value={minutesToRead} 
        onChange={(e)=>setMinutesToRead(e.target.value)}/>
    </Form.Group>

    <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={5} 
        placeholder="write your post content here" 
        name="content" 
        value={content} 
        onChange={(e)=>setContent(e.target.value)}/>
    </Form.Group>

    <Button variant="secondary" type="submit">
      {isLoading ? "Loading...": "Publish"}
    </Button>
</Form>
    </>
  )
}

export default CreatePost