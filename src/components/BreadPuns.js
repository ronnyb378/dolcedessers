import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'

export default function BreadPuns() {
    const [breadpun, setBreadPun] = useState('')

    useEffect(()=>{
        fetch('https://my-bao-server.herokuapp.com/api/breadpuns')
        .then(res=>res.json())
        .then(data=>{
            setBreadPun(data)
        })
}, [])

    return (
        <Card.Title>
            {breadpun}
        </Card.Title>
    )
}
