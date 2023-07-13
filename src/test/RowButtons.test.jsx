import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import RowButtons from '../components/RowButtons';

describe('RowButtons component unit test', () => {
  test('RowButtons Component Renders Properly', () => {
    const calculatorData = {
      total: '0',
      next: null,
      operation: null,
    };

    const setCalculatorData = jest.fn();
    const calculate = jest.fn();

    const tree = renderer
      .create(
        <RowButtons
          calculatorData={calculatorData}
          setCalculatorData={setCalculatorData}
          calculate={calculate}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
