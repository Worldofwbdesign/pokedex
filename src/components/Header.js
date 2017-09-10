import React from 'react';
import logo from '../../static/img/logo.svg';

const Header = () =>
  <div className="header">
    <img className="header__logo" src={logo} alt="Logo"/>
    <div className="header__logo__descr">
      <h1 className="header__h1">React app boilerplate</h1>
      <p>Use this boilerplate to develop awesome React apps</p>
    </div>
  </div>


export default Header
