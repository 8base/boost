// @flow

import { TablePlate as Plate, theme as tablePlateTheme } from './TablePlate';
import { TableHeader as Header, theme as tableHeaderTheme } from './TableHeader';
import { TableBody as Body, theme as tableBodyTheme } from './TableBody';
import { TableBodyRow as BodyRow, theme as tableBodyRowTheme } from './TableBodyRow';
import { TableFooter as Footer, theme as tableFooterTheme } from './TableFooter';
import { TableHeaderCell as HeaderCell, theme as tableHeaderCellTheme } from './TableHeaderCell';
import { TableBodyCell as BodyCell, theme as tableBodyCellTheme } from './TableBodyCell';
import { TableAction as Action, theme as tableActionTheme } from './TableAction';

const Table = {
  Plate,
  Header,
  Body,
  BodyRow,
  Footer,
  HeaderCell,
  BodyCell,
  Action,
};

const theme = {
  ...tablePlateTheme,
  ...tableHeaderTheme,
  ...tableBodyTheme,
  ...tableBodyRowTheme,
  ...tableFooterTheme,
  ...tableHeaderCellTheme,
  ...tableBodyCellTheme,
  ...tableActionTheme,
};

export {
  Table,
  theme,
};
