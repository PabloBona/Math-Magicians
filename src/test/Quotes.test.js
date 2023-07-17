import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Quotes from '../components/Quotes';

describe('Quotes component unit test', () => {
  test('Quotes Component Renders Properly', () => {
    const tree = renderer.create(<Quotes />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Quotes Component Displays Loading', () => {
    render(<Quotes />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
