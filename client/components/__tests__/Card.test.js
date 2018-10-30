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
      cardInstance = shallow(
        <Card {...props} />,
      );
      return cardInstance;
    };

    beforeEach(() => {
      props = {
        product: {
          id: undefined,
          product_sku: undefined,
          price_full: undefined,
          price_sale: undefined,
          product_line: undefined,
          product_cat: undefined,
          product_name: undefined,
          product_colors: undefined,
          image_source: undefined,
          image_view: undefined,
          reviews_avg: undefined,
          reviews_cnt: undefined,
        },
        handleClick: () => {},
      };
    });

    it('should render', () => {
      const card = createCard();
      expect(card.exists()).toBe(true);
    });

    test('for a product with a single color option, text in section-1, view-1a says "1 Color"', () => {
      props.product.product_colors = 1;
      const card = createCard();
      expect(card.find('.view-1a').text()).toEqual('1 Color');
    });

    test('for a product with multiple color options, text in section-1, view-1a says "(n) Colors"', () => {
      props.product.product_colors = 5;
      const card = createCard();
      expect(card.find('.view-1a').text()).toEqual('5 Colors');
    });

    test('for a product with zero reviews, text in section-1, view-1b contains the same text as view-1a', () => {
      props.product.reviews_cnt = 0;
      const card = createCard();
      expect(card.find('.view-1b').text()).toEqual(card.find('.view-1a').text());
    });

    test('for a product with at least 1 review, text in section-1, view-1b contains 5 stars in i DOM elements', () => {
      props.product.reviews_cnt = 1;
      const card = createCard();
      expect(card.find('.view-1b').find('i').length).toEqual(5);
    });
  });
});
