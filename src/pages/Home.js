import React from 'react'
import { Carousel, Card, Row } from 'react-bootstrap';
import { useState } from 'react';
import casinoStrawberries from '../images/projectImg/casinoStrawberry.MOV'
import popsicles from '../images/projectImg/convertedPhotos/bluePopsicles.jpeg'
import pinkStrawberries from '../images/projectImg/convertedPhotos/pinkStrawberries.jpeg'
import whiteCake from '../images/projectImg/convertedPhotos/whiteCake.jpeg'
import BreadPuns from '../components/BreadPuns';

export default function Home() {

    function ControlledCarousel() {
        const [index, setIndex] = useState(0);

        const handleSelect = (selectedIndex, e) => {
            setIndex(selectedIndex);
        };

        return (
            <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block popsicles"
                        src={popsicles}
                        alt="First slide"
                    />
                    <img
                        className="d-block popsicles background"
                        src={popsicles}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>It's the little things</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={pinkStrawberries}
                        alt="Second slide"
                    />
                    <img
                        className="d-block background"
                        src={pinkStrawberries}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Quality ingredeints</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={whiteCake}
                        alt="Third slide"
                    />
                    <img
                        className="d-block background"
                        src={whiteCake}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Quality products</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }

    return (
        <div>
            <ControlledCarousel />
            <Row className="welcome-row">
                <Card className="text-white welcome-card">
                    <Card.ImgOverlay>
                        <Card.Title>Welcome!</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Maybe a link button to the About Us page</Card.Text>
                        <BreadPuns />
                    </Card.ImgOverlay>
                </Card>
                <video autoPlay muted loop>
                    <source src={casinoStrawberries} />
                </video>
            </Row>

            {/* <div className="events">
                <h3>Previous Events/ Bouqets done</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non ante id nunc lacinia tristique ac ut felis. Nunc pulvinar sagittis nisi, eu auctor risus accumsan a. Cras id mi nibh. Aenean eget malesuada nisl, sed auctor tellus. In sit amet justo eu mi interdum semper. Nunc ut sem eu magna ullamcorper venenatis non at dui. Fusce eget lorem ornare, placerat nisl sed, ultrices libero. In lacinia a sapien non condimentum. Pellentesque tristique feugiat dui, sed eleifend felis bibendum et. Fusce sagittis tellus lectus, et finibus sapien faucibus ac. Nulla vitae ipsum lacus. Pellentesque volutpat ipsum in quam efficitur, accumsan iaculis diam lobortis. Vivamus vel fringilla eros. Donec ornare purus sed iaculis interdum.</p>
            </div> */}
        </div>
    )
}