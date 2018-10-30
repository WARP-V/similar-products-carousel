import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('App component', () => {
  
  describe('shallow render constains the expected DOM elements', () => {
    it('should render', () => {
      const app = shallow(<App />);
      expect(app.exists()).toBe(true);
    });

    it('should have an inner div rendered', () => {
      const app = shallow(<App />);
      const outerdiv = app.find('div').first();
      expect(outerdiv.find('div').length).toBeGreaterThan(0);
    });

    it('should have two button elements rendered within the outerdiv div', () => {
      const app = shallow(<App />);
      const outerdiv = app.find('div').first();
      expect(outerdiv.find('button').length).toEqual(2);
    });
  });

  describe('constructor attaches expected properties and methods', () => {
    it('should mount with a property slideTrack set to 0', () => {
      const app = shallow(<App />).instance();
      expect(app.slideTrack).toEqual(0);
    });

    it('should mount with methods slideLeft and slideRight', () => {
      const app = shallow(<App />).instance();
      expect(typeof app.slideLeft).toEqual('function');
      expect(typeof app.slideRight).toEqual('function');
    });

    it('should mount with method switchShoe', () => {
      const app = shallow(<App />).instance();
      expect(typeof app.switchShoe).toEqual('function');
    });
  });

  describe('methods attached to instance function correctly', () => {
    test('slideRight adjusts slideTrack property to +1 at each invocation', () => {
      const app = shallow(<App />).instance();
      expect(app.slideTrack).toEqual(0);
      app.slideRight();
      expect(app.slideTrack).toEqual(1);
      app.slideRight();
      expect(app.slideTrack).toEqual(2);
    });

    test('slideLeft adjusts slideTrack property to -1 at each invocation', () => {
      const app = shallow(<App />).instance();
      expect(app.slideTrack).toEqual(0);
      app.slideLeft();
      expect(app.slideTrack).toEqual(-1);
      app.slideLeft();
      expect(app.slideTrack).toEqual(-2);
    });

    test('switchShoe adjusts the state variable "product_sku"', () => {
      const app = shallow(<App />).instance();
      expect(app.state.product_sku).not.toEqual('NEWSKU-001');
      app.switchShoe('NEWSKU-001');
      expect(app.state.product_sku).toEqual('NEWSKU-001');
    });
  });
  
});
