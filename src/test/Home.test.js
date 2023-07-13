import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../components/Home';

describe('Home component unit test', () => {
  test('Home Component Renders Properly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
