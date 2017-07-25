import React, { Component } from 'react';
import PropTypes from 'prop-types';
class App extends Component {
  render() {
    console.log(this.props.children);
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
