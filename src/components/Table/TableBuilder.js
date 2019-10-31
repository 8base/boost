// @flow

import React, { PureComponent } from 'react';

import fp from 'lodash/fp';
import { TableHeader } from './TableHeader';
import { TableBody } from './TableBody';
import { TableFooter } from './TableFooter';
import { TableBodyRow } from './TableBodyRow';
import { TableHeaderCell } from './TableHeaderCell';
import { TableBodyCell } from './TableBodyCell';
import { Table } from './Table';
import { Checkbox } from '../Checkbox';
import { Pagination } from '../Pagination';
import { Input } from '../Input';

const DEFAULT_SORT_ENABLE = true;

type Sort = {
  name: string,
  order: 'ASC' | 'DESC',
};

type ColumnType = {
  title?: string,
  name: string,
  sortEnable?: boolean,
  width?: string,
};

type TableState = {
  sort?: Sort[],
  selectedIds?: Array<string>,
  pagination?: {
    page: number,
    pageSize: number,
    total?: number,
  }
};

type TableBulderProps = {
  /** Options of the columns */
  columns: Array<ColumnType>,
  columnGap: string,
  /** Data to show in table */
  data: Array<Object>,
  /** Callback to execute custom table action */
  onActionClick?: () => void,
  /** Text of the action or component to  replace standart action button*/
  action?: React$Node,
  /** Callback to pass state of the table */
  onChange?: TableState => void,
  /** States of the table sort and selections.  */
  tableState: TableState,
  /** Options to enable row selections */
  withSelection?: boolean,
  /** Options to enable multiple columns sorting */
  withMultipleSort?: boolean,
  /** Options to enable multiple columns sorting */
  withPagination?: boolean,
  /** Options to show loader */
  loading?: boolean,
  /** Calback to render cell */
  renderCell?: (column: ColumnType, data: any) => React$Node,
  /** Callback to render head cell */
  renderHeadCell?: (column: ColumnType) => React$Node,
  /** Callback to render head cell */
  condensed?: boolean,
  /** Component that is displayed when there is no data */
  noData?: React$Node,
};

class TableBuilder extends PureComponent<TableBulderProps> {
  static defaultProps = {
    columns: [],
    data: [],
    withMultipleSort: false,
    withSelection: false,
    tableState: {
      sort: [],
      selectedIds: [],
      pagination: {
        page: 1,
        pageSize: 10,
      },
    },
  };

  getGridColumns = () => {
    const { columns, withSelection } = this.props;

    const gridColumns = [];

    if (withSelection) {
      gridColumns.push('72px');
    }

    for (let i = 0; i < columns.length; i++) {
      gridColumns.push(columns[i].width || '1fr');
    }

    return gridColumns.join(' ');
  }

  getColumn = (columnName: string) => {
    const { columns } = this.props;

    return fp.find(
      ({ name }) => columnName === name,
      columns,
    ) || {};
  }

  getColumnSortEnable = (name: string) => {
    const column = this.getColumn(name);

    const sortEnable = fp.isNil(column.sortEnable)
      ? DEFAULT_SORT_ENABLE
      : column.sortEnable;

    return sortEnable;
  }

  onChange = (tableState: *) => {
    const { onChange } = this.props;

    onChange && onChange(tableState);
  }

