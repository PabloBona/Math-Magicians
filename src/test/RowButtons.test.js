import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, screen } from '@testing-library/react';
import RowButtons from '../components/RowButtons';

describe('RowButtons component unit test', () => {
  const calculatorDataMock = {
    total: '0',
    next: null,
    operation: null,
  };
  const setCalculatorDataMock = jest.fn();
  const calculateMock = jest.fn();

  test('RowButtons Component Renders Properly', () => {
    const tree = renderer.create(
      <RowButtons
        calculatorData={calculatorDataMock}
        setCalculatorData={setCalculatorDataMock}
        calculate={calculateMock}
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('RowButtons Component Calls handleButtonClick on Button Click', () => {
    render(
      <RowButtons
        calculatorData={calculatorDataMock}
        setCalculatorData={setCalculatorDataMock}
        calculate={calculateMock}
      />,
    );

    fireEvent.click(screen.getByText('7'));
    fireEvent.click(screen.getByText('6'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByText('x'));

    expect(calculateMock).toHaveBeenCalledTimes(5);
    expect(calculateMock).toHaveBeenCalledWith(calculatorDataMock, '7');
    expect(calculateMock).toHaveBeenCalledWith(calculatorDataMock, 'x');
  });
});
