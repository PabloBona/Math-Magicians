import React from 'react';
import renderer from 'react-test-renderer';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../components/Home';

describe('Home component unit test', () => {
  test('Home Component Renders Properly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('The Home Components Contains Title', () => {
    render(<Home />);
    expect(screen.getByText('Welcome to our')).toBeInTheDocument();
  });
});
