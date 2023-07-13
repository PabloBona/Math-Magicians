import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import Quotes from '../components/Quotes';

describe('Quotes component unit test', () => {
  test('Quotes Component Renders Loading State Properly', () => {
    const tree = renderer.create(<Quotes />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Quotes Component Renders Error State Properly', () => {
    const error = 'Error fetching quotes.';
    const tree = renderer.create(<Quotes error={error} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Quotes Component Renders Quotes Properly', () => {
    const quotes = [
      {
        quote: 'Quote 1',
        author: 'Author 1',
      },
      {
        quote: 'Quote 2',
        author: 'Author 2',
      },
    ];
    const tree = renderer.create(<Quotes quotes={quotes} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Quotes Component Renders No Quotes Available State Properly', () => {
    const quotes = [];
    const tree = renderer.create(<Quotes quotes={quotes} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
