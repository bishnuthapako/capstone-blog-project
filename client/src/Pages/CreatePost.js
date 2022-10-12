import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';





function CreatePost({user, setUser}) {

  const [posts, setPosts]=useState({
    title: "",
    content: ""
  })

async function handleFormData(e){
  e.preventDefault();
  const createPost = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({...posts, user_id:user.id})
  }
  const response = await fetch("/posts", createPost)
  const data = await response.json()
  console.log(data, 'post')
  setUser(data)

}

function handleInputData(e){
  const copyPosts = {...posts}
  copyPosts[e.target.name]=e.target.value
  setPosts(copyPosts)
}




  return (
    <>
      <Form onSubmit={handleFormData}>
      
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={2} placeholder="New post title here" name="title" value={posts.title} onChange={handleInputData} required/>
    </Form.Group>
{/************/}

    <select class="form-select mt-3 p-2">
      <option>Programming</option>
      <option>JavaScript</option>
      <option>Ruby</option>
      <option>Rails</option>
    </select>

{/*******************/}
    <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={5} placeholder="write your post content here" name="content" value={posts.content} onChange={handleInputData} required/>
    </Form.Group>

    <Button variant="secondary" type="submit">Publish</Button>
  </Form>
    </>
  )
}

export default CreatePost