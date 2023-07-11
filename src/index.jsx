import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import ErrorPage from './error-page';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/calc',
    element: <Calculator />,
  },
  {
    path: '/quotes',
    element: <Quotes />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header />
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
    ,
  </>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
