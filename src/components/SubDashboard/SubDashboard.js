import React from 'react';
import { connect } from 'react-redux';
import logo from '../../assets/logo.png';
import NavUI from '../NavUI/NavUI.js';
import * as actions from './subDashboardAction.js';
import SubsTable from './SubTable/SubTable.js';

class SubDashboard extends React.Component {
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
    if (this.props.main.subAssembly == false) {
      this.props.getSub();
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="toolbar">
          <img src={logo} />
          <NavUI />
        </div>
        <div className="centered">
          <SubsTable />
        </div>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch, getState) => ({
  getSub: () => dispatch(actions.getSub())
});

const mapStateToProps = state => ({
  main: state.main
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubDashboard);
