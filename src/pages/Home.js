import React from 'react'
import { Carousel, Card, Row } from 'react-bootstrap';
import { useState } from 'react';
import cupcakesImage from '../images/cupcakes.jpeg'
import greenGrass from '../images/greengrass.jpeg'
import cookiesBaking from '../images/BakingCookies.mp4'

export default function Home() {
    
    function ControlledCarousel() {
        const [index, setIndex] = useState(0);

        const handleSelect = (selectedIndex, e) => {
            setIndex(selectedIndex);
        };

        return (
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={cupcakesImage}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={cupcakesImage}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={cupcakesImage}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }

    return (
        <div>
            <ControlledCarousel />
            <Row className="welcome-row">
                <Card className="bg-dark text-white welcome-card">
                    <Card.Img src={greenGrass} alt="Card image"/>
                    <Card.ImgOverlay>
                        <Card.Title>Welcome!</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Maybe a link button to the About Us page</Card.Text>
                    </Card.ImgOverlay>
                </Card>
                <video autoPlay muted loop>
                    <source src={cookiesBaking} />
                </video>
            </Row>

            <div className="events">
                <h3>Previous Events/ Bouqets done</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non ante id nunc lacinia tristique ac ut felis. Nunc pulvinar sagittis nisi, eu auctor risus accumsan a. Cras id mi nibh. Aenean eget malesuada nisl, sed auctor tellus. In sit amet justo eu mi interdum semper. Nunc ut sem eu magna ullamcorper venenatis non at dui. Fusce eget lorem ornare, placerat nisl sed, ultrices libero. In lacinia a sapien non condimentum. Pellentesque tristique feugiat dui, sed eleifend felis bibendum et. Fusce sagittis tellus lectus, et finibus sapien faucibus ac. Nulla vitae ipsum lacus. Pellentesque volutpat ipsum in quam efficitur, accumsan iaculis diam lobortis. Vivamus vel fringilla eros. Donec ornare purus sed iaculis interdum.</p>
            </div>
            <div>
                <h3>Other local restaurant</h3>
                <ul>
                    <li>Restaurant Website</li>
                    <li>Restauratn Website</li>
                </ul>
            </div>
        </div>
    )
}