import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      shoe: 'AV8068',
    };
  }

  render() {
    return (
      <div id="carousel">
        <h2>YOU MAY ALSO LIKE</h2>
        <div id="outer-wrapper">
          <i className="material-icons prev">navigate_before</i>
          <div id="inner-wrapper">
            <ul id="slider">
              <li className="panel">
                <div className="shoe">
                  <div className="image-holder" />
                  <div className="text-holder" />
                </div>
                <div className="shoe">
                  <div className="image-holder" />
                  <div className="text-holder" />
                </div>
                <div className="shoe">
                  <div className="image-holder" />
                  <div className="text-holder" />
                </div>
                <div className="shoe">
                  <div className="image-holder" />
                  <div className="text-holder" />
                </div>
              </li>
              <li className="panel">
                <div className="shoe">
                  <div className="image-holder" />
                  <div className="text-holder" />
                </div>
                <div className="shoe">
                  <div className="image-holder" />
                  <div className="text-holder" />
                </div>
                <div className="shoe">
                  <div className="image-holder" />
                  <div className="text-holder" />
                </div>
                <div className="shoe">
                  <div className="image-holder" />
                  <div className="text-holder" />
                </div>
              </li>
              <li className="panel">
                <div className="shoe">
                  <div className="image-holder" />
                  <div className="text-holder" />
                </div>
                <div className="shoe">
                  <div className="image-holder" />
                  <div className="text-holder" />
                </div>
                <div className="shoe">
                  <div className="image-holder" />
                  <div className="text-holder" />
                </div>
                <div className="shoe">
                  <div className="image-holder" />
                  <div className="text-holder" />
                </div>
              </li>
            </ul>
          </div>
          <i className="material-icons next">navigate_next</i>
        </div>
      </div>
    );
  }
}

export default App;
