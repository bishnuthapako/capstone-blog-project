import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function SignUp({setUser}) {

  const [userDetails, setUserDetails]=useState({
    fullname: "",
    username: "",
    password: "",
    password_confirmation: "",
    email: "",
    bio: "",
    avatar_url: ""
  })


    async function handleFormSubmit(e){
      e.preventDefault()
      const signUpConfig = {
        method: "POST",
        header: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userDetails)
      }
      const response = await fetch("/signup", signUpConfig)
      const data = response.json()
      console.log(data, 'signup')
      setUser(data)

    }

    function handleInputForm(e){
      const copyUserDetails = {...userDetails}
      copyUserDetails[e.target.name]=e.target.value
      setUserDetails(copyUserDetails)
    }


  return (
    <Form onSubmit={handleFormSubmit}>
      <Form.Group className="mb-3" controlId="formBasicFullName">
        <Form.Control type="text" placeholder="Enter your Name" name="fullname" value={userDetails.fullname} onChange={handleInputForm}/>
      </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Control type="text" placeholder="Enter username" name="username" value={userDetails.username} onChange={handleInputForm}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" name="password" value={userDetails.password} onChange={handleInputForm}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Confirm Password" name="password_confirmation" value={userDetails.password_confirmation} onChange={handleInputForm}/>
      </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Control type="email" placeholder="Enter Your Email Address" name="email" value={userDetails.email} onChange={handleInputForm}/>
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={3} placeholder="Enter Your Bio" name="bio" value={userDetails.bio} onChange={handleInputForm}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Control type="text" placeholder="Enter your Image Url" name="avatar_url" value={userDetails.avatar_url} onChange={handleInputForm}/>
      </Form.Group>

    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
    )
}

export default SignUp