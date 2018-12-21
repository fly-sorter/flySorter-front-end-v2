import { Link } from 'react-router-dom';
import React from 'react';
import './navui.scss';

class NavUi extends React.Component {
  render() {
    return (
      <nav className="navigation">
        <Link to="/part-table" className="navLink">
          Parts Table
        </Link>

        <Link to="/sub-table" className="navLink">
          Subs Table
        </Link>

        <Link to="/createpart" className="navLink">
          Create a Part
        </Link>

        <Link to="/createsub" className="navLink">
          Create a Sub
        </Link>

        <Link to="/editpart" className="navLink">
          Edit a Part
        </Link>
      </nav>
    );
  }
}

export default NavUi;
