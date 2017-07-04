import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed; // inverts the collapsed toggleCollapse
    this.setState({ collapsed });
  }

  render() {
    return (
      <div>
        <nav id="navbarMain">
          <div className="container">
            <div className="nav-wrapper">
              <NavLink
                to="#!"
                className="brand-logo"
              >
                <img
                  className="navbar-brand hide-on-small-and-down"
                  src="/client/images/logo-transparent.png"
                  alt="JerseyTalk Logo"
                  id="logo"
                />
              </NavLink>
              <NavLink
                to="#!"
                className="brand-logo"
              >
                <img
                  className="navbar-brand hide-on-med-and-up"
                  src="/src/images/logo/test-logo.png"
                  alt="JerseyTalk Logo"
                  id="smalllogo"
                />
              </NavLink>
              <NavLink
                to="#"
                data-activates="mobile-demo"
                className="button-collapse"
              >
                <i className="material-icons">menu</i>
              </NavLink>
              <ul className="right hide-on-med-and-down">
                <li className="nav-link">
                  <NavLink to="/">HOME</NavLink>
                </li>
                <li className="nav-link">
                  <NavLink to="/review">WRITE REVIEW</NavLink>
                </li>
                <li className="nav-link">
                  <NavLink to="/about-us">ABOUT</NavLink>
                </li>
                <li className="nav-link">
                  <NavLink to="/contact-us">CONTACT</NavLink>
                </li>
              </ul>
              <ul className="side-nav" id="mobile-demo">
                <li>
                  <NavLink to="/">HOME</NavLink>
                </li>
                <li>
                  <NavLink to="/review">WRITE REVIEW</NavLink>
                </li>
                <li>
                  <NavLink to="/about-us">ABOUT</NavLink>
                </li>
                <li>
                  <NavLink to="/contact-us">CONTACT</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
