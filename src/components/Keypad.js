import React, { Component } from 'react';

class Keypad extends Component {
  componentDidMount() {
    // Add event listener when the component is mounted
    document.getElementById('password').addEventListener('input', this.handleInputChange);
  }

  componentWillUnmount() {
    // Clean up by removing the event listener when the component is unmounted
    document.getElementById('password').removeEventListener('input', this.handleInputChange);
  }

  handleInputChange = (event) => {
    console.log('Entering password...', event.target.value);
  }

  render() {
    return (
      <div>
        <label htmlFor="password">Enter Password: </label>
        <input
          type="password"
          id="password"
        />
      </div>
    );
  }
}

export default Keypad;