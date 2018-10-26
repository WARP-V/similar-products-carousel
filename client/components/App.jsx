import React from 'react';
import $ from 'jquery';
import axios from 'axios';

import Slider from './Slider';

class App extends React.Component {
  constructor() {
    super();
    this.slide = 0;
    this.state = {
      product_sku: '310805-408',
      products: [],
    };
  }

  componentDidMount() {
    axios.get(`/similar?product_sku=${this.state.product_sku}`)
      .then((res) => {
        this.setState({
          products: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  slideLeft() {
    this.slide -= 1;
    $('#slider').css({ transform: `translate(${this.slide * 100 / 3}%, 0px)` });
    if (this.slide === -2) $('button.next').addClass('inviz');
    else $('button.next').removeClass('inviz');
    if (this.slide === 0) $('button.prev').addClass('inviz');
    else $('button.prev').removeClass('inviz');
  }

  slideRight() {
    this.slide += 1;
    $('#slider').css({ transform: `translate(${this.slide * 100 / 3}%, 0px)` });
    if (this.slide === -2) $('button.next').addClass('inviz');
    else $('button.next').removeClass('inviz');
    if (this.slide === 0) $('button.prev').addClass('inviz');
    else $('button.prev').removeClass('inviz');
  }

  render() {
    return (
      <div id="carousel">
        <h1>YOU MAY ALSO LIKE</h1>
        <div id="outer-wrapper">
          <button className="prev inviz" type="button" onClick={this.slideRight.bind(this)}>
            <i className="material-icons prev">navigate_before</i>
          </button>
          {
            this.state.products.length > 0
              ? <Slider products={this.state.products} />
              : <div />
          }
          <button className="next" type="button" onClick={this.slideLeft.bind(this)}>
            <i className="material-icons next">navigate_next</i>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
