import React from 'react';
import ReactDOM from 'react-dom';

import Slider from './Slider.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      product_sku: '310805-408',
      similar: [],
    };
  }

  componentDidMount() {
    axios.get('/similar?product_sku=' + this.state.product_sku)
      .then((res) => {
        this.setState({
          similar: res.data
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div id="carousel">
        <h2>YOU MAY ALSO LIKE</h2>
        <div id="outer-wrapper">
          <i className="material-icons prev">navigate_before</i>
            {
              this.state.similar.length > 0
              ? <Slider products={ this.state.similar } />
              : <div></div>
            }
          <i className="material-icons next">navigate_next</i>
        </div>
      </div>
    );
  }
}

export default App;
