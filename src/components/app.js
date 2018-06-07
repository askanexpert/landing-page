import React, { Component } from 'react';
import Section from '../containers/section';
import Footer from '../containers/footer';

export default class App extends Component {
  render() {
    return (
      <div className="aae__container">
        <Section/>
        <Section/>
        <Footer/>
      </div>
    );
  }
}
