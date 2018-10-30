import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Slider = props => (
  <div id="inner-wrapper">
    <ul id="slider">
      <li className="panel">
        {
          props.products.slice(0, 4).map(product => (
            <Card
              key={product.id}
              product={product}
              handleClick={props.handleClick}
            />
          ))
        }
      </li>
      <li className="panel">
        {
          props.products.slice(4, 8).map(product => (
            <Card
              key={product.id}
              product={product}
              handleClick={props.handleClick}
            />
          ))
        }
      </li>
      <li className="panel">
        {
          props.products.slice(8, 12).map(product => (
            <Card
              key={product.id}
              product={product}
              handleClick={props.handleClick}
            />
          ))
        }
      </li>
    </ul>
  </div>
);

Slider.propTypes = {
  handleClick: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Slider;
