import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MenuCard from '../components/MenuCard'

export default function Menu() {
    const empanaDes = "Flavourful pastry and filling with choices of homemade Strawberry and Pineapple preserve, or try it with Nutella or Cajeta"
    const chocoStrawDes = "Why pay top dollar for chocolate-covered strawberries when you can have fresh and classy strawberries. Bouqet?"
    const poundCakeDes= "White, dense, perhaps mini and simple but a delicious treat"
    const cookiesDes= "Ah yes... why wouldn't we have this"


    return (
        <Container className="menu">
            <Row>
                <Col>
                    <MenuCard title="Empanadas" url="empanadas" dessertDescription={empanaDes}/>
                </Col>
                <Col>
                    <MenuCard title="Strawberries" url="strawberries" dessertDescription={chocoStrawDes}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <MenuCard title="Mini Pound Cake" url="poundcake" dessertDescription={poundCakeDes}/>
                </Col>
                <Col>
                    <MenuCard title="Cookies" url="cookies" dessertDescription={cookiesDes}/>
                </Col>
            </Row>
        </Container>
    )
}
