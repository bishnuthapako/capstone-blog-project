import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'

function LeftSideBar() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
    </Nav>
  )
}

export default LeftSideBar