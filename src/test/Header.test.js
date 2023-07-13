import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../components/Header';

describe('Header component unit test', () => {
  test('Header Component Renders Properly', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
