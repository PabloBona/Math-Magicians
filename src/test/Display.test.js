import React from 'react';
import renderer from 'react-test-renderer';
import Display from '../components/Display';

describe('Display component unit test', () => {
  test('Display Component Renders Properly', () => {
    const calculatorData = {
      total: '10',
      next: '5',
      operation: '+',
    };
    const tree = renderer.create(<Display calculatorData={calculatorData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Display Component Renders Default Value Properly', () => {
    const tree = renderer.create(<Display />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
