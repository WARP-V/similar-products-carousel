import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

require('./../styles/slider.css');

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.slider = null;
  }

  render() {
    if (this.slider) {
      this.slider.style.transform = `translateX(${this.props.slideFrom / 3}%)`;
    }
    return (
      <ul id="slider" ref={(ref) => { this.slider = ref; }} style={{ transform: `translateX(${this.props.slideTo / 3}%)` }}>
        <li className="panel">
          {
            this.props.products.slice(0, 4).map(product => (
              <Card
                key={product.id}
                product={product}
                handleClick={this.props.handleClick}
              />
            ))
          }
        </li>
        <li className="panel">
          {
            this.props.products.slice(4, 8).map(product => (
              <Card
                key={product.id}
                product={product}
                handleClick={this.props.handleClick}
              />
            ))
          }
        </li>
        <li className="panel">
          {
            this.props.products.slice(8, 12).map(product => (
              <Card
                key={product.id}
                product={product}
                handleClick={this.props.handleClick}
              />
            ))
          }
        </li>
      </ul>
    );
  }
}

Slider.propTypes = {
  handleClick: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.any).isRequired,
  slideFrom: PropTypes.number.isRequired,
  slideTo: PropTypes.number.isRequired,
};

export default Slider;
