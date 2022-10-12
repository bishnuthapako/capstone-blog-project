import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// import { UsersContext } from '../App'


function NavBar({user, onLogOut}) {

 
  // const user = useContext(UsersContext)
  console.log(user, 'userdetails')

  function handleLogOut(){
    fetch("/logout", {
      method: "DELETE",
    }).then(()=>onLogOut())
  }


  return (
    <>

    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><Link to="/"><h2>BLOG APP</h2></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
          {user ? <>
               <Nav.Link as={Link} to="/post" className="fw-bold fs-5">Create post</Nav.Link>

            <div>
              <Button variant="secondary" onClick={handleLogOut}>Logout</Button>
            </div>
          
            </>: (<>
          <Nav.Link as={Link} to="/signup" className="fw-bold fs-5">Create account</Nav.Link>
          
          <Nav.Link as={Link} to="/login" className="fw-bold fs-5">Login</Nav.Link></>)}
            {/* <img src="https://robohash.org/voluptasquisnihil.png?size=300x300&set=set1" className="avatar-group" /> */}
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>

    </div>
    </>
  )
}

export default NavBar