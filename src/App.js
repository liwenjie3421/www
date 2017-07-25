import './app.less';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LeftNav from './components/leftNav.react.js';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="header">
          <div className="logo">
            <img src={require('./overwatch-icon.png')} alt="" />
            <span>运营中心</span>
          </div>
        </div>
        <div className="container">
          <LeftNav />
          {this.props.children}
        </div>
        <div className="footer">
          @2017
        </div>
      </div>
    );
  }
}
App.propTypes = {
  children: PropTypes.element
};

export default App;
