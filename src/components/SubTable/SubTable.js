import React, { Component } from 'react';
import ReactTable from 'react-table';

import { connect } from 'react-redux';
import matchSorter from 'match-sorter';
import { Redirect } from 'react-router-dom';

class SubTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <p> Waiting </p>;
  }
}

export default SubTable;
