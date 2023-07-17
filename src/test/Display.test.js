import React from 'react';
import renderer from 'react-test-renderer';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from '../components/Display';

describe('Display component unit test', () => {
  test('Display Component Renders Properly', () => {
    const tree = renderer.create(<Display />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('The Display Component Displays Result', () => {
    render(<Display calculatorData={{ total: '3.14' }} />);
    expect(screen.getByText('3.14', { exact: false })).toBeInTheDocument();
  });
});
