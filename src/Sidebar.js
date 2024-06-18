import React from 'react';

function Sidebar() {
  return (
    <div className="sidebar">
      <img src="/images/logo.png" alt="Logo" className="logo" />
      <h2>Navigation</h2>
      <ul>
        <li><button className="link" onClick={() => window.location.href = '#'}>Accueil</button></li>
        <li><button className="link" onClick={() => window.location.href = '#'}>À propos</button></li>
        <li><button className="link" onClick={() => window.location.href = '#'}>Services</button></li>
        <li><button className="link" onClick={() => window.location.href = '#'}>Contact</button></li>
      </ul>
    </div>
  );
}

export default Sidebar;
