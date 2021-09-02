import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { actionAdd, actionRemove } from '../redux/actions/dessert'


export default function Counter(props) {
    const desserts = useSelector((state) => state.dessert)
    // const dessertName = props.name  
    const dispatch = useDispatch();
    
    // const dessert = desserts

    const handleClickCountSub = (e) => {
        e.preventDefault();
        dispatch(actionRemove(props.name))
    }
    const handleClickCountAdd = (e) => {
        e.preventDefault();
        dispatch(actionAdd(props.name))
    }

    return (
        <div>
            <button onClick={handleClickCountSub}>-</button>
            {/* <button onClick={(e)=>setDessert(desserts - 1)}>-</button> */}
            <span>{desserts[props.name]}</span>
            <button onClick={handleClickCountAdd}>+</button>
        </div>
    )
}
