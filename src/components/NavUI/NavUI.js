import { Link } from 'react-router-dom';
import React from 'react';
import './navui.scss';

class NavUi extends React.Component {
  render() {
    return (
      <nav className="navigation">
        <Link to="/dashboard" className="navLink">
          Dashboard
        </Link>
        <Link to="/createpart" className="navLink">
          Create a Part
        </Link>
        <Link to="/editpart" className="navLink">
          Edit a Part
        </Link>

        <Link to="/accounts" className="navLink">
          Accounts
        </Link>
      </nav>
    );
  }
}

export default NavUi;
