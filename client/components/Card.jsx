import React from 'react';
import PropTypes from 'prop-types';

const Card = props => (
  <div className="shoe">
    <button type="button" onClick={() => { props.handleClick(props.product.product_sku); }}>
      <div className="image-holder">
        <img src={props.product.image_source} alt="" />
      </div>
      <div className="text-holder">
        <div className="section-1">
          <span>4 Colors</span>
        </div>
        <div className="section-2">
          <span className="product">{ props.product.product_name }</span>
          <span>{ props.product.product_line }</span>
          {
            props.product.price_sale !== null
            ? (
              <div className="test">
                <span className="price slashed">{ `$${props.product.price_full}` }</span>
                <span className="price">{ `$${props.product.price_sale}` }</span>
              </div>
            )
            : <span className="price">{ `$${props.product.price_full}` }</span>
          }
        </div>
      </div>
    </button>
  </div>
);

Card.propTypes = {
  handleClick: PropTypes.func.isRequired,
  product: PropTypes.shape({
    id: PropTypes.number,
    product_sku: PropTypes.string,
    price_full: PropTypes.number,
    price_sale: PropTypes.number,
    product_line: PropTypes.string,
    product_name: PropTypes.string,
    image_source: PropTypes.string,
    image_view: PropTypes.string,
  }).isRequired,
};

export default Card;
