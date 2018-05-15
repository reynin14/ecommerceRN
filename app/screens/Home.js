import React from 'react';

import { Container } from '../components/container';
import { Header } from '../components/header';
import { Banner } from '../components/banner';
import { ContentContainer } from '../components/content';

const Home = () => {
  return (
    <Container>
      <Header />
      <Banner />
      <ContentContainer />
    </Container>
  )
};

export default Home;
