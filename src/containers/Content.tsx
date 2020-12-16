import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import About from './About';
import Blog from './Blog';
import Home from './Home';
import Modeling from './Modeling';
import Services from './Services';
import Theater from './Theater';
import VisualArt from './VisualArt';
import NewUpload from '../components/NewUpload';

export default function Content() {
  return (
    <Container fluid className='h-100'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/blog' component={Blog} />
        <Route path='/about' component={About} />
        <Route path='/modeling' component={Modeling} />
        <Route path='/theater' component={Theater} />
        <Route path='/services' component={Services} />
        <Route path='/visualart' component={VisualArt} />
        <Route path='/upload' component={NewUpload} />
      </Switch>
    </Container>
  );
}
