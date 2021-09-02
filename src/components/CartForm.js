import React from 'react'
import Counter from './Counter'
import { Col, Row } from 'react-bootstrap'

export default function CartForm() {

    const handleClickDozen = (e) => {
        e.preventDefault();
        
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <Row>
                <Col>
                    <span className="">Homemade Strawberry Preserve</span>
                    <Counter name="empanadasStrawberry"/>
                </Col>
                <Col>
                    <button onClick={(e)=>{handleClickDozen()}}>Dozen</button>
                    {/* <button onClick={(e)=>{handleClick()}}>Half Dozen</button> */}
                </Col>
            </Row>
            <Row>
                <Col>
                    <span className="">Pinneaple Preserve</span>
                    <Counter name="empanadasPineapple"/>
                </Col>
                <Col>
                    <button onClick={(e)=>{handleClickDozen()}}>Dozen</button>
                    {/* <button onClick={(e)=>{handleClick()}}>Half Dozen</button> */}
                </Col>
            </Row>
            <Row>
                <Col>
                    <span className="">Nutella</span>
                    <Counter name="empanadasNutella"/>
                </Col>
                <Col>
                    <button onClick={(e)=>{handleClickDozen()}}>Dozen</button>
                    {/* <button onClick={(e)=>{handleClick()}}>Half Dozen</button> */}
                </Col>
            </Row>
            <Row>
                <Col>
                    <span className="">Cajeta(Milk Caramel)</span>
                    <Counter name="empanadasCajeta"/>
                </Col>
                <Col>
                    <button onClick={(e)=>{handleClickDozen()}}>Dozen</button>
                    {/* <button onClick={(e)=>{handleClick()}}>Half Dozen</button> */}
                </Col>
            </Row>
        </form>
    )
}
