import React from 'react';

import { Container } from '../components/container';
import { Header } from '../components/header';
import { Banner } from '../components/banner';
import { ContentContainer } from '../components/content';

class Home extends React.PureComponent {

  handleKicksPress = () => {
    this.props.navigation.navigate('Kicks')
  }

  render(){
    return(
      <Container>
        <Header />
        <Banner />
        <ContentContainer onPress={this.handleKicksPress}/>
      </Container>
    )
  }
};

export default Home;
