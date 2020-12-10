import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

export default function Navigation() {
  return (
    <Container>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/visualart'>Visual Art</Link>
        </li>
        <li>
          <Link to='/modeling'>Modelind</Link>
        </li>
        <li>
          <Link to='/theater'>Theater</Link>
        </li>
        <li>
          <Link to='/services'>Services</Link>
        </li>
        <li>
          <Link to='/blog'>Blog</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </Container>
  );
}
