import { Link } from 'react-router-dom';
import React from 'react';
import NavUI from '../NavUI/NavUI.js';
import Logo from '../../assets/logo.png';
import './createRedirect.scss';

class CreateRedirect extends React.Component {
  render() {
    return (
      <div>
        <div className="toolbar">
          <img src={Logo} />
          <NavUI />
        </div>
        <div className="switch">
          <nav className="navigation">
            <Link to="/createpart" className="navLink">
              Create a Part
            </Link>
            <Link to="/createsub" className="navLink">
              Build a Sub Assembly
            </Link>
          </nav>
        </div>
      </div>
    );
  }
}

export default CreateRedirect;