  onSort = fp.memoize((name: string) => (orderDirection: 'ASC' | 'DESC') => {
    const { tableState = {}, withMultipleSort } = this.props;
    const previousSort = tableState.sort || [];

    const currentSort = [{ name, order: orderDirection }];

    const sort = withMultipleSort
      ? previousSort
        .filter(({ name: columnName }) => columnName !== name)
        .concat(currentSort)
      : currentSort;

    this.onChange({
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


  onSelectAllRows = () => {
    const { tableState = {}, data } = this.props;
    const isAllRowsSelected = this.hasAllRowsSelection();
    const allIds = fp.map('id', data);

    const selectedIds = isAllRowsSelected
      ? []
      : allIds;

    this.onChange({
      ...tableState,
      selectedIds,
    });
  }

  onSelectRow = fp.memoize((id: string) => () => {
    const { tableState = {}} = this.props;
    const previousSelectedIds = tableState.selectedIds || [];
    const isRowSelected = this.hasRowSelection(id);

    const selectedIds = isRowSelected
      ? fp.xor(previousSelectedIds, [id])
      : fp.uniq([...previousSelectedIds, id]);

    this.onChange({
      ...tableState,
      selectedIds,
    });
  })

  hasRowSelection = (id: string) => {
    const { tableState = {}} = this.props;
    const { selectedIds = [] } = tableState;

    return fp.findIndex(
      fp.equals(id),
      selectedIds,
    ) >= 0;
  }

  hasAllRowsSelection = () => {
    const { tableState = {}, data } = this.props;
    const { selectedIds = [] } = tableState;

    const allIds = fp.map('id', data);

    return !fp.isEmpty(allIds) && fp.isEmpty(fp.xor(selectedIds, allIds));
  }


  renderHeader = () => {
    const { columns, withSelection, renderHeadCell, ...rest } = this.props;

    return (
      <TableHeader columns={ this.getGridColumns() } modifiers={ rest }>
        <If condition={ !!withSelection }>
          <TableHeaderCell justifyContent="center" modifiers={ rest }>
            <Checkbox
              onChange={ this.onSelectAllRows }
              checked={ this.hasAllRowsSelection() }
            />
          </TableHeaderCell>
        </If>
        { columns.map((column) => (
          <TableHeaderCell
            key={ column.name }
            cursor="pointer"
            enableSort={ this.getColumnSortEnable(column.name) }
            onSort={ this.onSort(column.name) }
            order={ this.getColumnOrder(column.name) }
            modifiers={ rest }
          >
            { renderHeadCell ? renderHeadCell(column) : column.title || '' }
          </TableHeaderCell>
        )) }
      </TableHeader>
    );
  }


  renderRow = (rowData) => {
    const {
      columns,
      onActionClick,
      action,
      data,
      withSelection,
      renderCell,
      noData,
      tableState,
      onChange,
      ...rest
    } = this.props;

    return (
      <TableBodyRow
        columns={ this.getGridColumns() }
        key={ `row-${rowData.id}` }
        modifiers={ rest }
      >
        <If condition={ !!withSelection }>
          <TableBodyCell key={ `index-${rowData.id}` } justifyContent="center" modifiers={ rest }>
            <div>
              <Checkbox
                onChange={ this.onSelectRow(rowData.id) }
                checked={ this.hasRowSelection(rowData.id) }
              />
            </div>
          </TableBodyCell>
        </If>
        { columns.map((column) => (
          <TableBodyCell key={ `${column.name}-${rowData.id}` } modifiers={ rest }>
            <TableBodyCell />
          </TableBodyCell>
        )) }
      </TableBodyRow>
    );
  }

  renderBody = () => {
    const {
      columns,
      onActionClick,
      action,
      data,
      withSelection,
      renderCell,
      noData,
      tableState,
      onChange,
      ...rest
    } = this.props;

    return (
      <TableBody
        data={ data }
        onActionClick={ onActionClick }
        action={ action }
        loading={ rest.loading }
        noData={ noData }
        modifiers={ rest }
      >
        { this.renderRow }
      </TableBody >
    );
  }

  onChangePagination = (page: number, pageSize: number) => {
    const { onChange, tableState } = this.props;

    if (typeof onChange === 'function') {
      onChange({ ...tableState, pagination: { ...tableState.pagination, page, pageSize }});
    }
  }

  getPage = () => fp.getOr(1, 'tableState.pagination.page', this.props);
  getPageSize = () => fp.getOr(10, 'tableState.pagination.pageSize', this.props);
  getTotal = () => fp.getOr(0, 'tableState.pagination.total', this.props);

  renderFooter = () => {
    const { withPagination } = this.props;

    let footer = null;

    if (withPagination && this.getTotal()) {
      footer = (
        <TableFooter justifyContent="center">
          <Pagination
            page={ this.getPage() }
            pageSize={ this.getPageSize() }
            total={ this.getTotal() }
            onChange={ this.onChangePagination }
            showSizeChanger
          />
        </TableFooter>
      );
    }

    return footer;
  };

  render() {
    return (
      <Table>
        { this.renderHeader() }
        { this.renderBody() }
        { this.renderFooter() }
      </Table>
    );
  }
}

export { TableBuilder };

export type { TableBulderProps, ColumnType };
