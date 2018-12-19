import React from 'react';
import { connect } from 'react-redux';
import logo from '../../assets/logo.png';
import NavUI from './NavUI/NavUI.js';
import './dashboard.scss';
import * as actions from './dashboardAction.js';
import PartsTable from './PartsTable/PartsTable.js';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      finishedLoading: false
    };
  }

  //use this to render table
  componentDidMount = () => {
    this.loadTable();
  };

  loadTable = () => {
    this.props.getParts();
  };

  render() {
    return (
      <React.Fragment>
        <div className="toolbar">
          <img src={logo} />
          <NavUI />
        </div>
        <div className="centered">
          <PartsTable />
        </div>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch, getState) => ({
  getParts: () => dispatch(actions.getParts())
});

const mapStateToProps = state => ({
  main: state.main
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
