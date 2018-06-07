import React, { Component } from 'react';
import Section from '../containers/section';

export default class App extends Component {
  render() {
    return (
      <div className="aae__container">
        <Section/>
        <Section/>
        <Section/>
      </div>
    );
  }
}
