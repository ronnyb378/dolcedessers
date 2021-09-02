import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import cartLogo from '../images/shopping-cart-outline.svg'

export default function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" className="navbar">
            <Container>
                <Navbar.Brand href="/">Dolce Desserts</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/menu">Menu</Nav.Link>
                        <Nav.Link href="/">Past Events</Nav.Link>
                        <NavDropdown title="Something" id="collasible-nav-dropdown">
                            <NavDropdown.Item><Link to="/">Action</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/">Another action</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/">Something</Link></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item><Link to="/">FAQ</Link></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/menu/cart"><img src={cartLogo} alt="Shopping Cart" className="shopping-cart"/></Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Login
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
