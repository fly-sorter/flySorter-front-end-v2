import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import * as actions from './subTableAction.js';
import { connect } from 'react-redux';
import matchSorter from 'match-sorter';
import { Redirect } from 'react-router-dom';

class SubTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false
    };
  }

  render() {
    const data = this.props.main.subAssembly.map(element => {
      element.delete = 'X';
      return element;
    });

    console.log(data, 'i am the rendered table data');

    const columns = [
      {
        Header: 'Sub Assembly',
        columns: [
          {
            Header: 'ID',
            accessor: 'sub_id',
            filterMethod: (filter, rows) =>
              matchSorter(rows, filter.value, { keys: ['sub_id'] }),
            filterAll: true
          },
          {
            Header: 'Description',
            accessor: 'sub_desc',
            filterMethod: (filter, rows) =>
              matchSorter(rows, filter.value, { keys: ['sub_desc'] }),
            filterAll: true
          },
          {
            Header: 'Version',
            accessor: 'sub_version',
            filterMethod: (filter, rows) =>
              matchSorter(rows, filter.value, { keys: ['sub_version'] }),
            filterAll: true
          },
          {
            Header: 'Total Price',
            accessor: 'sub_total_price',
            filterMethod: (filter, rows) =>
              matchSorter(rows, filter.value, { keys: ['sub_total_price'] }),
            filterAll: true
          },
          {
            Header: 'Quantity',
            accessor: 'sub_qty',
            filterMethod: (filter, rows) =>
              matchSorter(rows, filter.value, { keys: ['sub_qty'] }),
            filterAll: true
          },
          {
            Header: 'Labor Minute',
            accessor: 'sub_labormins',
            filterMethod: (filter, rows) =>
              matchSorter(rows, filter.value, { keys: ['sub_labormins'] }),
            filterAll: true
          },
          {
            Header: 'Parent ID',
            accessor: 'sub_parent_id',
            filterMethod: (filter, rows) =>
              matchSorter(rows, filter.value, { keys: ['sub_parent_id'] }),
            filterAll: true
          },
          {
            Header: 'Child ID',
            accessor: 'sub_child_id',
            filterMethod: (filter, rows) =>
              matchSorter(rows, filter.value, { keys: ['sub_child_id'] }),
            filterAll: true
          },
          {
            Header: 'Delete',
            accessor: 'delete'
          }
        ]
      }
    ];

    if (this.state.redirectToReferrer) return <Redirect to="/" />;

    return (
      <ReactTable
        getTdProps={(state, rowInfo, column, instance) => {
          return {
            onClick: (e, handleOriginal) => {
              if (rowInfo && column.Header === 'Delete') {
                if (window.confirm('Delete Item?')) {
                  this.props.deleteItem(undefined, {
                    sub_id: rowInfo.original.sub_id
                  });
                }
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
        style={{ height: '600px' }}
        className="-striped -highlight"
      />
    );
  }
}

const mapDispatchToProps = (dispatch, getState) => ({
  getSubAssembly: () => dispatch(actions.getSubAssembly()),
  deleteItem: (url, payload) => dispatch(actions.deleteItem(url, payload))
});

const mapStateToProps = state => ({
  main: state.main
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubTable);
