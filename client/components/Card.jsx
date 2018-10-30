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
          <span className="view-1a">{`${props.product.product_colors} Color${props.product.product_colors > 1 ? 's' : ''}`}</span>
          <span className="view-1b">
            {
              props.product.reviews_cnt === 0
                ? `${props.product.product_colors} Color${props.product.product_colors > 1 ? 's' : ''}`
                : (
                  <div>
                    <i className="material-icons">star_rate</i>
                    <i className="material-icons">star_rate</i>
                    <i className="material-icons">star_rate</i>
                    <i className="material-icons">star_rate</i>
                    <i className="material-icons">star_rate</i>
                    <text>{`(${props.product.reviews_cnt})`}</text>
                  </div>
                )
            }
          </span>
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
    id: PropTypes.number.isRequired,
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
  }).isRequired,
};

export default Card;
