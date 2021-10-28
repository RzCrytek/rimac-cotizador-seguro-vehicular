import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

import Logo from '../../images/logo-rimac.svg';
import IconPhone from '../../images/icons/phone.svg';

const Header = ({ home }) => {
  return (
    <header id="header" className={home ? 'home' : ''}>
      <div className="container">
        <Link to="/">
          <picture>
            <img src={Logo} alt="Logo Rimac" />
          </picture>
        </Link>

        <div className="options">
          <p>¿Tienes alguna duda?</p>
          <a href="tel:014116001" target="_blank" rel="noreferrer">
            <img src={IconPhone} alt="Teléfono" />
            (01) 411 6001
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
