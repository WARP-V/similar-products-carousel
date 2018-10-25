import React from 'react';

const Card = (props) => {
  console.log(props.product)
  return (
    <div className="shoe">
      <div className="image-holder">
        <img src={ props.product.image_source }></img>
      </div>
      <div className="text-holder">

      </div>
    </div>
  );
}


export default Card