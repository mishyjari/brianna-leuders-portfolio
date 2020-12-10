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
        <Col>
          <Header />
        </Col>

        <Row>
          <Col sm={2}>
            <Navigation />
          </Col>
          <Col sm={10}>
            <Content />
          </Col>
        </Row>

        <Col>
          <Footer />
        </Col>
      </Container>
    </Router>
  );
}

export default App;
