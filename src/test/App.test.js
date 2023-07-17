import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import App from '../App';

describe('App component unit test', () => {
  test('App Component Renders Calculator Page Properly', () => {
    const tree = renderer
      .create(
        <MemoryRouter initialEntries={['/calc']}>
          <Routes>
            <Route path="/calc/*" element={<App />} />
          </Routes>
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('App Component Renders Quotes Page Properly', () => {
    const tree = renderer
      .create(
        <MemoryRouter initialEntries={['/quotes']}>
          <Routes>
            <Route path="/quotes/*" element={<App />} />
          </Routes>
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('App Component Renders Home Page Properly', () => {
    const tree = renderer
      .create(
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
