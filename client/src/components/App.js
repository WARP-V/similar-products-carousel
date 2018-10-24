import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      'shoe': 'AV8068'
    };
  }

  render() {
    return (
      <div id="carousel">
        <h2>YOU MAY ALSO LIKE</h2>
      </div>
    );
  }

}

export default App;