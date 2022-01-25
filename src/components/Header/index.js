import React, {useState} from "react";

import logoColor from "../../images/logo-color.png";

const Header = ({ changeSection }) => {
  const [showMenu, setShowMenu] = useState(false)
  return (
  <div className="bg-dark fixed-top sc-header">
    <nav className="container d-flex justify-content-between align-items-end py-3">
      <img
        src={logoColor}
        alt="sc pagamentos logo"
        className="col-2"
      />
      <div className="d-flex text-light col-8 justify-content-center">
        <button button className="sc-button-header" type="button" onClick={() => changeSection("trade")}>Trade</button>
        <button button className="sc-button-header" type="button" onClick={() => changeSection("wallet")}>Carteira</button>
      </div>
      <div className="col-2">
      <i class="fa fa-user-circle"></i>
      </div>
    </nav>
  </div>
)};

export default Header;
