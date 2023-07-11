/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-collapse-down">
    <div className="container">
      <h1 className="text-center text-light">Math Magicians</h1>
      <button className="navbar-toggler bg-body-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon bg-body-secondary" />
      </button>
      <div className="collapse navbar-collapse justify-content-end " id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link active text-light separate fs-5" aria-current="page" href="/">Home</a>
          <a className="nav-link text-light separate fs-5" href="/calc">Calculator</a>
          <a className="nav-link text-light separate fs-5" href="/quotes">Quotes</a>
        </div>
      </div>
    </div>
  </nav>
);

export default Header;
