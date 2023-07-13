import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Calculator component unit test', () => {
  test('Calculator Component Renders Properly', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('The Calculator Component Contains The Display Component ', () => {
    render(<Calculator />);
    expect(screen.getByTestId('calculator')).toBeInTheDocument();
    expect(screen.getByText('Maths!', { selector: '.carrotColor' })).toBeInTheDocument();
  });
});
