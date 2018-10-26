import React from 'react';
import $ from 'jquery';
import axios from 'axios';

import Slider from './Slider';

class App extends React.Component {
  constructor() {
    super();
    this.slideTrack = 0;
    this.slideLeft = this.slideLeft.bind(this);
    this.slideRight = this.slideRight.bind(this);
    this.switchShoe = this.switchShoe.bind(this);
    this.state = {
      product_sku: '310805-408',
      products: [],
    };
  }

  componentDidMount() {
    this.requestImgs();
  }

  requestImgs() {
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
    this.slideTrack -= 1;
    $('#slider').css({ transform: `translate(${this.slideTrack * 100 / 3}%, 0px)` });
    if (this.slideTrack === -2) $('button.next').addClass('inviz');
    else $('button.next').removeClass('inviz');
    if (this.slideTrack === 0) $('button.prev').addClass('inviz');
    else $('button.prev').removeClass('inviz');
  }

  slideRight() {
    this.slideTrack += 1;
    $('#slider').css({ transform: `translate(${this.slideTrack * 100 / 3}%, 0px)` });
    if (this.slideTrack === -2) $('button.next').addClass('inviz');
    else $('button.next').removeClass('inviz');
    if (this.slideTrack === 0) $('button.prev').addClass('inviz');
    else $('button.prev').removeClass('inviz');
  }

  switchShoe(sku) {
    this.requestImgs();
    this.setState({
      product_sku: sku,
    });
  }

  render() {
    console.log('rendering')
    return (
      <div id="carousel">
        <h1>YOU MAY ALSO LIKE</h1>
        <div id="outer-wrapper">
          <button className="prev inviz" type="button" onClick={this.slideRight}>
            <i className="material-icons prev">navigate_before</i>
          </button>
          {
            this.state.products.length > 0
              ? <Slider products={this.state.products} handleClick={this.switchShoe} />
              : <div />
          }
          <button className="next" type="button" onClick={this.slideLeft}>
            <i className="material-icons next">navigate_next</i>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
