import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className="navbar">
            <Container>
                <Navbar.Brand href="#home">Dolce Desserts</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link>
                            <Nav.Link>Menu</Nav.Link>
                        </Link>
                        <Link>
                        <Nav.Link>Past Events</Nav.Link>
                        </Link>
                        <NavDropdown title="Something" id="collasible-nav-dropdown">
                            <Link>
                            <NavDropdown.Item>Action</NavDropdown.Item>
                            </Link>
                            <Link>
                            <NavDropdown.Item>Another action</NavDropdown.Item>
                            </Link>
                            <Link>
                            <NavDropdown.Item>Something</NavDropdown.Item>
                            </Link>
                            <NavDropdown.Divider />
                            <Link>
                            <NavDropdown.Item>Separated link</NavDropdown.Item>
                            </Link>
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
