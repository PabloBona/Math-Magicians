import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '../components/Header';

describe('Header component unit test', () => {
  test('Header Component Renders Properly', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('The Header Component Displays Navigation Links', () => {
    render(<Header />);

    const homeLink = screen.getByText('Home');
    const calculatorLink = screen.getByText('Calculator');
    const quotesLink = screen.getByText('Quotes');

    expect(homeLink).toBeInTheDocument();
    expect(calculatorLink).toBeInTheDocument();
    expect(quotesLink).toBeInTheDocument();

    expect(homeLink).toHaveAttribute('href', '/');
    expect(calculatorLink).toHaveAttribute('href', '/calc');
    expect(quotesLink).toHaveAttribute('href', '/quotes');
  });
});
