import React, { Component } from 'react';
import Section from '../containers/section';
import Footer from '../containers/footer';
import Header from '../containers/header';

export default class App extends Component {
  render() {
    return (
      <div className="aae__container">
        <Header/>
        <Section/>
        <Footer/>
      </div>
    );
  }
}
