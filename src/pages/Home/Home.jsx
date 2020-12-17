import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../components/shared/Container';
//import { Test } from './Home.styles';

const Home = (props) => (
  <div className="HomeWrapper">
    <Container>
      <h2>Introduction</h2>
      <p>This little app - is combination of react routing, react redux, async ops, tokens, etc.</p>
      <p>To test it please <Link to='/register'>register</Link> or <Link to='/login'>login</Link></p>
    </Container>
  </div>
);


export default Home;
