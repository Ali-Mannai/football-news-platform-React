import React from 'react'
import {Link} from 'react-router-dom';
export default function Header() {
  return (
<div>
  <div className="site-mobile-menu site-navbar-target">
    <div className="site-mobile-menu-header">
      <div className="site-mobile-menu-close">
        <span className="icon-close2 js-menu-toggle" />
      </div>
    </div>
    <div className="site-mobile-menu-body" />
  </div>
  <header className="site-navbar py-4" role="banner">
    <div className="container">
      <div className="d-flex align-items-center">
        <div className="site-logo">
          <a href="index.html">
            <img src="assets/images/logo.png" alt="Logo" />
          </a>
        </div>
        <div className="ml-auto">
          <nav className="site-navigation position-relative text-right" role="navigation">
            <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
              <li className="active"><Link to="" className="nav-link">Home</Link></li>
              <li><Link to="matches" className="nav-link">Matches</Link></li>
              <li><Link to="players" className="nav-link">Players</Link></li>
              <li><Link to="blog" className="nav-link">Blog</Link></li>
              <li><Link to="contact" className="nav-link">Contact</Link></li>
              <li><Link to="addMatch" className="nav-link">addMatch</Link></li>
              <li><Link to="addPlayers" className="nav-link">addPlayers</Link></li>
              <li><Link to="TablePlayers" className="nav-link">TablePlayers</Link></li>



            </ul>
          </nav>
          <a href="#" className="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black float-right text-white"><span className="icon-menu h3 text-white" /></a>
        </div>
      </div>
    </div>
  </header>
</div>

  );
}

