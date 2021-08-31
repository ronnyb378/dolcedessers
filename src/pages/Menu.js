import React from 'react'
import { Container } from 'react-bootstrap'
import MenuCard from '../components/MenuCard'

export default function Menu() {
    return (
        <Container className="menu">
            <MenuCard title="Empanadas"/>
            <MenuCard title="Strawberries"/>
            <MenuCard title="Cookies"/>
            <MenuCard title="Mini Pound Cake"/>
        </Container>
    )
}
