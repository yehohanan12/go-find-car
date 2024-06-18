import React from 'react';

function Header() {
  return (
    <header className="top-header">
      <div className="header-content left">
        <span className="brand-name">Go Find Car</span>
      </div>
      <div className="header-content right">
        <span className="user-greeting">
          <i className="fas fa-user"></i> Bonjour, Identifiez-vous
        </span>
        <span className="language">
          <img src="/images/flag.png" alt="French flag" /> FR
        </span>
        <span className="help">
          <i className="fas fa-info-circle"></i> Aide
        </span>
        <span className="menu">
          <i className="fas fa-bars"></i> Menu
        </span>
      </div>
    </header>
  );
}

export default Header;
