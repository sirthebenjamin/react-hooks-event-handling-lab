import React, { Component } from 'react';

class EyesOnMe extends Component {
  componentDidMount() {
    // Add event listeners when the component is mounted
    const button = document.getElementById('eyesButton');
    const input = document.getElementById('eyesInput');
    
    button.addEventListener('focus', this.handleButtonFocus);
    button.addEventListener('blur', this.handleButtonBlur);

    input.addEventListener('focus', this.handleInputFocus);
    input.addEventListener('blur', this.handleInputBlur);
    input.addEventListener('input', this.handleInputChange);
  }

  componentWillUnmount() {
    // Clean up by removing event listeners when the component is unmounted
    const button = document.getElementById('eyesButton');
    const input = document.getElementById('eyesInput');
    
    button.removeEventListener('focus', this.handleButtonFocus);
    button.removeEventListener('blur', this.handleButtonBlur);

    input.removeEventListener('focus', this.handleInputFocus);
    input.removeEventListener('blur', this.handleInputBlur);
    input.removeEventListener('input', this.handleInputChange);
  }

  handleButtonFocus = () => {
    console.log('Good!');
  }

  handleButtonBlur = () => {
    console.log('Hey! Eyes on me!');
  }

  handleInputFocus = () => {
    console.log('Input in focus...');
  }

  handleInputBlur = () => {
    console.log('Input lost focus...');
  }

  handleInputChange = (event) => {
    console.log('Input value:', event.target.value);
  }

  render() {
    return (
      <div>
        <button id="eyesButton">
          Eyes on me
        </button>
        <input
          type="text"
          id="eyesInput"
          placeholder="Type here"
        />
      </div>
    );
  }
}

export default EyesOnMe;