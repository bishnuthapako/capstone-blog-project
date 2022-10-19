import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom'

function Login({onLogin}) {

  const navigate = useNavigate();

  const [username, setUsername]=useState("")
  const [password, setPassword]=useState("")
  const [errors, setErrors]=useState([])
  const [isLoading, setIsLoading]=useState(false)


  function handleSubmit(e){
    e.preventDefault()
    setIsLoading(true)
    fetch("/login",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }, 
      body: JSON.stringify({username, password})
    }).then((r)=>{
      setIsLoading(false);
      if(r.ok){
        r.json().then((user)=>{
          onLogin(user)
          navigate("/")
        });
      } else{
        r.json().then((error)=>setErrors(error.errors))
      }
    });
  }
 


  return (
    <>
  <Form onSubmit={handleSubmit} >
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>username</Form.Label>
        <Form.Control 
        type="username" 
        autoComplete='off'
        placeholder="Enter username" 
        value={username}
        name="username"
        onChange={(e)=>setUsername(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
        type="password" 
        placeholder="Password" 
        autoComplete='current-password'
        onChange={(e)=>setPassword(e.target.value)} 
        name="password" 
        value={password}/>

      </Form.Group>

      <Button variant="primary" type="submit">
        {isLoading ? "Loading..": "Login"}
      </Button>
  </Form>
    </>
  )
}

export default Login