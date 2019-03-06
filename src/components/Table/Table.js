// @flow
import React from 'react';

import { Grid } from '../Grid';
import { createThemeTag } from '../../theme/createThemeTag';


import { theme as tableActionTheme } from './TableAction';
import { TableHeader, theme as tableHeaderTheme } from './TableHeader';
import { TableBody, theme as tableBodyTheme } from './TableBody';
import { TableBodyRow, theme as tableBodyRowTheme } from './TableBodyRow';
import { TableFooter, theme as tableFooterTheme } from './TableFooter';
import { TableHeaderCell, theme as tableHeaderCellTheme } from './TableHeaderCell';
import { TableBodyCell, theme as tableBodyCellTheme } from './TableBodyCell';


type TablePlateProps = {
  children?: React$Node,
  stretch?: boolean,
}

const name = 'tablePlate';

const [TableTag, tableTheme] = createThemeTag(name, {
});

const theme = {
  ...tableTheme,
  ...tableActionTheme,
  ...tableHeaderTheme,
  ...tableBodyTheme,
  ...tableBodyRowTheme,
  ...tableFooterTheme,
  ...tableHeaderCellTheme,
  ...tableBodyCellTheme,
};


function Table({
  action,
  children,
  columns,
  data,
  onActionClick,
  ...rest
  }: TablePlateProps) {
  return (
    <TableTag { ...rest } tagName={ Grid.Layout }>
      { children }
    </TableTag>
  );
}

Table.defaultProps = {
  rows: 'auto 1fr auto',
  stretch: true,
};

Table.Header = TableHeader;
Table.Body = TableBody;
Table.BodyRow = TableBodyRow;
Table.Footer = TableFooter;
Table.HeaderCell = TableHeaderCell;
Table.BodyCell = TableBodyCell;

export { Table, theme };
