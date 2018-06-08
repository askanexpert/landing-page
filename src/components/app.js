import React, { Component } from 'react';

import Section from '../components/section';
import Header from '../components/header';
import Footer from '../containers/footer';

export default class App extends Component {
  render() {
    return (
      <div className="aae__container">
        <Header/>
        <Section/>
        <Section/>
        <Section/>
        <Section/>
        <Footer/>
      </div>
    );
  }
}
