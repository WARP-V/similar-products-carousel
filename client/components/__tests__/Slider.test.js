import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Slider from '../Slider';

Enzyme.configure({ adapter: new Adapter() });

describe('Slider component', () => {
  
  describe('shallow render constains the expected DOM elements', () => {
    let props;
    let sliderInstance;
    const createSlider = () => {
      if (!sliderInstance) {
        sliderInstance = shallow(
          <Slider {...props} />,
        );
      }
      return sliderInstance;
    };

    beforeEach(() => {
      props = {
        products: new Array(12),
        handleClick: () => {},
      };
    });

    it('should render', () => {
      const slider = createSlider();
      expect(slider.exists()).toBe(true);
    });

    it('should have an inner ul element rendered', () => {
      const slider = createSlider();
      const outerdiv = slider.find('div').first();
      expect(outerdiv.find('ul').length).toEqual(1);
    });

    it('should have three li elements rendered within the ul', () => {
      const slider = createSlider();
      const outerdiv = slider.find('div').first();
      expect(outerdiv.find('li').length).toEqual(3);
    });
  });

});