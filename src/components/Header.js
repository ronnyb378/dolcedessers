import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" className="navbar">
            <Container>
                <Navbar.Brand href="/">Dolce Desserts</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link to="/menu">Menu</Link></Nav.Link>
                        <Nav.Link><Link>Past Events</Link></Nav.Link>
                        <NavDropdown title="Something" id="collasible-nav-dropdown">
                            <NavDropdown.Item><Link>Action</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link>Another action</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link>Something</Link></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item><Link>FAQ</Link></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">About Us</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Login
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
