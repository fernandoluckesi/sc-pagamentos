import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa';
import logoColor from "../../images/logo-color.png";
import ModalMenu from "../ModalMenu";



const Header = ({ changeSection }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClickShowMenu = () => setShowMenu(!showMenu);

  return (
    <div className="headerMainContainer">
      <nav className="headerNavBar">
        <img
          src={logoColor}
          alt="sc pagamentos logo"
          className="headerLogo"
        />
        <div className="headerNavLinks">

          <Link to="/trade">Trade</Link>
          <Link to="/carteira">Carteira</Link>
        </div>
        <div className="headerIconPerfilAccount"  >
          <FaUserCircle
            color='#ffff'
            onClick={handleClickShowMenu}

            size={32}
          />
        </div>
      </nav>
      {
        showMenu &&
        <ModalMenu />
      }
    </div>
  )
};

export default Header;
