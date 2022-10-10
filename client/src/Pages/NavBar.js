import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar({user, onLogOut}) {

  function handleLogOut(){
    fetch("/logout", {
      method: "DELETE",
    }).then(()=>onLogOut())
  }


  return (
    <>

    <Navbar bg="light" expand="lg">
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
            navbarScroll
          >
            {/* <Nav.Link as={Link} to="/">Home</Nav.Link> */}
          {user ? null : <Nav.Link as={Link} to="/signup" className="fw-bold fs-5">Create account</Nav.Link>}
            {user ? 
            <Button onClick={handleLogOut} bg-light>Sign Out</Button> : <Nav.Link as={Link} to="/login" className="fw-bold fs-5">Login</Nav.Link>}
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