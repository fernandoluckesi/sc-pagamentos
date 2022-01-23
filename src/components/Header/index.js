import React from 'react';

const Header = ({changeSection}) => (
<nav className="navbar fixed-top bg-dark navbar-expand-md d-flex justify-content-around">
  <div className="navbar-logo text-light">Logo</div>
  <div className="d-flex text-light">
    <h2 onClick={() => changeSection('trade')}>Trade</h2>
    <h2 onClick={() => changeSection('wallet')}>Carteira</h2>
  </div>
  <div className="d-flex text-light">
    <h2>Profile</h2>
  </div>
</nav>
);

export default Header;
