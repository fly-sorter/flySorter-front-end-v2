import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import * as actions from './partsTable-action.js';
import { connect } from 'react-redux';

class PartsTable extends React.Component {
  render() {
    const data = this.props.main.parts;
    console.log(data, 'i am the rendered table data');

    const columns = [
      {
        Header: 'Parts',
        columns: [
          { Header: 'ID', accessor: 'part_id' },
          { Header: 'Description', accessor: 'part_desc' },
          { Header: 'Subpart?', accessor: 'part_sub' },
          { Header: 'Source', accessor: 'part_src' },
          {
            Header: 'Manufacture Part Number',
            accessor: 'part_mfgnum'
          },
          { Header: 'Price', accessor: 'part_price' },
          { Header: 'Category ID', accessor: 'part_category' },
          { Header: 'Location ID', accessor: 'part_location' },
          { Header: 'Part Count', accessor: 'part_count' },
          { Header: 'Long lead?', accessor: 'part_longlead' },
          { Header: 'Notes', accessor: 'part_notes' }
        ]
      }
    ];

    return (
      <ReactTable
        data={data}
        columns={columns}
        defaultPageSize={10}
        pageSizeOptions={[10, 20, 100]}
        style={{ height: '500px', width: '1400px' }}
        className="-striped -highlight"
      />
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
)(PartsTable);
