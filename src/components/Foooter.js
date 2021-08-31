import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

export default function Foooter() {
    return (
        <div>
            <Navbar className="footer">
                <Nav.Item>Instagram Icon</Nav.Item>
                <Nav.Item>Twitter</Nav.Item>
                <Nav.Item>Yelp</Nav.Item>
            </Navbar>
        </div>
    )
}
