import React from 'react';

import Card from './Card.jsx';

const Slider = (props) => {
  return (
    <div id="inner-wrapper">
      <ul id="slider">
        <li className="panel" >
          {
            props.products.slice(0, 4).map((product, i) => ( <Card key={ 0 + i } product={ product } /> ))
          }
        </li>
        <li className="panel">
          {
            props.products.slice(4, 8).map((product, i) => ( <Card key={ 4 + i } product={ product } /> ))
          }
        </li>
        <li className="panel">
          {
            props.products.slice(8, 12).map((product, i) => ( <Card key={ 8 + i } product={ product } /> ))
          }
        </li>
      </ul>
    </div>
  );
}

export default Slider;

