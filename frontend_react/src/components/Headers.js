import React from 'react'
import { Container, Nav, Navbar} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'

function Headers() {
  return (
    <header>
        <Navbar bg="dark" variant='dark' data-bs-theme="dark" expand='ig' collapseOnSelect>
            <Container>
            <LinkContainer to='/'>
              <Navbar.Brand>Pro Shop</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id ="basic-navbar-nav">
                <Nav className="mr-auto">

                  <LinkContainer to='/cart'>
                    <Nav.Link><i className="fas fa-shopping-cart"></i>cart</Nav.Link>
                  </LinkContainer>

                  <LinkContainer to='/login'>
                    <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
                  </LinkContainer>
                  
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Headers
