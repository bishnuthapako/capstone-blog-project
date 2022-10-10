import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom'

function Login({onLogin}) {

  const navigate = useNavigate();


  const [credentials, setCredientials]=useState({
    username: "",
    password: ""
  })

 


async function handleSubmitForm(e){
  e.preventDefault()

  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(credentials)
  }


  const res = await fetch("/login", config)
  const data = await res.json()
  // console.log(data, 'data')
  onLogin(data)
 navigate("/")
 }

 function handleFormControl(e){
  // debugger;
  const copyCredentials = {...credentials}
  copyCredentials[e.target.name]=e.target.value
  // debugger;

  setCredientials(copyCredentials)
// console.log(copyCredentials, 'copy')

 }

  return (
    <>
        <Form onSubmit={handleSubmitForm} >
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="username" placeholder="Enter username" onChange={handleFormControl} name="username" value={credentials.username}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={handleFormControl} name="password" value={credentials.password}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    </>
  )
}

export default Login