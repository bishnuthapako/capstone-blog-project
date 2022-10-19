import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

function NavBar({user, setUser}) {


  function handleLogOut(){
    fetch("/logout", {method: "DELETE"}).then((r)=>{
      if(r.ok){
        setUser(null)
      }
    });
  }

  return (
    <>
 <Nav className="justify-content-center mt-5" activeKey="/home">
        <Nav.Item>
        <Nav.Link as={Link} to="/" className="fw-bold fs-5">Home</Nav.Link>
        </Nav.Item>
      {
        user ? <>
         <Nav.Item>
        <Nav.Link as={Link} to="/post" className="fw-bold fs-5">Create post</Nav.Link>
        </Nav.Item>
        <div>
              <Button variant="secondary" onClick={handleLogOut}>Logout</Button>
        </div>
        </> : <>
        
        <Nav.Item>
        <Nav.Link as={Link} to="/signup" className="fw-bold fs-5">SignUp Here</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link as={Link} to="/login" className="fw-bold fs-5">Login</Nav.Link>
        </Nav.Item>
        </>
      } 
 </Nav>
    </>
  )
}

export default NavBar