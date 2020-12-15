import React from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';

import HomeCarousel from '../components/HomeCarousel';

import bioPortrait from '../assets/bflower.jpg';

export default function Home() {
  return (
    <Container className='home-content' fluid>
      <Row>
        <Col sm={12} lg={6} className='home-info-right'>
          <Row>
            <div className='info-text-container'>
              <p>
                Brianna Lueders is a multi-disciplinary artist working with
                movement, voice, music, illustration, and costume to create
                stories and spaces. Training includes devised ensemble theater
                at Double Edge, practitioner training with the International
                Association of Voice Movement Therapy, and many mentors across
                the spectrum.
              </p>
            </div>
          </Row>
        </Col>
        <Col sm={12} lg={6}>
          <Container fluid>
            <HomeCarousel />
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
