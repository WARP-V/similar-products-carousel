import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from '../Card';

Enzyme.configure({ adapter: new Adapter() });

describe('Card component', () => {
  describe('shallow render constains the expected DOM elements', () => {
    let props;
    let cardInstance;

    const createCard = () => {
      if (!cardInstance) {
        cardInstance = shallow(
          <Card {...props} />,
        );
      }
      return cardInstance;
    };

    beforeEach(() => {
      props = {
        product: {
          id: '',
          product_sku: '',
          price_full: 999,
          price_sale: null,
          product_line: '',
          product_name: '',
          image_source: '',
          image_view: '',
        },
        handleClick: () => {},
      };
    });

    it('should render', () => {
      const card = createCard();
      expect(card.exists()).toBe(true);
    });
  });
});
