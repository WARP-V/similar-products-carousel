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
      id: PropTypes.number,
      product_sku: PropTypes.string.isRequired,
      price_full: PropTypes.number.isRequired,
      price_sale: PropTypes.number,
      product_line: PropTypes.string.isRequired,
      product_cat: PropTypes.number.isRequired,
      product_colors: PropTypes.number.isRequired,
      product_name: PropTypes.string.isRequired,
      image_source: PropTypes.string.isRequired,
      image_view: PropTypes.string.isRequired,
      reviews_avg: PropTypes.number.isRequired,
      reviews_cnt: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Slider;
