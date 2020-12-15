import React from 'react';
import { Router } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { createBrowserHistory } from 'history';

import '../styles/style.min.css';

import Header from '../components/Header';
import Content from '../containers/Content';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

function App() {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Container className='App' fluid>
        <Col className='header'>
          <Header />
        </Col>

        <Row className='body'>
          <Col sm={12} md={3} lg={2} className='navigation'>
            <Navigation />
          </Col>
          <Col sm={12} md={9} lg={10} className='content-primary'>
            <Content />
          </Col>
        </Row>

        <Row className='footer'>
          <Footer />
        </Row>
      </Container>
    </Router>
  );
}

export default App;
