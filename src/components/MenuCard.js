import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function MenuCard(props) {
    const url = "/store/" + props.url
    const dessertDescription = props.dessertDescription
    const dessertPic = props.dessertPic
    console.log(dessertPic)
    return (
        <Card className="menu-card">
            <Card.Img variant="top" src={dessertPic} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {dessertDescription}
                </Card.Text>
            </Card.Body>
            <div className="d-grid gap-2">
                <Link to={url}>
                    <Button className="cart-button" size="lg">
                        Add to cart
                    </Button>
                </Link>
            </div>
        </Card>
    )
}
