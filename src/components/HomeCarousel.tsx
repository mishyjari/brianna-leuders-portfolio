import React from 'react';
import { Carousel, Image } from 'react-bootstrap';

import inktober from '../assets/inktober01.jpg';
import modelling from '../assets/modelling01.png';
import theater from '../assets/theater01.jpg';

export default function HomeCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image src={String(inktober)} alt='Inktober' />
        <Carousel.Caption>
          <h3>Inktober</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={String(modelling)} alt='Modelln g' />
        <Carousel.Caption>
          <h3>Modelling</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={String(theater)} alt='Theater' />
        <Carousel.Caption>
          <h3>Theater</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
