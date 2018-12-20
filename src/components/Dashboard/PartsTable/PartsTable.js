import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import * as actions from './partsTable-action.js';
import { connect } from 'react-redux';
import matchSorter from 'match-sorter';
import { Redirect } from 'react-router-dom';

class PartsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false
    };
  }

  render() {
    const data = this.props.main.parts.map(element => {
      element.delete = 'X';
      return element;
    });
    console.log(data, 'i am the rendered table data');

    const columns = [
      {
        Header: 'Parts',
        columns: [
          {
            Header: 'ID',
            accessor: 'part_id',
            filterMethod: (filter, rows) =>
              matchSorter(rows, filter.value, { keys: ['part_id'] }),
            filterAll: true
          },
          {
            Header: 'Description',
            accessor: 'part_desc',
            filterMethod: (filter, rows) =>
              matchSorter(rows, filter.value, { keys: ['part_desc'] }),
            filterAll: true
          },
          {
            Header: 'Subpart?',
            accessor: 'part_sub',
            filterMethod: (filter, rows) =>
              matchSorter(rows, filter.value, { keys: ['part_sub'] }),
            filterAll: true
          },
          {
            Header: 'Source',
            accessor: 'part_src',
            filterMethod: (filter, rows) =>
              matchSorter(rows, filter.value, { keys: ['part_src'] }),
            filterAll: true
          },
          {
            Header: 'Manufacture Part Number',
            accessor: 'part_mfgnum',
            filterMethod: (filter, rows) =>
              matchSorter(rows, filter.value, { keys: ['part_mfgnum'] }),
            filterAll: true
          },
          {
            Header: 'Price',
            accessor: 'part_price',
            filterMethod: (filter, rows) =>
              matchSorter(rows, filter.value, { keys: ['part_price'] }),
            filterAll: true
          },
          {
            Header: 'Category ID',
            accessor: 'part_category',
            filterMethod: (filter, rows) =>
              matchSorter(rows, filter.value, { keys: ['part_category'] }),
            filterAll: true
          },
          {
            Header: 'Location ID',
            accessor: 'part_location',
            filterMethod: (filter, rows) =>
              matchSorter(rows, filter.value, { keys: ['part_location'] }),
            filterAll: true
          },
          {
            Header: 'Part Count',
            accessor: 'part_count',
            filterMethod: (filter, rows) =>
              matchSorter(rows, filter.value, { keys: ['part_count'] }),
            filterAll: true
          },
          {
            Header: 'Long lead?',
            accessor: 'part_longlead',
            filterMethod: (filter, rows) =>
              matchSorter(rows, filter.value, { keys: ['part_longlead'] }),
            filterAll: true
          },
          {
            Header: 'Notes',
            accessor: 'part_notes',
            filterMethod: (filter, rows) =>
              matchSorter(rows, filter.value, { keys: ['part_notes'] }),
            filterAll: true
          },
          {
            Header: 'Delete',
            accessor: 'delete'
          }
        ]
      }
    ];

    if (this.state.redirectToReferrer) return <Redirect to="/subtable" />;

    return (
      <ReactTable
        getTdProps={(state, rowInfo, column, instance) => {
          return {
            onClick: (e, handleOriginal) => {
              if (column.Header === 'Delete') {
                console.log(column, 'i am the columns');
                this.props.deleteItem(undefined, {
                  part_id: rowInfo.original.part_id
                });
              }

              if (rowInfo.original.part_sub === 'Y') {
                console.log('It was in this row:', rowInfo.original);
                this.setState({ redirectToReferrer: true });
              }

              if (handleOriginal) {
                handleOriginal();
              }
            }
          };
        }}
        data={data}
        filterable
        defaultFilterMethod={(filter, row) =>
          String(row[filter.id]) === filter.value
        }
        columns={columns}
        defaultPageSize={10}
        pageSizeOptions={[10, 20, 50, 100]}
        style={{ height: '500px', width: '1400px' }}
        className="-striped -highlight"
      />
    );
  }
}

const mapDispatchToProps = (dispatch, getState) => ({
  getParts: () => dispatch(actions.getParts()),
  deleteItem: (url, payload) => dispatch(actions.deleteItem(url, payload))
});

const mapStateToProps = state => ({
  main: state.main
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PartsTable);
