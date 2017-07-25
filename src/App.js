import React, { Component } from 'react';
import PropTypes from 'prop-types';
class App extends Component {
  render() {
    return (
      <div className="App">
        我是app
        {this.props.children}
      </div>
    );
  }
}
App.propTypes = {
  children: PropTypes.element
};

export default App;
