import React from 'react';
import { shallow } from 'enzyme';
import Slider from '../Slider';

describe('Slider component', () => {
  describe('shallow render constains the expected DOM elements', () => {
    let p;
    const createSlider = (products, clicker = () => {}, slideTo, slideFrom) => shallow(
      <Slider
        products={products || [p, p, p, p, p, p, p, p, p, p, p, p, p, p]}
        handleClick={clicker}
        slideTo={slideTo || 0}
        slideFrom={slideFrom || 0}
      />,
    );


    beforeEach(() => { p = {}; });

    it('should render', () => {
      const slider = createSlider();
      expect(slider.exists()).toBe(true);
    });

    it('should have an inner ul element rendered', () => {
      const slider = createSlider();
      expect(slider.find('ul').length).toEqual(1);
    });

    it('should have three li elements rendered within the ul', () => {
      const slider = createSlider();
      expect(slider.find('ul').first().find('li').length).toEqual(3);
    });
  });
});
