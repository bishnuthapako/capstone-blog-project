import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function SignUp() {

  const [userDetails, setUserDetails]=useState({
    fullname: "",
    username: "",
    password: "",
    password_confirmation: "",
    email: "",
    bio: "",
    avatar_url: ""
  })


    function handleFormSubmit(e){
      e.preventDefault()
    }

    function handleInputForm(e){
      const copyUserDetails = {...userDetails}
    }


  return (
    <Form onSubmit={handleFormSubmit}>
      <Form.Group className="mb-3" controlId="formBasicFullName">
        <Form.Control type="text" placeholder="Enter your Name" />
      </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Control type="text" placeholder="Enter username" name="username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Confirm Password" name="password" />
      </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Control type="email" placeholder="Enter Your Email Address" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={3} placeholder="Enter Your Bio"/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Control type="text" placeholder="Enter your Image Url" />
      </Form.Group>

    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
    )
}

export default SignUp