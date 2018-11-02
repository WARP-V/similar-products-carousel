import React from 'react';
import { shallow } from 'enzyme';
import Card from '../Card';

describe('Card component', () => {
  describe('shallow render constains the expected DOM elements', () => {
    const createCard = (product, clicker = () => {}) => shallow(
      <Card
        product={product || {}}
        handleClick={clicker}
      />,
    );

    it('should render', () => {
      const card = createCard();
      expect(card.exists()).toBe(true);
    });

    test('for a product with a single color option, text in section-1, view-1a says "1 Color"', () => {
      const card = createCard({ product_colors: 1 });
      expect(card.find('.view-1a').text()).toEqual('1 Color');
    });

    test('for a product with multiple color options, text in section-1, view-1a says "(n) Colors"', () => {
      const card = createCard({ product_colors: 5 });
      expect(card.find('.view-1a').text()).toEqual('5 Colors');
    });

    test('for a product with zero reviews, text in section-1, view-1b contains the same text as view-1a', () => {
      const card = createCard({ reviews_cnt: 0 });
      expect(card.find('.view-1b').text()).toEqual(card.find('.view-1a').text());
    });

    test('for a product with at least 1 review, text in section-1, view-1b contains 5 stars in i DOM elements', () => {
      const card = createCard({ reviews_cnt: 1 });
      expect(card.find('.view-1b').find('i').length).toEqual(5);
    });

    test('click handler passed down from App fires correctly', () => {
      const mockFunc = jest.fn();
      const card = createCard({}, mockFunc);
      card.find('button').simulate('click');
      expect(mockFunc).toHaveBeenCalledTimes(1);
    });
  });
});
