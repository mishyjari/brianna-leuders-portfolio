import React from 'react';
import { Carousel, Image } from 'react-bootstrap';

export default function ImageGallery(props: any) {
  const images = [
    {
      src: 'http://lueders.mishyjari.com/assets/bflower.jpg',
      thumbnail:
        'http://lueders.mishyjari.com/assets/thumbnails/bflower_thumb.jpeg',
      title: 'Title01',
      caption: 'Lorem Ipsum',
    },
    // {
    //   src: 'http://lueders.mishyjari.com/assets/inktober01.jpg',
    //   thumbnail:
    //     'http://lueders.mishyjari.com/assets/thumbnails/inktober01_thumb.jpeg',
    //   title: 'Title02',
    //   caption: 'Lorem Ipsum',
    // },
    // {
    //   src: 'http://lueders.mishyjari.com/assets/modelling01.png',
    //   thumbnail:
    //     'http://lueders.mishyjari.com/assets/thumbnails/modelling01_thumb.jpeg',
    //   title: 'Title03',
    //   caption: 'Lorem Ipsum',
    // },
    // {
    //   src: 'http://lueders.mishyjari.com/assets/theater01.jpg',
    //   thumbnail:
    //     'http://lueders.mishyjari.com/assets/thumbnails/theater01_thumb.jpeg',
    //   title: 'Title04',
    //   caption: 'Lorem Ipsum',
    // },
  ];
  return (
    <Carousel>
      {images.map(image => {
        return (
          <Carousel.Item key={image.title}>
            <Image src={image.src} alt={image.title} />
            <Carousel.Caption>
              <h3>{image.title}</h3>
              <p>{image.caption}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
