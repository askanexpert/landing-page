import React, { Component } from 'react';

import Section from '../components/section';
import Header from '../components/header';
import Footer from '../containers/footer';

import * as Constants from '../utils/data';

export default class App extends Component {

  render() {
    return (
      <div className="aae__container">
        <Header
          logoImage={Constants.headerData.logoImage}
          title={Constants.headerData.title}
          mainSplashImage={Constants.headerData.mainSplashImage}/>
        <Section
          sectionNum='first'
          image={Constants.sectionData[0].image}
          title={Constants.sectionData[0].title}
          description={Constants.sectionData[0].description}/>
        <Section
          sectionNum='second'
          image={Constants.sectionData[1].image}
          title={Constants.sectionData[1].title}
          description={Constants.sectionData[1].description}/>
        <Section
          sectionNum='third'
          image={Constants.sectionData[2].image}
          title={Constants.sectionData[2].title}
          description={Constants.sectionData[2].description}/>
        <Footer
          title={Constants.footerData.title}
          notice={Constants.footerData.notice}/>
      </div>
    );
  }
}
