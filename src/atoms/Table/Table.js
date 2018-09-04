import { TablePlate as Plate, theme as tablePlateTheme } from './TablePlate';
import { TableHeader as Header, theme as tableHeaderTheme } from './TableHeader';
import { TableBody as Body, theme as tableBodyTheme } from './TableBody';
import { TableBodyRow as BodyRow, theme as tableBodyRowTheme } from './TableBodyRow';
import { TableFooter as Footer, theme as tableFooterTheme } from './TableFooter';
import { TableHeaderCell as HeaderCell, theme as tableHeaderCellTheme } from './TableHeaderCell';
import { TableBodyCell as BodyCell, theme as tableBodyCellTheme } from './TableBodyCell';

const Table = {
  Plate,
  Header,
  Body,
  BodyRow,
  Footer,
  HeaderCell,
  BodyCell,
};

const theme = {
  ...tablePlateTheme,
  ...tableHeaderTheme,
  ...tableBodyTheme,
  ...tableBodyRowTheme,
  ...tableFooterTheme,
  ...tableHeaderCellTheme,
  ...tableBodyCellTheme,
};

export {
  Table,
  theme,
};
