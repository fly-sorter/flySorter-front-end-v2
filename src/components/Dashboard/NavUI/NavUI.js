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
          Create A Part
        </Link>
        <Link to="/subAssy-create" className="navLink">
          Create A Sub Assembly
        </Link>

        <Link to="/accounts" className="navLink">
          Accounts
        </Link>
      </nav>
    );
  }
}

export default NavUi;
