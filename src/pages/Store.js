import React from 'react'
import CartForm from '../components/CartForm';
import popsicles from "../images/projectImg/convertedPhotos/valentinesTheme.jpeg";

export default function Store() {
    return (
        <div className="storeForm">
            <h4>Store</h4>
            <img alt="popsicles" src={popsicles} className="popsicles"/>
            <br />
            <span>It's the little things</span>
            <hr />
            <CartForm />
        </div>
    )
}
