import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MenuCard from '../components/MenuCard'

export default function Menu() {
    return (
        <Container className="menu">
            <Row>
                <Col>
                    <MenuCard title="Empanadas" />
                </Col>
                <Col>
                    <MenuCard title="Strawberries" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <MenuCard title="Cookies" />
                </Col>
                <Col>
                    <MenuCard title="Mini Pound Cake" />
                </Col>
            </Row>
        </Container>
    )
}
