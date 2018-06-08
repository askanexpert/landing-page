import React, { Component } from 'react';

import Section from '../components/section';
import Header from '../components/header';
import Footer from '../containers/footer';

import * as Constants from '../utils/utils';

export default class App extends Component {

  render() {
    return (
      <div className="aae__container">
        <Header/>
        <Section
          image={Constants.sectionData[0].image}
          title={Constants.sectionData[0].title}
          description={Constants.sectionData[0].description}/>
        <Section
          image={Constants.sectionData[1].image}
          title={Constants.sectionData[1].title}
          description={Constants.sectionData[1].description}/>
        <Section
          image={Constants.sectionData[2].image}
          title={Constants.sectionData[2].title}
          description={Constants.sectionData[2].description}/>
        <Section
          image={Constants.sectionData[3].image}
          title={Constants.sectionData[3].title}
          description={Constants.sectionData[3].description}/>

        <Footer/>
      </div>
    );
  }
}
