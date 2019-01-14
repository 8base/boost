// @flow

import React, { Component } from 'react';

import fp from 'lodash/fp';
import { TableHeader } from './TableHeader';
import { TableBody } from './TableBody';
import { TableBodyRow } from './TableBodyRow';
import { TableHeaderCell } from './TableHeaderCell';
import { TableBodyCell } from './TableBodyCell';
import { Table } from './Table';
import { Checkbox } from '../Checkbox';


type ColumnType = {
  title: string,
  name: string,
  sortEnable?: boolean,
}

type TableState = {
  sort?: Array<{ name: string, order: 'ASC' | 'DESC' }>,
  selection?: Array<string>
}

type TableBulderProps = {
  columns: Array<ColumnType>,
  data: Array<Object>,
  onActionClick?: () => void,
  action?: React$Node,

  tableState: TableState,
  withSelection?: boolean,
  onChange: TableState => void,
}

class TableBuilder extends Component<TableBulderProps> {

  static defaultProps = {
    columns: [],
    data: [],
    tableState: {
      sort: [],
      selection: [],
    },
  }

  getGridColumns = () => {
    const { columns, withSelection } = this.props;

    return withSelection
      ? `80px repeat(${columns.length}, 1fr)`
      : `repeat(${columns.length}, 1fr)`;
  }

  onSort = fp.memoize((name: string) => (order: 'ASC' | 'DESC') => {
    const { onChange, tableState = {}} = this.props;
    const previousSort = tableState.sort || [];

    const sort = previousSort
      .filter(({ name: columnName }) => columnName !== name)
      .concat([{ name, order }]);

    onChange({
      ...tableState,
      sort,
    });
  })

  getColumnOrder = (name: string) => {
    const { tableState = {}} = this.props;
    const sort = tableState.sort || [];

    const { order } = sort
      .find(({ name: columnName }) => columnName === name)
      || {};

    return order;
  }


  selectAllRows = () => {
    const { onChange, tableState = {}, data } = this.props;
    const isAllRowsSelected = this.hasAllRowsSelection();
    const allIds = fp.map('id', data);

    const selection = isAllRowsSelected
      ? []
      : allIds;

    onChange({
      ...tableState,
      selection,
    });
  }

  selectRow = fp.memoize((id: string) => () => {
    const { onChange, tableState = {}} = this.props;
    const previousSelection = tableState.selection || [];
    const isRowSelected = this.hasRowSelection(id);

    const selection = isRowSelected
      ? fp.xor(previousSelection, [id])
      : fp.uniq([...previousSelection, id]);

    onChange({
      ...tableState,
      selection,
    });
  })

  hasRowSelection = (id: string) => {
    const { tableState: { selection } = {}} = this.props;

    return fp.findIndex(
      fp.equals(id),
      selection,
    ) >= 0;
  }

  hasAllRowsSelection = () => {
    const { tableState: { selection } = {}, data } = this.props;
    const allIds = fp.map('id', data);

    return fp.isEmpty(fp.xor(selection, allIds));
  }


  renderHeader = () => {
    const { columns, withSelection } = this.props;

    return (
      <TableHeader columns={ this.getGridColumns() }>
        <If condition={ !!withSelection }>
          <TableHeaderCell justifyContent="center">
            <Checkbox onChange={ this.selectAllRows } checked={ this.hasAllRowsSelection() } />
          </TableHeaderCell>
        </If>
        { columns.map(({ title, name }) => (
          <TableHeaderCell
            key={ name }
            cursor="pointer"
            onSort={ this.onSort(name) }
            order={ this.getColumnOrder(name) }
          >
            { title }
          </TableHeaderCell>
        ))
        }
      </TableHeader>
    );
  }

  renderBody = () => {
    const { columns, onActionClick, action, data, withSelection } = this.props;

    return (
      <TableBody data={ data } onActionClick={ onActionClick } action={ action } >
        {
          (rowData) => (
            <TableBodyRow columns={ this.getGridColumns() } key={ rowData.id }>
              <If condition={ !!withSelection }>
                <TableBodyCell justifyContent="center">
                  <Checkbox onChange={ this.selectRow(rowData.id) } checked={ this.hasRowSelection(rowData.id) } />
                </TableBodyCell>
              </If>
              { columns.map(({ name }) => (
                <TableBodyCell key={ name }>{ rowData[name] }</TableBodyCell>
              )) }
            </TableBodyRow>
          )
        }
      </TableBody >
    );
  }

  render() {
    return (
      <Table>
        { this.renderHeader() }
        { this.renderBody() }
      </Table>
    );
  }
}

export { TableBuilder };

export type { TableBulderProps, ColumnType };

