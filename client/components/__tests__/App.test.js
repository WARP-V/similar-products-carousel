import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';

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
    it('should mount with state properties slideTo and slideFrom set to 0', () => {
      const app = shallow(<App />).instance();
      expect(app.state.slideTo).toEqual(0);
      expect(app.state.slideFrom).toEqual(0);
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
    test('slideRight adjusts slideTo state property to +100 at each invocation', () => {
      const app = shallow(<App />).instance();
      expect(app.state.slideTo).toEqual(0);
      app.slideRight();
      expect(app.state.slideTo).toEqual(100);
      app.slideRight();
      expect(app.state.slideTo).toEqual(200);
    });

    test('slideLeft adjusts slideTo state property to -100 at each invocation', () => {
      const app = shallow(<App />).instance();
      expect(app.state.slideTo).toEqual(0);
      app.slideLeft();
      expect(app.state.slideTo).toEqual(-100);
      app.slideLeft();
      expect(app.state.slideTo).toEqual(-200);
    });

    test('switchShoe adjusts the state property "productSku"', () => {
      const app = shallow(<App />).instance();
      expect(app.state.productSku).not.toEqual('NEWSKU-001');
      app.switchShoe('NEWSKU-001');
      expect(app.state.productSku).toEqual('NEWSKU-001');
    });

    test('switchShoe fires requestImgs', () => {
      const app = shallow(<App />).instance();
      const spy = jest.spyOn(app, 'requestImgs');
      app.switchShoe('NEWSKU-001');
      expect(spy).toHaveBeenCalledTimes(1);
    });

    test('requestImgs fires once on ComponentDidMount', () => {
      const app = mount(<App />).instance();
      const spy = jest.spyOn(app, 'requestImgs');
      app.componentDidMount();
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
