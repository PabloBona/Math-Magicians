import React from 'react';
import '../App.css';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-collapse-down header bg-black">
    <div className="container bg-black py-2">
      <h1 className="text-center text-light">
        Math
        {' '}
        <span className="carrot">Magicians</span>
      </h1>
      <button className="navbar-toggler bg-body-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon bg-body-secondary" />
      </button>
      <div className="collapse navbar-collapse justify-content-end bg-black" id="navbarNavAltMarkup">
        <div className="navbar-nav bg-black">
          <a className="nav-link text-light separate fs-5 header-carrot" aria-current="page" href="/">Home</a>
          <a className="nav-link text-light separate fs-5 header-carrot" href="/calc">Calculator</a>
          <a className="nav-link text-light separate fs-5 header-carrot" href="/quotes">Quotes</a>
        </div>
      </div>
    </div>
  </nav>
);

export default Header;
